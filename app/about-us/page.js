"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ShipWheel } from "lucide-react";
import ProfileCard from "../components/ProfileCard";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";
import { useTheme } from "../context/ThemeContext";
import { translations as t } from "../utils/translations";

export default function AboutUs() {
  const { theme } = useTheme();

  return (
    <main
      className={`min-h-screen transition-colors ${theme === "white" ? "bg-[#F8FAFC] text-black" : "bg-[#14A3C7] text-white"
        }`}
    >
      {/* Hero Section for About Us */}
      <section
        className={`relative pt-40 pb-24 px-6 md:px-12 border-b transition-colors ${theme === "white"
          ? "bg-black/[0.02] border-black/5"
          : "bg-white/[0.02] border-white/5"
          }`}
      >
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-bold tracking-widest text-xs uppercase mb-12 group"
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
            <h1 className={`text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] font-serif font-black uppercase tracking-tighter mb-8 md:mb-12 leading-[0.85]`}>
              {t.hero.mission_title_our} <br />{" "}
              <span className={theme === "white" ? "text-[#14A3C7]" : "text-black"}>
                {t.about_page.genesis}
              </span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-5">
            <div className="sticky top-40 space-y-8">
              <span className={`text-sm font-bold tracking-[0.3em] block uppercase italic text-black`}>
                {t.about_page.company_name}
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold uppercase leading-tight tracking-tighter">
                {t.about_page.repurposing}
              </h2>
              <div className={`w-20 h-20 border-2 rounded-full flex items-center justify-center animate-spin-slow ${theme === "white" ? "border-black" : "border-black"}`}>
                <ShipWheel size={40} className={`${theme === "white" ? "text-black" : "text-black"}`} />
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 prose prose-invert max-w-none">
            <div className="space-y-12">
              <p
                className={`text-xl md:text-2xl font-medium leading-relaxed ${theme === "white" ? "text-black/80" : "text-white"
                  }`}
              >
                {t.about_page.founding_story}
              </p>

              <div
                className={`p-8 border rounded-3xl ${theme === "white"
                  ? "bg-blue-600/5 border-blue-500/10"
                  : "bg-blue-600/10 border-blue-500/20"
                  }`}
              >
                <p
                  className={`text-xl font-bold leading-relaxed italic mb-0 ${theme === "white" ? "text-[#14A3C7]" : "text-white"
                    }`}
                >
                  {t.about_page.quote}
                </p>
              </div>

              <p
                className={`text-lg font-bold leading-relaxed ${theme === "white" ? "text-black" : "text-white"
                  }`}
              >
                {t.about_page.mitigation}
              </p>

              <p
                className={`text-lg font-bold leading-relaxed ${theme === "white" ? "text-black" : "text-white"
                  }`}
              >
                {t.about_page.flagship_start} <span className={theme === "white" ? "text-[#14A3C7]" : "text-black"}>{t.about_page.buyback_highlight}</span> {t.about_page.flagship_end}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder / Leadership Section */}
      <section
        className={`py-16 md:py-32 px-6 md:px-12 border-t overflow-hidden transition-colors ${theme === "white"
          ? "bg-[#F0F4F8] border-black/5"
          : "bg-[#14A3C7] border-white/5"
          }`}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="w-full max-w-md mx-auto lg:ml-0">
              <ProfileCard
                name={t.about_page.founder_name}
                title={t.about_page.founder_title}
                handle="dheerajanand"
                status={t.about_page.founder_status}
                contactText={t.about_page.connect}
                avatarUrl="/profile.jpeg"
                miniAvatarUrl="/profile.jpeg"
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={true}
                showBehindGlow={true}
                showOverlayInfo={false}
                behindGlowColor="rgba(59, 130, 246, 0.4)"
                innerGradient="linear-gradient(145deg, #14A3C7 30%, #14A3C7 100%)"
                onContactClick={() => window.open('https://www.linkedin.com/in/dheeraj-anand-b6b407100/', '_blank')}
              />
            </div>
          </motion.div>

          <motion.div
            className="space-y-8 order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-bold tracking-[0.3em] text-black uppercase">
              {t.about_page.leadership}
            </span>
            <h2
              className={`text-3xl sm:text-4xl md:text-6xl font-serif font-black uppercase tracking-tighter leading-none ${theme === "white" ? "text-black" : "text-white"
                }`}
            >
              {t.about_page.visionary} <br />{" "}
              <span className={`italic ${theme === "white" ? "text-[#14A3C7]" : "text-black"}`}>
                {t.about_page.leader_title}
              </span>
            </h2>
            <p
              className={`text-lg md:text-xl leading-relaxed ${theme === "white" ? "text-black font-bold" : "text-white font-normal"
                }`}
            >
              {t.about_page.leader_desc}
            </p>
          </motion.div>
        </div>
      </section>

      <ContactSection />
      <Footer />

      <style jsx>{`
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </main>
  );
}
