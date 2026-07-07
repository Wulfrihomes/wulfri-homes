import { Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Loader2 } from "lucide-react";

export const ProtectedRoute = ({ children, requireAdmin = false }: { children: React.ReactNode; requireAdmin?: boolean }) => {
  const { session, isAdmin, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-ivory">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!session) return <Navigate to="/auth" replace />;
  if (requireAdmin && !isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-ivory px-4">
        <div className="text-center max-w-md">
          <h1 className="font-serif text-3xl text-charcoal mb-3">Access Restricted</h1>
          <p className="text-stone mb-6">This dashboard is for admin users only.</p>
          <a href="/" className="btn-gold inline-block">Return Home</a>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};
