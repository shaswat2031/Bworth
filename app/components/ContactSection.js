"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, User, MessageSquare } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { translations as t } from "../utils/translations";

export default function ContactSection() {
  const { theme } = useTheme();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

  const isWhite = theme === "white";

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });

    const form = event.currentTarget;
    const formData = new FormData(event.currentTarget);
    const payload = {
      name: formData.get("name")?.toString().trim(),
      email: formData.get("email")?.toString().trim(),
      phone: formData.get("phone")?.toString().trim(),
      comments: formData.get("comments")?.toString().trim(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Failed to submit.");

      setSubmitStatus({ type: "success", message: "Message sent! We'll reach out soon." });
      form.reset();
    } catch (error) {
      setSubmitStatus({ type: "error", message: error.message || "Something went wrong." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={`py-24 px-6 md:px-12 border-t transition-colors ${
      isWhite ? "bg-slate-100 border-slate-200" : "bg-[#061217] border-white/10"
    }`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Column: Heading & Quick Contact Info */}
        <div className="lg:col-span-5 space-y-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#14A3C7]/15 border border-[#14A3C7]/30 text-[#14A3C7]">
              <span className="text-xs font-black uppercase tracking-widest">GET IN TOUCH</span>
            </div>

            <h2 className={`text-5xl md:text-7xl font-serif font-black uppercase tracking-tighter leading-[0.95] ${
              isWhite ? "text-slate-900" : "text-white"
            }`}>
              Have <span className="text-[#14A3C7] italic">Questions?</span>
            </h2>
            <p className={`text-lg font-normal leading-relaxed ${
              isWhite ? "text-slate-700" : "text-slate-300"
            }`}>
              {t.contact_page.help_desc}
            </p>
          </motion.div>

          <div className="space-y-4">
            <div className={`flex items-center gap-4 p-4 rounded-2xl border shadow-sm ${
              isWhite ? "bg-white border-slate-200 text-slate-900" : "bg-[#0b1d26] border-white/10 text-white"
            }`}>
              <div className="w-12 h-12 rounded-xl bg-[#14A3C7]/20 text-[#14A3C7] flex items-center justify-center shrink-0">
                <Phone size={22} />
              </div>
              <div>
                <p className={`text-xs font-black uppercase tracking-wider ${isWhite ? "text-slate-500" : "text-slate-400"}`}>Call Us</p>
                <p className="text-base font-extrabold">+91 8826668050</p>
              </div>
            </div>

            <div className={`flex items-center gap-4 p-4 rounded-2xl border shadow-sm ${
              isWhite ? "bg-white border-slate-200 text-slate-900" : "bg-[#0b1d26] border-white/10 text-white"
            }`}>
              <div className="w-12 h-12 rounded-xl bg-[#14A3C7]/20 text-[#14A3C7] flex items-center justify-center shrink-0">
                <Mail size={22} />
              </div>
              <div>
                <p className={`text-xs font-black uppercase tracking-wider ${isWhite ? "text-slate-500" : "text-slate-400"}`}>Email</p>
                <p className="text-base font-extrabold">info@bworth.co.in</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Modern High-Contrast Contact Form */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={`p-8 sm:p-12 rounded-[2.5rem] border shadow-2xl backdrop-blur-xl ${
              isWhite
                ? "bg-white border-slate-200 text-slate-900 shadow-xl shadow-slate-300/40"
                : "bg-[#081822] border-white/15 text-white shadow-2xl shadow-black/80"
            }`}
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Name Input */}
                <div className="space-y-2">
                  <label className={`text-xs font-black uppercase tracking-wider flex items-center gap-1.5 ${
                    isWhite ? "text-slate-800" : "text-slate-200"
                  }`}>
                    <User size={14} className="text-[#14A3C7]" />
                    <span>Your Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    required
                    className={`w-full p-4 rounded-2xl border-2 font-medium text-base outline-none transition-all ${
                      isWhite
                        ? "bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-[#14A3C7] focus:bg-white focus:ring-4 focus:ring-[#14A3C7]/15"
                        : "bg-[#0b1d26] border-slate-700 text-white placeholder:text-slate-400 focus:border-[#14A3C7] focus:ring-4 focus:ring-[#14A3C7]/20"
                    }`}
                  />
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label className={`text-xs font-black uppercase tracking-wider flex items-center gap-1.5 ${
                    isWhite ? "text-slate-800" : "text-slate-200"
                  }`}>
                    <Mail size={14} className="text-[#14A3C7]" />
                    <span>Email Address</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="name@example.com"
                    required
                    className={`w-full p-4 rounded-2xl border-2 font-medium text-base outline-none transition-all ${
                      isWhite
                        ? "bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-[#14A3C7] focus:bg-white focus:ring-4 focus:ring-[#14A3C7]/15"
                        : "bg-[#0b1d26] border-slate-700 text-white placeholder:text-slate-400 focus:border-[#14A3C7] focus:ring-4 focus:ring-[#14A3C7]/20"
                    }`}
                  />
                </div>
              </div>

              {/* Phone Input */}
              <div className="space-y-2">
                <label className={`text-xs font-black uppercase tracking-wider flex items-center gap-1.5 ${
                  isWhite ? "text-slate-800" : "text-slate-200"
                }`}>
                  <Phone size={14} className="text-[#14A3C7]" />
                  <span>Phone Number</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 98765 43210"
                  required
                  className={`w-full p-4 rounded-2xl border-2 font-medium text-base outline-none transition-all ${
                    isWhite
                      ? "bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-[#14A3C7] focus:bg-white focus:ring-4 focus:ring-[#14A3C7]/15"
                      : "bg-[#0b1d26] border-slate-700 text-white placeholder:text-slate-400 focus:border-[#14A3C7] focus:ring-4 focus:ring-[#14A3C7]/20"
                  }`}
                />
              </div>

              {/* Message Input */}
              <div className="space-y-2">
                <label className={`text-xs font-black uppercase tracking-wider flex items-center gap-1.5 ${
                  isWhite ? "text-slate-800" : "text-slate-200"
                }`}>
                  <MessageSquare size={14} className="text-[#14A3C7]" />
                  <span>How Can We Help?</span>
                </label>
                <textarea
                  name="comments"
                  rows="3"
                  placeholder="Tell us about your garment recycling or buyback inquiry..."
                  required
                  className={`w-full p-4 rounded-2xl border-2 font-medium text-base outline-none transition-all resize-none ${
                    isWhite
                      ? "bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-[#14A3C7] focus:bg-white focus:ring-4 focus:ring-[#14A3C7]/15"
                      : "bg-[#0b1d26] border-slate-700 text-white placeholder:text-slate-400 focus:border-[#14A3C7] focus:ring-4 focus:ring-[#14A3C7]/20"
                  }`}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4.5 px-6 rounded-2xl font-black uppercase tracking-[0.2em] text-xs transition-all shadow-xl bg-[#14A3C7] text-white hover:bg-[#0d829f] active:scale-[0.99] flex items-center justify-center gap-3 group"
              >
                <span>{isSubmitting ? "Sending..." : "SEND MESSAGE"}</span>
                <Send size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>

              {submitStatus.message && (
                <p className={`text-xs font-bold uppercase text-center mt-2 ${
                  submitStatus.type === "success" ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"
                }`}>
                  {submitStatus.message}
                </p>
              )}
            </form>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
