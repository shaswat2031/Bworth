"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, ArrowRight, Sun, Moon } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { translations } from "../utils/translations";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.navbar.home, href: "/" },
    { name: t.navbar.about, href: "/about-us" },
    { name: t.navbar.mission, href: "/our-mission" },
    { name: t.navbar.vision, href: "/our-vision" },
    { name: t.navbar.brands, href: "/brands" },
    { name: t.navbar.b2b, href: "/b2b" },
    { name: t.navbar.contact, href: "/contact-us" },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        when: "afterChildren",
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const linkVariants = {
    closed: { y: 20, opacity: 0 },
    open: { y: 0, opacity: 1 },
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[80] transition-all duration-300 px-4 md:px-12 py-4 md:py-6 ${scrolled
          ? theme === "white"
            ? "bg-white/90 backdrop-blur-md border-b border-black/[0.05]"
            : "bg-[#14A3C7]/90 backdrop-blur-md border-b border-white/[0.05]"
          : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="group flex items-center gap-3 shrink-0">
            <Image
              src="/logo.png"
              alt="Bworth Logo"
              width={0}
              height={0}
              sizes="100vw"
              className={`h-8 md:h-10 w-auto object-contain transition-all ${theme === "white" ? "" : "brightness-0 invert"
                }`}
            />
          </Link>

          <div className="flex items-center gap-4 md:gap-10 shrink-0">
            <button
              onClick={() => setIsOpen(true)}
              className={`flex items-center gap-2 md:gap-3 px-4 md:px-5 py-2 md:py-2.5 rounded-full hover:bg-[#14A3C7] hover:text-white transition-all active:scale-95 group shadow-xl ${theme === "white"
                ? "bg-black text-white shadow-black/5"
                : "bg-white text-black shadow-white/5"
                }`}
            >
              <span className="text-sm font-bold tracking-wider">
                {t.navbar.menu}
              </span>
              <Menu
                size={18}
                className="group-hover:rotate-90 transition-transform"
              />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className={`fixed inset-0 z-[100] flex flex-col md:flex-row overflow-hidden ${theme === "white" ? "bg-white text-black" : "bg-[#14A3C7] text-white"
              }`}
          >
            {/* Left side info (Optional/Desktop) */}
            <div
              className={`hidden md:flex w-1/3 border-r flex-col justify-between p-8 xl:p-12 ${theme === "white"
                ? "bg-black/[0.02] border-black/5"
                : "bg-white/[0.02] border-white/5"
                }`}
            >
              <div>
                <Link href="/" className="block">
                  <Image
                    src="/logo.png"
                    alt="Bworth Logo"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className={`h-16 w-auto object-contain mb-6 ${theme === "white" ? "" : "brightness-0 invert"
                      }`}
                  />
                </Link>
                <p
                  className={`mt-6 max-w-xs font-medium leading-relaxed text-sm xl:text-base ${theme === "white" ? "text-black/60" : "text-white"
                    }`}
                >
                  {t.navbar.desc}
                </p>
              </div>

              <div className="space-y-6">
                <div
                  onClick={toggleLanguage}
                  className={`flex items-center gap-3 transition-colors cursor-pointer group ${theme === "white"
                    ? "text-black/40 hover:text-[#14A3C7]"
                    : "text-white hover:text-[#14A3C7]"
                    }`}
                >
                  <Globe size={18} />
                  <span className="text-xs font-bold uppercase tracking-widest">
                    {language === "en"
                      ? "ENGLISH / हिन्दी"
                      : "हिन्दी / ENGLISH"}
                  </span>
                </div>

                <div
                  onClick={() =>
                    toggleTheme(theme === "blue" ? "white" : "blue")
                  }
                  className={`flex items-center gap-3 transition-colors cursor-pointer group ${theme === "white"
                    ? "text-black/40 hover:text-[#14A3C7]"
                    : "text-white hover:text-[#14A3C7]"
                    }`}
                >
                  {theme === "blue" ? <Sun size={18} /> : <Moon size={18} />}
                  <span className="text-xs font-bold uppercase tracking-widest">
                    {theme === "blue" ? "Light Mode" : "Dark Mode"}
                  </span>
                </div>

                <div
                  className={`text-[10px] uppercase tracking-[0.2em] font-bold text-black`}
                >
                  © {new Date().getFullYear()} BEWORTH TECHNOLOGIES
                </div>
              </div>
            </div>

            {/* Right side navigation */}
            <div className="flex-1 flex flex-col h-full overflow-y-auto">
              <div
                className={`sticky top-0 z-10 flex justify-between items-center md:justify-end p-6 md:p-8 backdrop-blur-sm ${theme === "white" ? "bg-white/80" : "bg-[#14A3C7]/80"
                  }`}
              >
                <div className="md:hidden">
                  <Image
                    src="/logo.png"
                    alt="Bworth Logo"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className={`h-10 w-auto object-contain ${theme === "white" ? "" : "brightness-0 invert"
                      }`}
                  />
                </div>

                <div className="flex items-center gap-4">
                  {/* Mobile Toggles */}
                  <div className="flex md:hidden items-center gap-4 mr-2">
                    <button
                      onClick={toggleLanguage}
                      className={
                        theme === "white" ? "text-black/60" : "text-white/60"
                      }
                    >
                      <Globe size={20} />
                    </button>
                    <button
                      onClick={() =>
                        toggleTheme(theme === "blue" ? "white" : "blue")
                      }
                      className={
                        theme === "white" ? "text-black/60" : "text-white/60"
                      }
                    >
                      {theme === "blue" ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                  </div>

                  <button
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-2 px-4 py-2 transition-all border rounded-full group ${theme === "white"
                      ? "hover:bg-black hover:text-white border-black/10 bg-black/5"
                      : "hover:bg-white hover:text-black border-white/10 bg-white/5"
                      }`}
                  >
                    <span className="text-[10px] font-bold uppercase tracking-widest">
                      {t.navbar.close}
                    </span>
                    <X
                      size={20}
                      className="group-hover:rotate-90 transition-transform"
                    />
                  </button>
                </div>
              </div>

              <div className="flex-1 px-6 md:px-12 pb-12 flex flex-col justify-center min-h-[min-content]">
                <div className="max-w-4xl w-full mx-auto space-y-1 md:space-y-0">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <motion.div
                        key={link.name}
                        variants={linkVariants}
                        className="group"
                      >
                        <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-baseline gap-3 md:gap-6 py-3 md:py-4 xl:py-5 border-b transition-all duration-300 ${theme === "white"
                            ? "border-black/5 group-hover:border-black/10"
                            : "border-white/5 group-hover:border-white/10"
                            } md:group-hover:pl-4`}
                        >

                          <span
                            className={`text-2xl sm:text-3xl md:text-3xl xl:text-4xl font-serif font-black uppercase tracking-tight transition-all group-hover:scale-[1.01] inline-block ${isActive
                              ? theme === "white"
                                ? "text-[#14A3C7]"
                                : "text-black"
                              : theme === "white"
                                ? "text-black/80 group-hover:text-black"
                                : "text-white group-hover:text-black"
                              }`}
                          >
                            {link.name}
                          </span>
                          <ArrowRight
                            size={32}
                            className={`ml-auto transition-all duration-300 hidden md:block ${isActive
                              ? "opacity-100 translate-x-0"
                              : "opacity-0 -translate-x-10 group-hover:opacity-100 group-hover:translate-x-0"
                              } ${theme === "white" ? "text-[#14A3C7]" : "text-black"}`}
                          />
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                <div
                  className={`mt-12 md:hidden flex justify-between text-[10px] font-bold tracking-widest uppercase ${theme === "white" ? "text-black/20" : "text-white"
                    }`}
                >
                  <span>{t.navbar.sustainability}</span>
                  <span>{t.navbar.fashion}</span>
                  <span>{t.navbar.future}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence >
    </>
  );
}
