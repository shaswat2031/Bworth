'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Phone, Mail, MapPin, Send } from 'lucide-react';
import Footer from '../components/Footer';
import { useTheme } from '../context/ThemeContext';
import { translations as t } from '../utils/translations';

export default function ContactUs() {
  const { theme } = useTheme();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    const form = event.currentTarget;
    const formData = new FormData(event.currentTarget);
    const payload = {
      name: formData.get('name')?.toString().trim(),
      email: formData.get('email')?.toString().trim(),
      phone: formData.get('phone')?.toString().trim(),
      comments: formData.get('comments')?.toString().trim(),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit contact form.');
      }

      setSubmitStatus({
        type: 'success',
        message: 'Message sent successfully. We will reach you soon.',
      });
      form.reset();
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error.message || 'Failed to send message. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="relative min-h-screen">
      {/* 4K Background Image Layer */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <Image
          src="/bworth_contact_bg_sustainable_1774122267892.png"
          alt="Sustainable Background"
          fill
          priority
          className="object-cover brightness-[0.7] contrast-[1.1]"
        />
        <div className={`absolute inset-0 ${theme === 'white' ? 'bg-white/40' : 'bg-black/60'} backdrop-blur-[2px]`} />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10">
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <Link
              href="/"
              className={`inline-flex items-center gap-2 font-black tracking-[0.4em] text-[10px] uppercase mb-12 group transition-colors ${
                theme === 'white' ? 'text-black' : 'text-white'
              }`}
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              {t.common.back_home}
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              {/* Left Column: Info & Messaging */}
              <div className="lg:col-span-12 xl:col-span-5 space-y-12">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1 className={`text-6xl md:text-8xl lg:text-9xl font-serif font-black uppercase tracking-tighter leading-[0.8] mb-8 ${
                    theme === 'white' ? 'text-black' : 'text-white'
                  }`}>
                    {t.contact_page.get_in}<br />
                    <span className="text-[#14A3C7]">{t.contact_page.touch}</span>
                  </h1>
                  <p className={`text-xl font-medium leading-relaxed max-w-md ${
                    theme === 'white' ? 'text-black/80' : 'text-white/80'
                  }`}>
                    {t.contact_page.help_desc}
                  </p>
                </motion.div>

                {/* Contact List */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-1 gap-8">
                  {[
                    { icon: <Phone size={22} />, label: t.contact_page.phone, value: "+91 8826668050" },
                    { icon: <Mail size={22} />, label: t.contact_page.email, value: "info@bworth.co.in" },
                    { icon: <MapPin size={22} />, label: t.contact_page.location, value: t.contact_page.address }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + (i * 0.1) }}
                      className={`flex gap-6 p-6 rounded-3xl border backdrop-blur-md relative overflow-hidden group ${
                        theme === 'white' 
                          ? 'bg-white/30 border-black/5 hover:bg-white/50' 
                          : 'bg-black/30 border-white/10 hover:bg-black/50'
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-all group-hover:bg-[#14A3C7] group-hover:text-white ${
                        theme === 'white' ? 'bg-black/5 text-black' : 'bg-white/10 text-white'
                      }`}>
                        {item.icon}
                      </div>
                      <div className="overflow-hidden">
                        <span className="text-[10px] font-black uppercase tracking-widest opacity-40 block mb-1">
                          {item.label}
                        </span>
                        <p className="text-lg font-serif font-black truncate">{item.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right Column: Advanced Form */}
              <div className="lg:col-span-12 xl:col-span-7">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  className={`p-8 md:p-12 lg:p-16 border rounded-[3.5rem] backdrop-blur-2xl relative overflow-hidden ${
                    theme === 'white'
                      ? 'bg-white/60 border-black/5 shadow-2xl shadow-black/5'
                      : 'bg-black/40 border-white/10 shadow-2xl shadow-black/40'
                  }`}
                >
                  <div className="relative z-10">
                    <h2 className="text-3xl font-serif font-black uppercase tracking-tighter mb-10">
                      Let's Start a <span className="text-[#14A3C7]">Conversation</span>
                    </h2>
                    
                    <form className="space-y-8" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                          <label className={`text-[10px] font-black uppercase tracking-widest ml-1 ${theme === 'white' ? 'text-black/40' : 'text-white/40'}`}>
                            {t.contact_page.your_name}
                          </label>
                          <input
                            name="name"
                            placeholder="NAME"
                            required
                            className={`w-full bg-transparent border-b-2 p-4 focus:border-[#14A3C7] outline-none transition-all font-serif font-black text-xl placeholder:text-black/20 ${theme === 'white' ? 'border-black/10' : 'border-white/10 placeholder:text-white/20'}`}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className={`text-[10px] font-black uppercase tracking-widest ml-1 ${theme === 'white' ? 'text-black/40' : 'text-white/40'}`}>
                            {t.contact_page.your_email}
                          </label>
                          <input
                            type="email"
                            name="email"
                            placeholder="EMAIL"
                            required
                            className={`w-full bg-transparent border-b-2 p-4 focus:border-[#14A3C7] outline-none transition-all font-serif font-black text-xl placeholder:text-black/20 ${theme === 'white' ? 'border-black/10' : 'border-white/10 placeholder:text-white/20'}`}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className={`text-[10px] font-black uppercase tracking-widest ml-1 ${theme === 'white' ? 'text-black/40' : 'text-white/40'}`}>
                          {t.contact_page.mobile}
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="+91"
                          required
                          className={`w-full bg-transparent border-b-2 p-4 focus:border-[#14A3C7] outline-none transition-all font-serif font-black text-xl placeholder:text-black/20 ${theme === 'white' ? 'border-black/10' : 'border-white/10 placeholder:text-white/20'}`}
                        />
                      </div>

                      <div className="space-y-2">
                        <label className={`text-[10px] font-black uppercase tracking-widest ml-1 ${theme === 'white' ? 'text-black/40' : 'text-white/40'}`}>
                          {t.contact_page.comments}
                        </label>
                        <textarea
                          name="comments"
                          rows="4"
                          placeholder="HOW CAN WE HELP?"
                          required
                          className={`w-full bg-transparent border-b-2 p-4 focus:border-[#14A3C7] outline-none transition-all font-serif font-black text-xl resize-none placeholder:text-black/20 ${theme === 'white' ? 'border-black/10' : 'border-white/10 placeholder:text-white/20'}`}
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full py-6 rounded-2xl font-black uppercase tracking-[0.3em] text-xs transition-all flex items-center justify-center gap-4 relative overflow-hidden group ${
                          theme === 'white' 
                            ? 'bg-black text-white hover:bg-[#14A3C7]' 
                            : 'bg-[#14A3C7] text-white hover:bg-white hover:text-black'
                        }`}
                      >
                        <span className="relative z-10">{isSubmitting ? 'Sending...' : t.contact_page.send}</span>
                        <Send size={16} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </button>

                      {submitStatus.message && (
                        <p className={`text-sm font-black uppercase py-4 text-center ${submitStatus.type === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                          {submitStatus.message}
                        </p>
                      )}
                    </form>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
