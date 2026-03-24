'use client';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowUpRight,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { translations as t } from '../utils/translations';

export default function Footer() {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: t.footer.home, href: '/' },
    { name: t.footer.about, href: '/about-us' },
    { name: t.footer.mission, href: '/our-mission' },
    { name: t.footer.vision, href: '/our-vision' },
    { name: t.footer.brands, href: '/brands' },
    { name: t.footer.b2b, href: '/b2b' },
    { name: t.footer.contact, href: '/contact-us' },
  ];

  return (
    <footer
      className={`py-16 px-6 md:px-12 border-t transition-colors ${
        theme === 'white'
          ? 'bg-[#F8FAFC] text-black border-black/5'
          : 'bg-[#0A192F] text-white border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="Bworth Logo"
                width={140}
                height={40}
                className={`h-8 w-auto object-contain transition-all ${theme === 'white' ? '' : 'invert'}`}
              />
            </Link>
            <p
              className={`text-sm leading-relaxed max-w-[240px] ${theme === 'white' ? 'text-black/60' : 'text-white/60'}`}
            >
              {t.footer.desc}
            </p>
            <div className="flex gap-3">
              {[
                {
                  Icon: Instagram,
                  href: 'https://www.instagram.com/bworth.fashion',
                },
                {
                  Icon: Facebook,
                  href: 'https://www.facebook.com/people/BWorth/61565081468088/',
                },
                {
                  Icon: Linkedin,
                  href: 'https://www.linkedin.com/company/bworth-technologies',
                },
                {
                  Icon: Youtube,
                  href: 'https://www.youtube.com/@Bworth_Fashion',
                },
              ].map(({ Icon, href }, i) => (
                <Link
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 flex items-center justify-center rounded-lg border transition-all ${
                    theme === 'white'
                      ? 'bg-black/5 border-black/10 hover:bg-black hover:text-white'
                      : 'bg-white/5 border-white/10 hover:bg-[#14A3C7] hover:border-[#14A3C7]'
                  }`}
                >
                  <Icon size={16} />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4
              className={`text-[10px] font-black uppercase tracking-[0.3em] mb-6 ${theme === 'white' ? 'text-black/40' : 'text-white/40'}`}
            >
              {t.footer.navigation}
            </h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`text-sm font-medium transition-colors ${
                      theme === 'white'
                        ? 'hover:text-[#14A3C7]'
                        : 'hover:text-[#14A3C7]'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4
              className={`text-[10px] font-black uppercase tracking-[0.3em] mb-6 ${theme === 'white' ? 'text-black/40' : 'text-white/40'}`}
            >
              {t.footer.contact_details}
            </h4>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-bold opacity-40 mb-1 uppercase tracking-tighter text-[10px]">
                  {t.footer.contact_details}
                </p>
                <p className="text-base font-serif font-black">
                  +91 8826668050
                </p>
              </div>
              <div>
                <p className="text-sm font-bold opacity-40 mb-1 uppercase tracking-tighter text-[10px]">
                  Email
                </p>
                <p className="text-sm font-medium truncate">
                  info@bworth.co.in
                </p>
              </div>
            </div>
          </div>

          {/* Location Column */}
          <div>
            <h4
              className={`text-[10px] font-black uppercase tracking-[0.3em] mb-6 ${theme === 'white' ? 'text-black/40' : 'text-white/40'}`}
            >
              {t.footer.location}
            </h4>
            <p className="text-sm leading-relaxed max-w-[200px]">
              {t.footer.address}
            </p>
          </div>
        </div>

        <div
          className={`pt-10 border-t flex flex-col md:flex-row justify-between items-center gap-6 ${theme === 'white' ? 'border-black/5' : 'border-white/5'}`}
        >
          <p
            className={`text-[10px] font-black tracking-[0.3em] uppercase ${theme === 'white' ? 'text-black/40' : 'text-white/40'}`}
          >
            © {t.footer.rights}
          </p>
          <div
            className={`flex flex-wrap justify-center gap-6 md:gap-8 text-[10px] font-bold tracking-[0.5em] uppercase ${
              theme === 'white' ? 'text-black' : 'text-white'
            }`}
          >
            <Link
              href="/privacy-policy"
              className={`transition-colors ${theme === 'white' ? 'hover:text-[#14A3C7]' : 'hover:text-white'}`}
            >
              {t.footer.policy}
            </Link>
            <Link
              href="/terms-of-use"
              className={`transition-colors ${theme === 'white' ? 'hover:text-[#14A3C7]' : 'hover:text-white'}`}
            >
              {t.footer.terms}
            </Link>
            <Link
              href="/returns-exchange-refunds-policy"
              className={`transition-colors ${theme === "white" ? "hover:text-[#14A3C7]" : "hover:text-white"}`}
            >
              {t.footer.returns}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
