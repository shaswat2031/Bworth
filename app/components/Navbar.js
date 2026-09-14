"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Sun, Moon, ChevronDown, Smartphone, Building2, Calculator, Leaf } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { translations as t } from "../utils/translations";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [hoveredPath, setHoveredPath] = useState(pathname);

  useEffect(() => {
    setHoveredPath(pathname);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const solutionOptions = [
    {
      name: "B2C",
      desc: "Doorstep Pickup & BWC Rewards",
      href: "/b2c",
      icon: Smartphone,
    },
    {
      name: "B2B",
      desc: "Enterprise & Brand Circular Tech",
      href: "/b2b",
      icon: Building2,
    },
    {
      name: "Carbon Calculator",
      desc: "ISO & LCA Impact Assessment",
      href: "/carbon-calculator",
      icon: Calculator,
    },
  ];

  const navLinks = [
    { name: t.navbar.home, href: "/" },
    {
      name: "SOLUTIONS",
      isDropdown: true,
      href: "/b2b",
      options: solutionOptions,
    },
    { name: "CARBON CALCULATOR", href: "/carbon-calculator" },
    { name: t.navbar.brands, href: "/brands" },
    { name: t.navbar.about, href: "/about-us" },
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
      {/* Floating Animated Pill Navbar */}
      <motion.nav
        initial={{ y: -80, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-4 sm:top-5 left-1/2 -translate-x-1/2 z-[80] w-[94%] max-w-6xl rounded-full transition-all duration-500 px-4 sm:px-6 py-2.5 sm:py-3 ${
          theme === "white"
            ? scrolled
              ? "bg-white/90 backdrop-blur-2xl border border-black/10 shadow-2xl shadow-black/10"
              : "bg-white/80 backdrop-blur-xl border border-black/10 shadow-lg shadow-black/5"
            : scrolled
              ? "bg-[#0b1d26]/90 backdrop-blur-2xl border border-white/20 shadow-2xl shadow-black/50"
              : "bg-[#0b1d26]/75 backdrop-blur-xl border border-white/15 shadow-xl shadow-black/30"
        }`}
      >
        <div className="flex justify-between items-center relative">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3 shrink-0">
            <Image
              src="/logo.png"
              alt="Bworth Logo"
              width={0}
              height={0}
              sizes="100vw"
              className={`h-8 sm:h-10 w-auto object-contain transition-all duration-500 group-hover:scale-105 ${
                theme === "white" ? "" : "brightness-0 invert"
              }`}
            />
          </Link>

          {/* Pill Container Desktop Navigation */}
          <div
            className={`hidden lg:flex items-center gap-1 p-1.5 rounded-full border transition-all relative ${
              theme === "white"
                ? "bg-black/5 border-black/10"
                : "bg-white/10 border-white/15"
            }`}
            onMouseLeave={() => {
              setHoveredPath(pathname);
              setDropdownOpen(false);
            }}
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const isHovered = hoveredPath === link.href;

              if (link.isDropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => {
                      setHoveredPath(link.href);
                      setDropdownOpen(true);
                    }}
                  >
                    <button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className={`relative px-5 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 flex items-center gap-1.5 ${
                        isActive || isHovered || dropdownOpen
                          ? theme === "white"
                            ? "text-[#14A3C7]"
                            : "text-white"
                          : theme === "white"
                          ? "text-black/60 hover:text-black"
                          : "text-white/70 hover:text-white"
                      }`}
                    >
                      {/* Sliding Pill Background Animation */}
                      {(isHovered || dropdownOpen) && (
                        <motion.div
                          layoutId="navbar-pill-hover"
                          className={`absolute inset-0 rounded-full -z-10 shadow-sm ${
                            theme === "white"
                              ? "bg-white border border-[#14A3C7]/30 shadow-md"
                              : "bg-white/20 border border-white/30 shadow-md"
                          }`}
                          transition={{ type: "spring", stiffness: 450, damping: 32 }}
                        />
                      )}
                      <span>{link.name}</span>
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-300 ${dropdownOpen ? "rotate-180 text-[#14A3C7]" : ""}`}
                      />
                    </button>

                    {/* Floating Dropdown Card */}
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className={`absolute top-full mt-3 left-1/2 -translate-x-1/2 w-72 p-2 rounded-2xl border shadow-2xl backdrop-blur-2xl transition-all duration-300 z-[100] ${
                            theme === "white"
                              ? "bg-white/95 border-black/10 text-slate-900 shadow-xl shadow-black/10"
                              : "bg-[#0b1d26]/95 border-white/20 text-white shadow-2xl shadow-black/70"
                          }`}
                        >
                          <div className="space-y-1">
                            {link.options.map((opt) => (
                              <Link
                                key={opt.name}
                                href={opt.href}
                                onClick={() => setDropdownOpen(false)}
                                className={`flex items-center gap-3 p-3 rounded-xl transition-all group ${
                                  theme === "white"
                                    ? "hover:bg-[#14A3C7]/10"
                                    : "hover:bg-white/10"
                                }`}
                              >
                                <div className="w-9 h-9 rounded-xl bg-[#14A3C7]/20 text-[#14A3C7] flex items-center justify-center shrink-0 group-hover:bg-[#14A3C7] group-hover:text-white transition-colors shadow-sm">
                                  <opt.icon size={18} />
                                </div>
                                <div className="space-y-0.5">
                                  <p className="text-xs font-black uppercase tracking-wider text-[#14A3C7] group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                                    {opt.name}
                                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                  </p>
                                  <p className={`text-[11px] font-medium leading-tight ${theme === "white" ? "text-slate-500" : "text-slate-300"}`}>
                                    {opt.desc}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onMouseEnter={() => setHoveredPath(link.href)}
                  className={`relative px-5 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 ${
                    isActive || isHovered
                      ? theme === "white"
                        ? "text-[#14A3C7]"
                        : "text-white"
                      : theme === "white"
                      ? "text-black/60 hover:text-black"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {/* Sliding Pill Background Animation */}
                  {isHovered && (
                    <motion.div
                      layoutId="navbar-pill-hover"
                      className={`absolute inset-0 rounded-full -z-10 shadow-sm ${
                        theme === "white"
                          ? "bg-white border border-[#14A3C7]/30 shadow-md"
                          : "bg-white/20 border border-white/30 shadow-md"
                      }`}
                      transition={{ type: "spring", stiffness: 450, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {isActive && (
                      <span className={`w-1.5 h-1.5 rounded-full ${theme === "white" ? "bg-[#14A3C7]" : "bg-white"} animate-pulse`}></span>
                    )}
                    {link.name}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Right Action Controls */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Theme Toggle - Desktop Pill Button */}
            <button
              onClick={() => toggleTheme(theme === "blue" ? "white" : "blue")}
              className={`hidden lg:flex items-center gap-2 px-3.5 py-2 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 text-xs font-bold ${
                theme === "white"
                  ? "bg-black/5 text-black hover:bg-black/10 border border-black/10"
                  : "bg-white/10 text-white hover:bg-white/20 border border-white/15"
              }`}
              title={theme === "blue" ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              <motion.div
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {theme === "blue" ? <Sun size={16} className="text-amber-400" /> : <Moon size={16} />}
              </motion.div>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsOpen(true)}
              className={`lg:hidden flex items-center gap-2 px-4 py-2 rounded-full transition-all active:scale-95 group shadow-xl ${
                theme === "white"
                  ? "bg-black text-white shadow-black/10"
                  : "bg-white text-black shadow-white/10"
              }`}
            >
              <Menu size={18} className="group-hover:rotate-90 transition-transform" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className={`fixed inset-0 z-[100] flex flex-col md:flex-row overflow-hidden ${
              theme === "white" ? "bg-white text-black" : "bg-[#14A3C7] text-white"
            }`}
          >
            {/* Left side info (Desktop view inside drawer) */}
            <div
              className={`hidden md:flex w-1/3 border-r flex-col justify-between p-8 xl:p-12 ${
                theme === "white"
                  ? "bg-black/[0.02] border-black/5"
                  : "bg-white/[0.02] border-white/5"
              }`}
            >
              <div>
                <Link href="/" className="block" onClick={() => setIsOpen(false)}>
                  <Image
                    src="/logo.png"
                    alt="Bworth Logo"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className={`h-16 w-auto object-contain mb-6 ${
                      theme === "white" ? "" : "brightness-0 invert"
                    }`}
                  />
                </Link>
                <p
                  className={`mt-6 max-w-xs font-medium leading-relaxed text-sm xl:text-base ${
                    theme === "white" ? "text-black/60" : "text-white"
                  }`}
                >
                  {t.navbar.desc}
                </p>
              </div>

              <div className="space-y-6 mt-12 pb-12">
                <div
                  onClick={() =>
                    toggleTheme(theme === "blue" ? "white" : "blue")
                  }
                  className={`flex items-center gap-3 transition-colors cursor-pointer group ${
                    theme === "white"
                      ? "text-black/40 hover:text-[#14A3C7]"
                      : "text-white hover:text-[#14A3C7]"
                  }`}
                >
                  {theme === "blue" ? <Sun size={18} /> : <Moon size={18} />}
                  <span className="text-xs font-bold uppercase tracking-widest">
                    {theme === "blue" ? "Dark Mode" : "Light Mode"}
                  </span>
                </div>

                <div
                  className={`text-[10px] uppercase tracking-[0.2em] font-bold ${
                    theme === "white" ? "text-black/30" : "text-white/30"
                  }`}
                >
                  © {new Date().getFullYear()} BEWORTH TECHNOLOGIES
                </div>
              </div>
            </div>

            {/* Right side navigation links */}
            <div className="flex-1 flex flex-col h-full overflow-y-auto">
              <div
                className={`sticky top-0 z-10 flex justify-between items-center p-6 md:p-8 backdrop-blur-sm ${
                  theme === "white" ? "bg-white/80" : "bg-[#14A3C7]/80"
                }`}
              >
                <div className="md:hidden">
                  <Image
                    src="/logo.png"
                    alt="Bworth Logo"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className={`h-10 w-auto object-contain ${
                      theme === "white" ? "" : "brightness-0 invert"
                    }`}
                  />
                </div>

                <div className="flex items-center gap-4 ml-auto">
                  {/* Mobile Toggles */}
                  <div className="md:hidden pr-4">
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
                    className={`flex items-center gap-2 px-5 py-2.5 transition-all border rounded-full group ${
                      theme === "white"
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
                <div className="max-w-4xl w-full mx-auto space-y-2">

                  {/* Home Link */}
                  <motion.div variants={linkVariants} className="group">
                    <Link
                      href="/"
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between py-3 border-b transition-all duration-300 ${
                        theme === "white" ? "border-black/5" : "border-white/5"
                      }`}
                    >
                      <span className="text-2xl sm:text-3xl font-serif font-black uppercase">
                        {t.navbar.home}
                      </span>
                      <ArrowRight size={24} />
                    </Link>
                  </motion.div>

                  {/* B2C Link */}
                  <motion.div variants={linkVariants} className="group">
                    <Link
                      href="/b2c"
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between py-3 border-b transition-all duration-300 ${
                        theme === "white" ? "border-black/5" : "border-white/5"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Smartphone size={22} className="text-[#14A3C7]" />
                        <span className="text-2xl sm:text-3xl font-serif font-black uppercase">
                          B2C (CONSUMER)
                        </span>
                      </div>
                      <ArrowRight size={24} />
                    </Link>
                  </motion.div>

                  {/* B2B Link */}
                  <motion.div variants={linkVariants} className="group">
                    <Link
                      href="/b2b"
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between py-3 border-b transition-all duration-300 ${
                        theme === "white" ? "border-black/5" : "border-white/5"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Building2 size={22} className="text-[#14A3C7]" />
                        <span className="text-2xl sm:text-3xl font-serif font-black uppercase">
                          B2B (ENTERPRISE)
                        </span>
                      </div>
                      <ArrowRight size={24} />
                    </Link>
                  </motion.div>

                  {/* Carbon Calculator Link */}
                  <motion.div variants={linkVariants} className="group">
                    <Link
                      href="/carbon-calculator"
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between py-3 border-b transition-all duration-300 ${
                        theme === "white" ? "border-black/5" : "border-white/5"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Calculator size={22} className="text-[#14A3C7]" />
                        <span className="text-2xl sm:text-3xl font-serif font-black uppercase">
                          CARBON CALCULATOR
                        </span>
                      </div>
                      <ArrowRight size={24} />
                    </Link>
                  </motion.div>

                  {/* Brands Link */}
                  <motion.div variants={linkVariants} className="group">
                    <Link
                      href="/brands"
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between py-3 border-b transition-all duration-300 ${
                        theme === "white" ? "border-black/5" : "border-white/5"
                      }`}
                    >
                      <span className="text-2xl sm:text-3xl font-serif font-black uppercase">
                        {t.navbar.brands}
                      </span>
                      <ArrowRight size={24} />
                    </Link>
                  </motion.div>

                  {/* About Us Link */}
                  <motion.div variants={linkVariants} className="group">
                    <Link
                      href="/about-us"
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between py-3 border-b transition-all duration-300 ${
                        theme === "white" ? "border-black/5" : "border-white/5"
                      }`}
                    >
                      <span className="text-2xl sm:text-3xl font-serif font-black uppercase text-[#14A3C7]">
                        {t.navbar.about}
                      </span>
                      <ArrowRight size={24} />
                    </Link>
                  </motion.div>

                </div>

                <div
                  className={`mt-12 md:hidden flex justify-between text-[10px] font-bold tracking-widest uppercase ${
                    theme === "white" ? "text-black/30" : "text-white/60"
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
      </AnimatePresence>
    </>
  );
}
