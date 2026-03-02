"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Instagram, Facebook, Linkedin, Youtube } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { translations } from "../utils/translations";

export default function Footer() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const t = translations[language];
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: t.footer.home, href: "/" },
    { name: t.footer.about, href: "/about-us" },
    { name: t.footer.mission, href: "/our-mission" },
    { name: t.footer.vision, href: "/our-vision" },
    { name: t.footer.brands, href: "/brands" },
    { name: t.footer.b2b, href: "/b2b" },
    { name: t.footer.contact, href: "/contact-us" },
  ];

  return (
    <footer
      className={`pt-24 pb-12 px-6 md:px-12 border-t transition-colors ${theme === "white"
        ? "bg-[#F8FAFC] text-black border-black/10"
        : "bg-[#14A3C7] text-white border-white/5"
        }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-5">
            <Link href="/" className="block mb-8">
              <Image
                src="/logo.png"
                alt="Bworth Logo"
                width={0}
                height={0}
                sizes="100vw"
                className={`h-10 w-auto object-contain transition-all ${theme === "white" ? "" : "invert hue-rotate-180"
                  }`}
              />
            </Link>
            <p
              className={`text-xl font-bold leading-relaxed mb-10 max-w-sm ${theme === "white" ? "text-black" : "text-white"
                }`}
            >
              {t.footer.desc}
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Instagram, href: "https://www.instagram.com/bworth.fashion" },
                { Icon: Facebook, href: "https://www.facebook.com/people/BWorth/61565081468088/" },
                { Icon: Linkedin, href: "https://www.linkedin.com/company/bworth-technologies" },
                { Icon: Youtube, href: "https://www.youtube.com/@Bworth_Fashion" }
              ].map(({ Icon, href }, i) => (
                <Link
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 flex items-center justify-center border rounded-full hover:bg-[#14A3C7] hover:text-white transition-all cursor-pointer ${theme === "white"
                    ? "bg-black/5 border-black/10"
                    : "bg-white/5 border-white/10"
                    }`}
                >
                  <Icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4
              className={`text-xs font-bold uppercase tracking-[0.3em] mb-8 ${theme === "white" ? "text-black" : "text-white"
                }`}
            >
              {t.footer.navigation}
            </h4>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`text-lg font-serif font-bold uppercase group flex items-center gap-2 transition-colors ${
                      theme === "white" ? "hover:text-[#14A3C7]" : "hover:text-black"
                    }`}
                  >
                    {link.name}
                    <ArrowUpRight
                      size={16}
                      className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all font-sans"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-between">
            <div className="space-y-4">
              <h4
                className={`text-xs font-bold uppercase tracking-[0.3em] mb-6 ${theme === "white" ? "text-black" : "text-white"
                  }`}
              >
                {t.footer.contact_details}
              </h4>
              <div className="space-y-2">
                <p
                  className={`text-2xl font-serif font-bold ${theme === "white" ? "text-black" : "text-white"
                    }`}
                >
                  +91 8826668050
                </p>
                <p className={`text-lg font-normal underline decoration-white/30 underline-offset-8 ${theme === "white" ? "text-[#14A3C7] decoration-[#14A3C7]/30" : "text-white"}`}>
                  info@bworth.co.in
                </p>
              </div>
            </div>

            <div className="mt-12 lg:mt-0">
              <h4
                className={`text-xs font-bold uppercase tracking-[0.3em] mb-4 ${theme === "white" ? "text-black" : "text-white"
                  }`}
              >
                {t.footer.location}
              </h4>
              <p
                className={`text-sm font-bold tracking-widest uppercase ${theme === "white" ? "text-black" : "text-white"
                  }`}
              >
                {t.footer.address}
              </p>
            </div>
          </div>
        </div>

        <div
          className={`flex flex-col md:flex-row justify-between items-center py-12 border-t gap-6 md:gap-8 ${theme === "white" ? "border-black/5" : "border-white/5"
            }`}
        >
          <p
            className={`text-[10px] font-bold tracking-[0.5em] uppercase text-black text-center md:text-left`}
          >
            © {currentYear} BEWORTH TECHNOLOGIES
          </p>
          <div
            className={`flex flex-wrap justify-center gap-6 md:gap-8 text-[10px] font-bold tracking-[0.5em] uppercase ${theme === "white" ? "text-black" : "text-white"
              }`}
          >
            <Link
              href="/privacy-policy"
              className="hover:text-[#14A3C7] transition-colors"
            >
              {t.footer.policy}
            </Link>
            <Link
              href="/terms-of-use"
              className="hover:text-[#14A3C7] transition-colors"
            >
              {t.footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
