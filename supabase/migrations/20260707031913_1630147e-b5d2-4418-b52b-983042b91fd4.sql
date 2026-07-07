
-- Roles system
CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');

CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role public.app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

CREATE POLICY "Users can view their own roles"
  ON public.user_roles FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all roles"
  ON public.user_roles FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- Leads table
CREATE TABLE public.leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  country TEXT,
  project_interest TEXT NOT NULL DEFAULT 'Emirates Parks & Gardens',
  plot_size TEXT,
  payment_plan TEXT,
  budget TEXT,
  timeline TEXT,
  buyer_type TEXT,
  message TEXT,
  source TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  score INTEGER NOT NULL DEFAULT 0,
  priority TEXT NOT NULL DEFAULT 'cold',
  status TEXT NOT NULL DEFAULT 'new',
  admin_notes TEXT,
  assigned_to UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT INSERT ON public.leads TO anon, authenticated;
GRANT SELECT, UPDATE, DELETE ON public.leads TO authenticated;
GRANT ALL ON public.leads TO service_role;

ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a lead"
  ON public.leads FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Admins can view all leads"
  ON public.leads FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update leads"
  ON public.leads FOR UPDATE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete leads"
  ON public.leads FOR DELETE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- Lead scoring function
CREATE OR REPLACE FUNCTION public.compute_lead_score()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
DECLARE
  s INTEGER := 0;
BEGIN
  -- Contact completeness
  IF NEW.full_name IS NOT NULL AND length(NEW.full_name) > 2 THEN s := s + 10; END IF;
  IF NEW.email ~* '^[^@]+@[^@]+\.[^@]+$' THEN s := s + 15; END IF;
  IF NEW.phone IS NOT NULL AND length(NEW.phone) >= 7 THEN s := s + 15; END IF;

  -- Budget signal
  IF NEW.budget ILIKE '%50M%' OR NEW.budget ILIKE '%100M%' OR NEW.budget ILIKE '%above%' THEN s := s + 30;
  ELSIF NEW.budget ILIKE '%20M%' OR NEW.budget ILIKE '%30M%' THEN s := s + 20;
  ELSIF NEW.budget ILIKE '%10M%' THEN s := s + 15;
  ELSIF NEW.budget IS NOT NULL THEN s := s + 8;
  END IF;

  -- Timeline urgency
  IF NEW.timeline ILIKE '%immediate%' OR NEW.timeline ILIKE '%now%' OR NEW.timeline ILIKE '%1 month%' THEN s := s + 25;
  ELSIF NEW.timeline ILIKE '%3 month%' THEN s := s + 15;
  ELSIF NEW.timeline ILIKE '%6 month%' THEN s := s + 8;
  END IF;

  -- Buyer type
  IF NEW.buyer_type ILIKE '%investor%' OR NEW.buyer_type ILIKE '%diaspora%' THEN s := s + 10; END IF;

  -- Plot size and payment
  IF NEW.plot_size IS NOT NULL THEN s := s + 5; END IF;
  IF NEW.payment_plan ILIKE '%outright%' THEN s := s + 10;
  ELSIF NEW.payment_plan IS NOT NULL THEN s := s + 5;
  END IF;

  NEW.score := LEAST(s, 100);
  NEW.priority := CASE
    WHEN NEW.score >= 70 THEN 'hot'
    WHEN NEW.score >= 45 THEN 'warm'
    ELSE 'cold'
  END;
  NEW.updated_at := now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER trg_lead_score
  BEFORE INSERT OR UPDATE ON public.leads
  FOR EACH ROW EXECUTE FUNCTION public.compute_lead_score();

-- Auto-assign admin role to first signup (bootstrap)
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM public.user_roles WHERE role = 'admin') THEN
    INSERT INTO public.user_roles (user_id, role) VALUES (NEW.id, 'admin');
  ELSE
    INSERT INTO public.user_roles (user_id, role) VALUES (NEW.id, 'user');
  END IF;
  RETURN NEW;
END;
$$;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Index
CREATE INDEX idx_leads_created_at ON public.leads(created_at DESC);
CREATE INDEX idx_leads_priority ON public.leads(priority);
CREATE INDEX idx_leads_status ON public.leads(status);
