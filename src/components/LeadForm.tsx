import React, { useState } from "react";
import { Link } from "react-router-dom";

interface LeadFormProps {
  source?: string;
  projectInterest?: string;
  variant?: "default" | "premium";
}

export const LeadForm: React.FC<LeadFormProps> = ({
  source = "Project Page",
  projectInterest = "",
}) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    buyerType: "",
    plotSize: "",
    paymentPlan: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call / Lead submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Main Form Container Card */}
      <div className="bg-white border border-gray-200 rounded-sm p-6 sm:p-10 shadow-sm text-left">
        {/* Form Header */}
        <div className="mb-8">
          <p className="text-[10px] tracking-[0.25em] font-bold text-[#D97706] uppercase mb-1">
            Reserve Your Plot
          </p>
          <h3 className="font-serif text-2xl sm:text-3xl text-charcoal font-semibold mb-1">
            Speak With an Advisor
          </h3>
          <p className="text-xs sm:text-sm text-gray-500">
            Limited units remaining. Response within 24 hours.
          </p>
        </div>

        {submitted ? (
          <div className="bg-green-50 border border-green-200 text-green-800 p-6 text-center rounded-sm">
            <h4 className="font-serif text-xl font-bold mb-2">Thank You!</h4>
            <p className="text-sm">
              Your request for {projectInterest || "this project"} has been received. A senior advisor will reach out to you shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-[11px] font-bold tracking-[0.15em] text-gray-600 uppercase mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder=""
                className="w-full h-11 px-4 border border-gray-200 rounded-none bg-white text-sm text-charcoal focus:outline-none focus:border-[#D97706] transition-colors"
              />
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[11px] font-bold tracking-[0.15em] text-gray-600 uppercase mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder=""
                  className="w-full h-11 px-4 border border-gray-200 rounded-none bg-white text-sm text-charcoal focus:outline-none focus:border-[#D97706] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold tracking-[0.15em] text-gray-600 uppercase mb-2">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+234..."
                  className="w-full h-11 px-4 border border-gray-200 rounded-none bg-white text-sm text-charcoal focus:outline-none focus:border-[#D97706] transition-colors placeholder:text-gray-300"
                />
              </div>
            </div>

            {/* Country & Buyer Type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[11px] font-bold tracking-[0.15em] text-gray-600 uppercase mb-2">
                  Country / Location *
                </label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="Nigeria, UK, US..."
                  className="w-full h-11 px-4 border border-gray-200 rounded-none bg-white text-sm text-charcoal focus:outline-none focus:border-[#D97706] transition-colors placeholder:text-gray-300"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold tracking-[0.15em] text-gray-600 uppercase mb-2">
                  Buyer Type
                </label>
                <select
                  name="buyerType"
                  value={formData.buyerType}
                  onChange={handleChange}
                  className="w-full h-11 px-4 border border-gray-200 rounded-none bg-white text-sm text-gray-700 focus:outline-none focus:border-[#D97706] transition-colors"
                >
                  <option value="">Select...</option>
                  <option value="individual">Individual Investor</option>
                  <option value="corporate">Corporate Buyer</option>
                  <option value="diaspora">Diaspora Investor</option>
                  <option value="realtor">Realtor / Agent</option>
                </select>
              </div>
            </div>

            {/* Plot Size & Payment Plan */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[11px] font-bold tracking-[0.15em] text-gray-600 uppercase mb-2">
                  Plot Size
                </label>
                <select
                  name="plotSize"
                  value={formData.plotSize}
                  onChange={handleChange}
                  className="w-full h-11 px-4 border border-gray-200 rounded-none bg-white text-sm text-gray-700 focus:outline-none focus:border-[#D97706] transition-colors"
                >
                  <option value="">Select...</option>
                  <option value="300sqm">300 SQM</option>
                  <option value="500sqm">500 SQM</option>
                  <option value="500sqm">550 SQM</option>
                  <option value="500sqm">600 SQM</option>
                  <option value="1000sqm">1,000 SQM / Commercial</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold tracking-[0.15em] text-gray-600 uppercase mb-2">
                  Payment Plan
                </label>
                <select
                  name="paymentPlan"
                  value={formData.paymentPlan}
                  onChange={handleChange}
                  className="w-full h-11 px-4 border border-gray-200 rounded-none bg-white text-sm text-gray-700 focus:outline-none focus:border-[#D97706] transition-colors"
                >
                  <option value="">Select...</option>
                  <option value="outright">Outright Payment</option>
                  <option value="3-months">3 Months Installment</option>
                  <option value="6-months">6 Months Installment</option>
                  <option value="12-months">12 Months Installment</option>
                </select>
              </div>
            </div>

            {/* Budget & Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[11px] font-bold tracking-[0.15em] text-gray-600 uppercase mb-2">
                  Budget
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full h-11 px-4 border border-gray-200 rounded-none bg-white text-sm text-gray-700 focus:outline-none focus:border-[#D97706] transition-colors"
                >
                  <option value="">Select...</option>
                  <option value="under-5m">Under ₦5,000,000</option>
                  <option value="5m-15m">₦5,000,000 - ₦15,000,000</option>
                  <option value="15m-50m">₦15,000,000 - ₦50,000,000</option>
                  <option value="50m-plus">₦50,000,000+</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold tracking-[0.15em] text-gray-600 uppercase mb-2">
                  Timeline
                </label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full h-11 px-4 border border-gray-200 rounded-none bg-white text-sm text-gray-700 focus:outline-none focus:border-[#D97706] transition-colors"
                >
                  <option value="">Select...</option>
                  <option value="immediate">Immediate (This week)</option>
                  <option value="1-month">Within 1 Month</option>
                  <option value="1-3-months">1 - 3 Months</option>
                  <option value="exploring">Just Exploring</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-[11px] font-bold tracking-[0.15em] text-gray-600 uppercase mb-2">
                Message (Optional)
              </label>
              <textarea
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                className="w-full p-4 border border-gray-200 rounded-none bg-white text-sm text-charcoal focus:outline-none focus:border-[#D97706] transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-13 bg-[#C2410C] hover:bg-[#A3360A] text-white text-xs font-bold tracking-[0.2em] uppercase transition-colors shadow-sm disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "REQUEST SITE INSPECTION"}
              </button>
            </div>

            {/* Privacy Subtext */}
            <p className="text-center text-[10px] text-gray-400 mt-3 font-medium">
              Your Information is confidential and never shared.
            </p>
          </form>
        )}
      </div>

      {/* Bottom Footer Link outside form card */}
      <div className="text-center mt-6 text-xs text-gray-600">
        Prefer to browse all our estates?{" "}
        <Link to="/projects" className="text-[#D97706] font-semibold hover:underline">
          View all projects
        </Link>
      </div>
    </div>
  );
};