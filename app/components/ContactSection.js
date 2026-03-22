"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { translations as t } from "../utils/translations";

export default function ContactSection() {
    const { theme } = useTheme();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

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
        <section className={`py-24 px-6 md:px-12 border-t transition-colors ${theme === "white" ? "bg-white border-black/5" : "bg-[#0A192F] border-white/5"}`}>
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="space-y-10">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className={`text-5xl md:text-7xl font-serif font-black uppercase tracking-tighter leading-none mb-6 ${theme === "white" ? "text-black" : "text-white"}`}>
                            Have <span className="text-[#14A3C7]">Questions?</span>
                        </h2>
                        <p className={`text-xl font-medium leading-relaxed max-w-md ${theme === "white" ? "text-black/60" : "text-white/60"}`}>
                            {t.contact_page.help_desc}
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${theme === "white" ? "bg-black/5 text-[#14A3C7]" : "bg-white/5 text-[#14A3C7]"}`}>
                                <Phone size={20} />
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Call Us</p>
                                <p className="text-sm font-bold">+91 8826668050</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${theme === "white" ? "bg-black/5 text-[#14A3C7]" : "bg-white/5 text-[#14A3C7]"}`}>
                                <Mail size={20} />
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Email</p>
                                <p className="text-sm font-bold">info@bworth.co.in</p>
                            </div>
                        </div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className={`p-8 md:p-10 rounded-[3rem] border backdrop-blur-xl ${theme === "white" ? "bg-black/[0.02] border-black-5 shadow-2xl shadow-black/5" : "bg-white/[0.02] border-white/5 shadow-2xl shadow-black/40"}`}
                >
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input
                                name="name"
                                placeholder="NAME"
                                required
                                className={`w-full bg-transparent border-b-2 p-3 outline-none transition-all font-serif font-black text-lg focus:border-[#14A3C7] ${theme === "white" ? "border-black/10 text-black placeholder:text-black/20" : "border-white/10 text-white placeholder:text-white/20"}`}
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="EMAIL"
                                required
                                className={`w-full bg-transparent border-b-2 p-3 outline-none transition-all font-serif font-black text-lg focus:border-[#14A3C7] ${theme === "white" ? "border-black/10 text-black placeholder:text-black/20" : "border-white/10 text-white placeholder:text-white/20"}`}
                            />
                        </div>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="PHONE"
                            required
                            className={`w-full bg-transparent border-b-2 p-3 outline-none transition-all font-serif font-black text-lg focus:border-[#14A3C7] ${theme === "white" ? "border-black/10 text-black placeholder:text-black/20" : "border-white/10 text-white placeholder:text-white/20"}`}
                        />
                        <textarea
                            name="comments"
                            rows="2"
                            placeholder="HOW CAN WE HELP?"
                            required
                            className={`w-full bg-transparent border-b-2 p-3 outline-none transition-all font-serif font-black text-lg resize-none focus:border-[#14A3C7] ${theme === "white" ? "border-black/10 text-black placeholder:text-black/20" : "border-white/10 text-white placeholder:text-white/20"}`}
                        />
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full py-4 rounded-xl font-black uppercase tracking-[0.2em] text-[10px] transition-all flex items-center justify-center gap-3 group ${theme === "white" ? "bg-black text-white hover:bg-[#14A3C7]" : "bg-[#14A3C7] text-white hover:bg-white hover:text-black"}`}
                        >
                            {isSubmitting ? "Sending..." : "Send Message"}
                            <Send size={14} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        {submitStatus.message && (
                            <p className={`text-[10px] font-black uppercase text-center mt-2 ${submitStatus.type === "success" ? "text-green-500" : "text-red-500"}`}>
                                {submitStatus.message}
                            </p>
                        )}
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
