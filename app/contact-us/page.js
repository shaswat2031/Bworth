"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Phone, Mail, MapPin, Send } from "lucide-react";
import Footer from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { translations } from "../utils/translations";

export default function ContactUs() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const t = translations[language];
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });

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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit contact form.");
      }

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully. We will reach you soon.",
      });
      event.currentTarget.reset();
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: error.message || "Failed to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main
      className={`min-h-screen transition-colors ${theme === "white" ? "bg-[#F8FAFC] text-black" : "bg-[#14A3C7] text-white"
        }`}
    >
      <section
        className={`relative pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-12 border-b transition-colors ${theme === "white"
          ? "bg-black/[0.02] border-b border-black/5"
          : "bg-white/[0.02] border-b border-white/5"
          }`}
      >
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-bold tracking-widest text-xs uppercase mb-8 md:mb-12 group"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />
            {t.common.back_home}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] font-serif font-black uppercase tracking-tighter leading-[0.85] mb-8 md:mb-12">
              {t.contact_page.start_convo} <br /> <span className={theme === "white" ? "text-[#14A3C7]" : "text-black"}>{t.contact_page.conversation}</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section
        className={`py-16 md:py-24 px-6 md:px-12 border-t transition-colors ${theme === "white" ? "border-black/5" : "border-white/5"
          }`}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-16">
            <div className="space-y-8">
              <Image
                src="/logo.png"
                alt="Bworth Logo"
                width={150}
                height={50}
                className={`mb-8 ${theme === "white" ? "" : "brightness-0 invert"}`}
              />
              <p
                className={`font-medium leading-relaxed max-w-sm ${theme === "white" ? "text-black" : "text-white"
                  }`}
              >
                {t.contact_page.help_desc}
              </p>
            </div>

            <div className="space-y-10">
              <div className="flex gap-6 group">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center group-hover:bg-[#14A3C7] group-hover:text-white transition-all duration-300 ${theme === "white" ? "bg-black/5 text-[#14A3C7]" : "bg-white/5 text-white"
                    }`}
                >
                  <Phone size={24} />
                </div>
                <div>
                  <span
                    className={`text-[10px] uppercase tracking-[0.2em] font-bold block mb-1 ${theme === "white" ? "text-black" : "text-white"
                      }`}
                  >
                    {t.contact_page.phone}
                  </span>
                  <p className="text-xl font-normal">+91 8826668050</p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center text-[#14A3C7] group-hover:bg-[#14A3C7] group-hover:text-white transition-all duration-300 ${theme === "white" ? "bg-black/5" : "bg-white/5"
                    }`}
                >
                  <Mail size={24} />
                </div>
                <div>
                  <span
                    className={`text-[10px] uppercase tracking-[0.2em] font-bold block mb-1 ${theme === "white" ? "text-black" : "text-white"
                      }`}
                  >
                    {t.contact_page.email}
                  </span>
                  <p className="text-xl font-bold underline decoration-[#14A3C7]/30 underline-offset-8">
                    info@bworth.co.in
                  </p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center text-[#14A3C7] group-hover:bg-[#14A3C7] group-hover:text-white transition-all duration-300 ${theme === "white" ? "bg-black/5" : "bg-white/5"
                    }`}
                >
                  <MapPin size={24} />
                </div>
                <div>
                  <span
                    className={`text-[10px] uppercase tracking-[0.2em] font-bold block mb-1 ${theme === "white" ? "text-black" : "text-white"
                      }`}
                  >
                    {t.contact_page.location}
                  </span>
                  <p className="text-xl font-bold">{t.contact_page.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <div
              className={`p-8 md:p-12 border rounded-[3rem] backdrop-blur-xl transition-colors ${theme === "white"
                ? "bg-black/[0.02] border-black/5"
                : "bg-white/[0.02] border-white/5"
                }`}
            >
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className={`text-[10px] font-bold uppercase tracking-widest ml-1 ${theme === "white" ? "text-black" : "text-white"
                        }`}
                    >
                      {t.contact_page.your_name}
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder={t.contact_page.ph_name}
                      autoComplete="name"
                      minLength={2}
                      maxLength={50}
                      pattern="[a-zA-Z\s]+"
                      title="Name should only contain letters and spaces."
                      className={`w-full border-b p-4 focus:border-[#14A3C7] outline-none transition-colors font-bold ${theme === "white"
                        ? "bg-black/5 border-black/10 placeholder:text-black/50 text-black"
                        : "bg-white/5 border-white/10 placeholder:text-white/40 text-white"
                        }`}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className={`text-[10px] font-bold uppercase tracking-widest ml-1 ${theme === "white" ? "text-black" : "text-white"
                        }`}
                    >
                      {t.contact_page.your_email}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder={t.contact_page.ph_email}
                      autoComplete="email"
                      title="Please enter a valid email address."
                      className={`w-full border-b p-4 focus:border-[#14A3C7] outline-none transition-colors font-bold ${theme === "white"
                        ? "bg-black/5 border-black/10 placeholder:text-black/50 text-black"
                        : "bg-white/5 border-white/10 placeholder:text-white/40 text-white"
                        }`}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="tel"
                    className={`text-[10px] font-bold uppercase tracking-widest ml-1 ${theme === "white" ? "text-black" : "text-white"
                      }`}
                  >
                    {t.contact_page.mobile}
                  </label>
                  <input
                    id="tel"
                    name="phone"
                    type="tel"
                    placeholder="+91"
                    autoComplete="tel"
                    pattern="[+]?[0-9]{10,14}"
                    title="Phone number should be 10-14 digits, optionally starting with +."
                    className={`w-full border-b p-4 focus:border-[#14A3C7] outline-none transition-colors font-bold ${theme === "white"
                      ? "bg-black/5 border-black/10 placeholder:text-black/50 text-black"
                      : "bg-white/5 border-white/10 placeholder:text-white/40 text-white"
                      }`}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="comments"
                    className={`text-[10px] font-bold uppercase tracking-widest ml-1 ${theme === "white" ? "text-black" : "text-white"
                      }`}
                  >
                    {t.contact_page.comments}
                  </label>
                  <textarea
                    id="comments"
                    name="comments"
                    rows="4"
                    minLength={10}
                    maxLength={1000}
                    placeholder={t.contact_page.ph_comments}
                    className={`w-full border-b p-4 focus:border-[#14A3C7] outline-none transition-colors font-bold resize-none ${theme === "white"
                      ? "bg-black/5 border-black/10 placeholder:text-black/50 text-black"
                      : "bg-white/5 border-white/10 placeholder:text-white/40 text-white"
                      }`}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-[#14A3C7] text-white p-6 rounded-full font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-3 shadow-xl shadow-[#14A3C7]/20 group ${isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-[#14A3C7]"}`}
                >
                  {isSubmitting ? "Sending..." : t.contact_page.send}
                  <Send
                    size={18}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </button>
                {submitStatus.message ? (
                  <p
                    className={`text-sm font-medium ${submitStatus.type === "success"
                      ? theme === "white"
                        ? "text-green-700"
                        : "text-green-200"
                      : theme === "white"
                        ? "text-red-700"
                        : "text-red-200"
                      }`}
                  >
                    {submitStatus.message}
                  </p>
                ) : null}
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
