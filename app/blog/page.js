"use client";
import React, { useState, useMemo, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import {
  Sparkles,
  Clock,
  Calendar,
  ArrowRight,
  Search,
  Share2,
  Heart,
  Bookmark,
  X,
  Check,
  BookOpen,
  Filter,
  Tag,
  ArrowUpRight,
  TrendingUp,
  ShieldCheck,
  Send,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import Footer from "../components/Footer";

// Curated Blog Articles Data
const BLOG_POSTS = [
  {
    id: "closed-loop-fashion-2026",
    title: "The True Cost of Fast Fashion: How BWorth Closes the Loop in 2026",
    slug: "true-cost-fast-fashion-closing-the-loop",
    category: "Circular Economy",
    readTime: "6 min read",
    date: "Oct 01, 2026",
    author: {
      name: "Priya Sharma",
      role: "Head of Circular Strategy",
      initials: "PS",
    },
    featured: true,
    image:
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1200&auto=format&fit=crop",
    excerpt:
      "Every single second, an entire garbage truck of wearable garments is buried or incinerated. Discover how BWorth's closed-loop buyback network turns surplus textiles into verifiable consumer rewards.",
    content: [
      {
        type: "paragraph",
        text: "The global fashion industry is responsible for over 10% of total worldwide greenhouse gas emissions—more than international flights and maritime shipping combined. Yet, over 85% of garments purchased end up in local landfills or incinerators within two years of production.",
      },
      {
        type: "quote",
        text: "True sustainability cannot rely solely on consumer guilt. It must offer direct financial incentives and frictionless logistics to outcompete linear disposal.",
      },
      {
        type: "heading",
        text: "Why Traditional Recycling Systems Have Failed",
      },
      {
        type: "paragraph",
        text: "Traditional recycling programs burden the consumer with transport costs, lack tracking transparency, and offer zero direct economic incentive. Garments sit idle in closets for years until they degrade beyond salvageable fiber quality. At BWorth, we flipped the paradigm: instant doorstep collection coupled with a 1:1 currency value in BWorth Coins (1 BWC = ₹1).",
      },
      {
        type: "takeaways",
        title: "Key Insights & Milestones",
        points: [
          "25,000+ kg of discarded apparel diverted from landfills to certified remanufacturers.",
          "Over 500 tons of net carbon dioxide emissions offset through extended garment lifespans.",
          "White-label buyback integrations with 25+ premier Indian fashion brands.",
        ],
      },
      {
        type: "heading",
        text: "The Three Pillars of the BWorth Circular Engine",
      },
      {
        type: "paragraph",
        text: "By categorizing incoming items into tier-1 resale, creative upcycling, and chemical fiber reconstitution, 100% of collected garments bypass the landfill entirely. Consumers unlock buying power for future conscious purchases, transforming passive wardrobe waste into active capital.",
      },
    ],
  },
  {
    id: "fabric-longevity-secrets",
    title: "The Science of Fabric Longevity: 5 Habits That Make Clothes Last 3x Longer",
    slug: "science-of-fabric-longevity",
    category: "Wardrobe Care",
    readTime: "4 min read",
    date: "Sep 28, 2026",
    author: {
      name: "Rohan Varma",
      role: "Textile Engineering Specialist",
      initials: "RV",
    },
    featured: false,
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1200&auto=format&fit=crop",
    excerpt:
      "From cold-water shear cycles to proper cedar hanging, our textile laboratory breaks down the molecular reasons why luxury fabrics degrade—and the scientific protocols to preserve them.",
    content: [
      {
        type: "paragraph",
        text: "Extending the wearable life of a garment by just nine months reduces its carbon, water, and waste footprints by approximately 20-30%. The good news is that preventing premature fiber breakdown requires small, intentional adjustments to everyday wardrobe care.",
      },
      {
        type: "heading",
        text: "1. The Cold Wash Revolution",
      },
      {
        type: "paragraph",
        text: "High wash temperatures break down elastane polymers and natural cotton bindings. Washing in cold water (30°C or below) protects fiber tensile strength, preserves dye saturation, and eliminates 75% of the energy consumed per wash cycle.",
      },
      {
        type: "quote",
        text: "A well-cared-for cotton piece can comfortably endure 120+ wear cycles without structural thinning when dried away from direct thermal stress.",
      },
      {
        type: "heading",
        text: "2. Eliminate the Tumble Dryer for Fine Knitwear",
      },
      {
        type: "paragraph",
        text: "Tumble drying accounts for nearly 70% of fabric pilling and micro-tear development. Flat-drying on perforated breathable racks redistributes moisture evenly without pulling delicate knit stitches out of alignment.",
      },
      {
        type: "takeaways",
        title: "Quick Care Protocol",
        points: [
          "Wash darks inside-out to prevent surface friction and dye abrasion.",
          "Use natural cedar blocks instead of synthetic moth repellents.",
          "Steam gently instead of high-heat pressing to relax woven fibers naturally.",
        ],
      },
    ],
  },
  {
    id: "ai-reverse-logistics-returns",
    title: "AI & Reverse Logistics: Solving Fashion's $300B Return Nightmare",
    slug: "ai-reverse-logistics-fashion-returns",
    category: "Tech & Innovation",
    readTime: "5 min read",
    date: "Sep 21, 2026",
    author: {
      name: "Aditya Nair",
      role: "Chief Product Officer",
      initials: "AN",
    },
    featured: false,
    image:
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=1200&auto=format&fit=crop",
    excerpt:
      "Traditional e-commerce returns often end up destroyed because reverse shipping costs more than restock value. Here is how BWorth's automated routing algorithm changes everything.",
    content: [
      {
        type: "paragraph",
        text: "Across the e-commerce sector, return rates for apparel hover between 25% and 38%. The dirty secret of the industry is that handling returned inventory often costs retailers more than the wholesale manufacturing price, leading millions of brand-new items straight into incinerators.",
      },
      {
        type: "heading",
        text: "Predictive Routing at Doorstep Level",
      },
      {
        type: "paragraph",
        text: "BWorth's proprietary reverse logistics engine dynamically routes pickups based on regional hub proximity, fabric composition, and real-time secondary market demand. Rather than sending returned stock to central warehouses 1,500 km away, items are inspected and certified locally.",
      },
      {
        type: "takeaways",
        title: "Platform Efficiency Gains",
        points: [
          "62% reduction in transit miles compared to traditional hub-and-spoke return logistics.",
          "Zero inventory landfill policy backed by blockchain-audited lifecycle records.",
          "Dynamic buyback pricing algorithms that guarantee fair instant coin returns for consumers.",
        ],
      },
    ],
  },
  {
    id: "bworth-coins-behavioral-economics",
    title: "From Closet to Currency: The Behavioral Economics of BWorth Coins",
    slug: "closet-to-currency-behavioral-economics",
    category: "Sustainable Fashion",
    readTime: "4 min read",
    date: "Sep 14, 2026",
    author: {
      name: "Simran Kapoor",
      role: "Consumer Insights Lead",
      initials: "SK",
    },
    featured: false,
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop",
    excerpt:
      "Why does rewarding ₹1 for ₹1 in BWorth Coins drive 4x higher recycling compliance than altruism alone? A deep dive into psychological positive reinforcement loops.",
    content: [
      {
        type: "paragraph",
        text: "Behavioral psychologists have long understood the 'intention-action gap': while 78% of consumers state they want to dress sustainably, less than 14% actively recycle unwanted clothing when faced with logistical inconvenience or zero tangible return.",
      },
      {
        type: "quote",
        text: "When closet decluttering feels like liquidating an untapped investment portfolio, sustainable behavior becomes the default economic choice.",
      },
      {
        type: "heading",
        text: "Instant Gratification Meets Planetary Good",
      },
      {
        type: "paragraph",
        text: "By anchoring 1 BWorth Coin directly to ₹1 in real purchasing power across our curated network of 25+ partner labels, customers experience zero cognitive friction. The reward arrives instantly upon pickup verification, creating a joyful, habitual loop of conscious circularity.",
      },
    ],
  },
  {
    id: "synthetic-blend-recycling-paradox",
    title: "The Synthetic Blend Paradox: What Really Happens When Poly-Cotton Is Recycled",
    slug: "synthetic-blend-recycling-paradox",
    category: "Circular Economy",
    readTime: "7 min read",
    date: "Sep 07, 2026",
    author: {
      name: "Dr. Ananya Deshmukh",
      role: "Senior Polymer Chemist",
      initials: "AD",
    },
    featured: false,
    image:
      "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1200&auto=format&fit=crop",
    excerpt:
      "Most conventional recycling plants quietly reject 60/40 poly-cotton garments. Here is the mechanical & chemical fiber separation technology powering BWorth's zero-waste commitment.",
    content: [
      {
        type: "paragraph",
        text: "Pure 100% cotton and pure 100% polyester are straightforward to mechanically shred or re-melt. The vast majority of today's apparel, however, consists of intimate blends: 65% cotton spun with 35% polyester for stretch and durability. These hybrid textiles are notoriously difficult to decompose.",
      },
      {
        type: "heading",
        text: "Enzymatic Dissolution vs Mechanical Garnetting",
      },
      {
        type: "paragraph",
        text: "Through our technical recycling consortium partners, BWorth garments undergo staged hydrothermal separation. Polyester filaments are extracted as high-purity rPET pellets, while cellulose cotton fibers are solubilized and regenerated into spun viscose yarn.",
      },
      {
        type: "takeaways",
        title: "The Material Frontier",
        points: [
          "Zero toxic solvents used in the closed-loop hydrothermal separation process.",
          "Over 92% fiber recovery rate achieved on poly-cotton denim and jersey knits.",
          "Recycled yarns certified for Oeko-Tex Standard 100 chemical safety.",
        ],
      },
    ],
  },
  {
    id: "brand-deadstock-reduction-case-study",
    title: "Brand Spotlight: How 25+ Fashion Labels Reduced Deadstock by 42%",
    slug: "brand-spotlight-reducing-deadstock-42-percent",
    category: "Brand Case Studies",
    readTime: "5 min read",
    date: "Aug 29, 2026",
    author: {
      name: "Karan Mehta",
      role: "VP of Brand Partnerships",
      initials: "KM",
    },
    featured: false,
    image:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop",
    excerpt:
      "Discover how forward-thinking fashion brands in India integrate BWorth's turnkey buyback widget to convert secondary returns into repeat lifetime customers.",
    content: [
      {
        type: "paragraph",
        text: "For mid-to-high fashion labels, inventory carrying costs and unsold seasonal deadstock pose an existential financial burden. Deep discounting destroys brand prestige, while warehouse storage drains operational cash flows.",
      },
      {
        type: "heading",
        text: "Turning Reverse Inventory into Fresh GMV",
      },
      {
        type: "paragraph",
        text: "By embedding BWorth's Circular Widget directly at checkout and post-purchase confirmation, partner labels allow their customers to trade in last season's pieces for branded store credits. Customers reinvest in new collections, while BWorth manages quality check, pickup, and circular reprocessing seamlessly.",
      },
      {
        type: "takeaways",
        title: "Partner Impact Metrics",
        points: [
          "42% average reduction in idle end-of-season warehouse deadstock.",
          "3.4x higher customer repurchase rate for shoppers utilizing buyback credits.",
          "Full ESG compliance reporting delivered automatically to corporate sustainability dashboards.",
        ],
      },
    ],
  },
];

const CATEGORIES = [
  "All Stories",
  "Circular Economy",
  "Wardrobe Care",
  "Tech & Innovation",
  "Sustainable Fashion",
  "Brand Case Studies",
];

// Interactive 3D Spotlight Article Card with Cursor Tracking & Parallax
function SpotlightArticleCard({
  article,
  idx,
  isWhite,
  colY,
  cardRotateX,
  liked,
  bookmarked,
  onLike,
  onBookmark,
  onOpen,
}) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.article
      style={{
        y: colY,
        rotateX: cardRotateX,
        transformPerspective: 1200,
      }}
      initial={{ opacity: 0, y: 55, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.7,
        delay: (idx % 3) * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -8, scale: 1.015, transition: { duration: 0.25 } }}
      onMouseMove={handleMouseMove}
      onClick={onOpen}
      className={`group relative rounded-3xl overflow-hidden border cursor-pointer flex flex-col justify-between transition-all duration-300 shadow-xl ${
        isWhite
          ? "bg-white/95 backdrop-blur-md border-slate-200/90 hover:border-[#14A3C7]/60 shadow-slate-200/60"
          : "bg-[#081a24]/95 backdrop-blur-md border-white/10 hover:border-[#14A3C7]/60 shadow-black/60"
      }`}
    >
      {/* Interactive Cursor Spotlight Aura */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10"
        style={{
          background: `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, ${
            isWhite ? "rgba(20,163,199,0.18)" : "rgba(20,163,199,0.32)"
          }, transparent 70%)`,
        }}
      />

      {/* Top Image Container */}
      <div className="relative w-full h-52 sm:h-56 overflow-hidden bg-slate-900">
        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
        />

        {/* Gradient shade */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/25" />

        {/* Quick Micro-Actions */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 opacity-90 z-20">
          <button
            onClick={(e) => onLike(article.id, e)}
            title="Like article"
            className={`w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md border transition-all ${
              liked
                ? "bg-rose-500 border-rose-400 text-white shadow-md shadow-rose-500/30"
                : "bg-black/50 border-white/20 text-white hover:bg-black/70"
            }`}
          >
            <Heart size={13} className={liked ? "fill-current" : ""} />
          </button>
          <button
            onClick={(e) => onBookmark(article.id, e)}
            title="Bookmark"
            className={`w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md border transition-all ${
              bookmarked
                ? "bg-[#14A3C7] border-[#14A3C7] text-white shadow-md shadow-[#14A3C7]/30"
                : "bg-black/50 border-white/20 text-white hover:bg-black/70"
            }`}
          >
            <Bookmark size={13} className={bookmarked ? "fill-current" : ""} />
          </button>
        </div>

        {/* Read Time on Image Bottom */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-[10px] font-mono text-white/90 bg-black/50 backdrop-blur-sm px-2.5 py-0.5 rounded-full border border-white/10">
          <Clock size={11} />
          <span>{article.readTime}</span>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4 relative z-20">
        <div className="space-y-2">
          <h3
            className={`text-base sm:text-lg font-serif font-black tracking-tight leading-snug uppercase group-hover:text-[#14A3C7] transition-colors line-clamp-2 ${
              isWhite ? "text-slate-900" : "text-white"
            }`}
          >
            {article.title}
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
            {article.excerpt}
          </p>
        </div>

        {/* Author & Footer Strip */}
        <div className="pt-3 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-[#14A3C7]/20 border border-[#14A3C7]/30 text-[#14A3C7] font-bold text-[10px] flex items-center justify-center">
              {article.author.initials}
            </div>
            <div className="leading-tight">
              <p
                className={`font-semibold text-[11px] ${
                  isWhite ? "text-slate-800" : "text-slate-200"
                }`}
              >
                {article.author.name}
              </p>
              <p className="text-[10px] text-slate-400">
                {article.date}
              </p>
            </div>
          </div>

          <span className="w-7 h-7 rounded-full bg-[#14A3C7]/10 text-[#14A3C7] flex items-center justify-center group-hover:bg-[#14A3C7] group-hover:text-white transition-all shadow-xs">
            <ArrowUpRight size={14} />
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export default function BlogPage() {
  const { theme } = useTheme();
  const isWhite = theme === "white";

  // Scroll-driven Grid Animation tracking
  const gridSectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: gridSectionRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001,
  });

  // Dynamic parallax transforms for grid elements
  const gridY = useTransform(smoothProgress, [0, 1], [-60, 60]);
  const gridRotate = useTransform(smoothProgress, [0, 1], [-1, 1]);
  const beamY = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
  const glowOpacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0.1, 0.85, 0.85, 0.15]);

  // 3-Column Asymmetrical Parallax Scroll: columns glide at offset rates
  const col1Y = useTransform(smoothProgress, [0, 1], [-30, 45]);
  const col2Y = useTransform(smoothProgress, [0, 1], [50, -50]);
  const col3Y = useTransform(smoothProgress, [0, 1], [-20, 35]);

  // 3D Perspective Tilt on Scroll
  const cardRotateX = useTransform(smoothProgress, [0, 0.4, 0.8, 1], [5, 0, -2, -5]);
  const featuredRotateX = useTransform(smoothProgress, [0, 0.35], [4, 0]);

  const getColY = (idx) => {
    const col = idx % 3;
    if (col === 0) return col1Y;
    if (col === 1) return col2Y;
    return col3Y;
  };

  // State management
  const [selectedCategory, setSelectedCategory] = useState("All Stories");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeArticle, setActiveArticle] = useState(null);
  const [likedArticles, setLikedArticles] = useState({});
  const [bookmarkedArticles, setBookmarkedArticles] = useState({});
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState("idle"); // idle | success

  // Filtered articles
  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory =
        selectedCategory === "All Stories" || post.category === selectedCategory;
      const matchesQuery =
        searchQuery.trim() === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  // Featured post (first item or marked featured)
  const featuredPost = useMemo(() => {
    return filteredPosts.find((p) => p.featured) || filteredPosts[0];
  }, [filteredPosts]);

  // Remaining posts
  const regularPosts = useMemo(() => {
    if (!featuredPost) return filteredPosts;
    return filteredPosts.filter((p) => p.id !== featuredPost.id);
  }, [filteredPosts, featuredPost]);

  const toggleLike = (id, e) => {
    e.stopPropagation();
    setLikedArticles((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleBookmark = (id, e) => {
    e.stopPropagation();
    setBookmarkedArticles((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleShare = async (article, e) => {
    e.stopPropagation();
    const shareUrl = typeof window !== "undefined" ? window.location.href : "";
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: article.excerpt,
          url: shareUrl,
        });
      } catch {
        // User dismissed
      }
    } else if (navigator.clipboard) {
      await navigator.clipboard.writeText(shareUrl);
      alert("Article link copied to clipboard!");
    }
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes("@")) return;
    setNewsletterStatus("success");
    setNewsletterEmail("");
  };

  return (
    <main
      className={`min-h-screen transition-colors duration-500 selection:bg-[#14A3C7]/20 selection:text-[#14A3C7] ${
        isWhite ? "bg-slate-50 text-slate-900" : "bg-[#061217] text-white"
      }`}
    >
      {/* ────────────────────────────────────────────────────────── */}
      {/* ── 1. TOP BANNER (RATIO 3:1 / CONTAINED, NOT FULL SIZE) ── */}
      {/* ────────────────────────────────────────────────────────── */}
      <section className="pt-28 sm:pt-32 pb-4 sm:pb-6 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full aspect-[2.6/1] sm:aspect-[3/1] min-h-[250px] max-h-[380px] rounded-3xl sm:rounded-[32px] overflow-hidden border border-white/15 shadow-2xl flex flex-col justify-between p-5 sm:p-8 md:p-10 group"
        >
          {/* Photographic Editorial Background Banner */}
          <Image
            src="/blog_banner.jpg"
            alt="BWorth Circular Fashion Journal Banner"
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1200px"
            className="object-cover object-[center_30%] group-hover:scale-105 transition-transform duration-1000 ease-out"
          />

          {/* Subtle Gradient Overlays for Readability while keeping the image vibrant */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/45 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent pointer-events-none" />

          {/* Minimal, Impactful Content */}
          <div className="relative z-10 flex flex-col justify-end h-full max-w-xl space-y-2 sm:space-y-3">
            <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#14A3C7]">
              <Sparkles size={11} className="text-[#14A3C7]" />
              <span>BWorth Journal</span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-serif font-black tracking-tight leading-[1.1] uppercase text-white drop-shadow-sm">
              Stories in Circular Fashion.
            </h1>

            <p className="text-xs sm:text-sm text-slate-200/90 font-light max-w-md leading-relaxed">
              Perspectives on sustainable style, garment lifecycles &amp; circular innovation.
            </p>
          </div>
        </motion.div>
      </section>


      {/* ────────────────────────────────────────────────────────── */}
      {/* ── 2. CREATIVE BLOG SECTION WITH SCROLL-DRIVEN GRID ANIMATION ── */}
      {/* ────────────────────────────────────────────────────────── */}
      <section
        ref={gridSectionRef}
        className="relative py-8 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-hidden"
      >
        {/* Scroll-Driven Dynamic Background Grid Matrix */}
        <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden select-none">
          {/* Parallax Moving Grid Canvas */}
          <motion.div
            style={{ y: gridY, rotate: gridRotate }}
            className="absolute inset-[-120px]"
          >
            <svg
              className="w-full h-full opacity-[0.35] dark:opacity-[0.22] transition-opacity"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="scroll-reactive-grid"
                  width="54"
                  height="54"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 54 0 L 0 0 0 54"
                    fill="none"
                    stroke={isWhite ? "rgba(15,23,42,0.12)" : "rgba(20,163,199,0.3)"}
                    strokeWidth="1"
                    strokeDasharray="3 3"
                  />
                  {/* Grid Node Intersection Crosshair */}
                  <circle
                    cx="0"
                    cy="0"
                    r="2"
                    fill={isWhite ? "rgba(20,163,199,0.5)" : "rgba(20,163,199,0.7)"}
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#scroll-reactive-grid)" />
            </svg>
          </motion.div>

          {/* Traveling Laser Scanline that responds to scroll down */}
          <motion.div
            style={{ top: beamY, opacity: glowOpacity }}
            className="absolute left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#14A3C7] to-transparent blur-[1px]"
          />

          {/* Ambient Scroll-Reactive Radial Glow Orbs */}
          <motion.div
            style={{ opacity: glowOpacity }}
            className="absolute top-1/4 -left-20 w-96 h-96 bg-[#14A3C7]/15 rounded-full blur-[120px]"
          />
          <motion.div
            style={{ opacity: glowOpacity }}
            className="absolute top-2/3 -right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-[130px]"
          />
        </div>

        {/* Navigation & Search Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 sm:mb-12 pb-6 border-b border-slate-200/80 dark:border-white/10">
          {/* Category Tabs with Smooth Animated Pill */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`relative px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                    isActive
                      ? "text-white"
                      : isWhite
                      ? "text-slate-600 hover:text-slate-950 hover:bg-slate-200/60"
                      : "text-slate-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryPill"
                      className="absolute inset-0 rounded-full bg-[#14A3C7] shadow-lg shadow-[#14A3C7]/30"
                      transition={{ type: "spring", stiffness: 450, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {cat}
                    {cat === "All Stories" && (
                      <span className="text-[10px] opacity-80">
                        ({BLOG_POSTS.length})
                      </span>
                    )}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Smooth Search Input */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search
              size={16}
              className={`absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none transition-colors ${
                isWhite ? "text-slate-400" : "text-slate-500"
              }`}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles & guides..."
              className={`w-full pl-9 pr-8 py-2 text-xs rounded-full border transition-all outline-none ${
                isWhite
                  ? "bg-white border-slate-200 text-slate-900 placeholder-slate-400 focus:border-[#14A3C7] focus:ring-2 focus:ring-[#14A3C7]/15"
                  : "bg-[#0b1d28] border-white/10 text-white placeholder-slate-500 focus:border-[#14A3C7] focus:ring-2 focus:ring-[#14A3C7]/20"
              }`}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Empty Search State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-20 px-4 space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#14A3C7]/10 text-[#14A3C7] flex items-center justify-center">
              <BookOpen size={28} />
            </div>
            <h3 className="text-xl font-serif font-black uppercase">
              No articles found
            </h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              We couldn't find any stories matching "{searchQuery}". Try a different
              keyword or reset your category filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All Stories");
              }}
              className="px-5 py-2 rounded-full bg-[#14A3C7] text-white text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* ── FEATURED EDITORIAL CARD (SHOWCASING THE LEAD STORY) ── */}
        {featuredPost && searchQuery === "" && (
          <motion.div
            style={{ rotateX: featuredRotateX, transformPerspective: 1200 }}
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setActiveArticle(featuredPost)}
            className={`group mb-12 sm:mb-16 rounded-3xl overflow-hidden border cursor-pointer transition-all duration-500 hover:shadow-2xl ${
              isWhite
                ? "bg-white/95 backdrop-blur-md border-slate-200/90 hover:border-[#14A3C7]/60 shadow-slate-200/60"
                : "bg-[#081a24]/95 backdrop-blur-md border-white/10 hover:border-[#14A3C7]/60 shadow-black/60"
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Image side */}
              <div className="lg:col-span-7 relative h-64 sm:h-80 lg:h-auto min-h-[280px] overflow-hidden">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />

                {/* Floating "EDITOR'S PICK" Micro-Badge */}
                <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-[#14A3C7]/40 text-[#14A3C7] text-[10px] font-mono font-bold tracking-widest uppercase shadow-lg">
                  <Sparkles size={11} className="text-[#14A3C7]" />
                  <span>FEATURED EDITORIAL</span>
                </div>
              </div>

              {/* Text Content side */}
              <div className="lg:col-span-5 p-6 sm:p-8 md:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  {/* Category & Time */}
                  <div className="flex items-center gap-3 text-xs">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#14A3C7]/15 text-[#14A3C7] font-mono font-bold uppercase tracking-wider text-[11px]">
                      {featuredPost.category}
                    </span>
                    <span className="flex items-center gap-1 text-slate-400 font-mono text-[11px]">
                      <Clock size={12} />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h2
                    className={`text-xl sm:text-2xl md:text-3xl font-serif font-black tracking-tight leading-snug uppercase group-hover:text-[#14A3C7] transition-colors ${
                      isWhite ? "text-slate-950" : "text-white"
                    }`}
                  >
                    {featuredPost.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 line-clamp-3 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                </div>

                {/* Author Info & Read CTA */}
                <div className="pt-4 border-t border-slate-200/80 dark:border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#14A3C7]/20 border border-[#14A3C7]/40 text-[#14A3C7] font-bold text-xs flex items-center justify-center">
                      {featuredPost.author.initials}
                    </div>
                    <div>
                      <p
                        className={`text-xs font-bold leading-tight ${
                          isWhite ? "text-slate-900" : "text-white"
                        }`}
                      >
                        {featuredPost.author.name}
                      </p>
                      <p className="text-[10px] text-slate-400">
                        {featuredPost.date}
                      </p>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#14A3C7] group-hover:translate-x-1 transition-transform">
                    <span>Read Story</span>
                    <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* ── ARTICLES GRID (3-COLUMN RESPONSIVE LAYOUT WITH ASYMMETRIC COLUMN PARALLAX) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-2">
          {(searchQuery !== "" ? filteredPosts : regularPosts).map(
            (article, idx) => (
              <SpotlightArticleCard
                key={article.id}
                article={article}
                idx={idx}
                isWhite={isWhite}
                colY={getColY(idx)}
                cardRotateX={cardRotateX}
                liked={!!likedArticles[article.id]}
                bookmarked={!!bookmarkedArticles[article.id]}
                onLike={toggleLike}
                onBookmark={toggleBookmark}
                onOpen={() => setActiveArticle(article)}
              />
            )
          )}
        </div>

        {/* ── NEWSLETTER & DISPATCH BOX (CLEAN, SMOOTH CONVERSION) ── */}
        <div className="mt-16 sm:mt-24">
          <div
            className={`relative rounded-3xl p-8 sm:p-12 overflow-hidden border ${
              isWhite
                ? "bg-gradient-to-r from-slate-100 via-white to-slate-100 border-slate-200 shadow-xl"
                : "bg-gradient-to-r from-[#071922] via-[#0b2533] to-[#071922] border-white/15 shadow-2xl"
            }`}
          >
            {/* Ambient Lighting */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#14A3C7]/15 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto text-center space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#14A3C7]/15 border border-[#14A3C7]/30 text-[#14A3C7] text-[10px] font-mono font-bold tracking-widest uppercase">
                <Sparkles size={11} />
                <span>BWORTH DISPATCH</span>
              </div>

              <h2
                className={`text-2xl sm:text-3xl md:text-4xl font-serif font-black tracking-tight uppercase ${
                  isWhite ? "text-slate-900" : "text-white"
                }`}
              >
                Join 12,000+ Fashion Innovators
              </h2>

              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Receive our curated weekly brief on fashion circularity, textile
                regeneration, and enterprise buyback strategies. Zero spam.
              </p>

              {newsletterStatus === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold flex items-center justify-center gap-2"
                >
                  <Check size={16} />
                  <span>
                    Thank you! You're now subscribed to the BWorth Dispatch.
                  </span>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleNewsletterSubmit}
                  className="flex flex-col sm:flex-row items-center gap-2.5 max-w-md mx-auto pt-2"
                >
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your work email address..."
                    className={`w-full px-4 py-3 rounded-full text-xs border outline-none transition-all ${
                      isWhite
                        ? "bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-[#14A3C7] focus:ring-2 focus:ring-[#14A3C7]/15"
                        : "bg-[#061217] border-white/20 text-white placeholder-slate-500 focus:border-[#14A3C7] focus:ring-2 focus:ring-[#14A3C7]/20"
                    }`}
                  />
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#14A3C7] hover:bg-[#118ba8] text-white text-xs font-bold uppercase tracking-wider shrink-0 transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#14A3C7]/25"
                  >
                    <span>Subscribe</span>
                    <Send size={13} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* ── 3. FULL ARTICLE READER MODAL (HIGH-END READING VIEW) ── */}
      {/* ────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {activeArticle && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveArticle(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className={`relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border shadow-2xl p-6 sm:p-10 md:p-12 ${
                isWhite
                  ? "bg-white text-slate-900 border-slate-200"
                  : "bg-[#091b24] text-white border-white/15"
              }`}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveArticle(null)}
                className={`absolute top-5 right-5 w-10 h-10 rounded-full border flex items-center justify-center transition-all ${
                  isWhite
                    ? "bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200"
                    : "bg-white/10 hover:bg-white/20 text-white border-white/15"
                }`}
                title="Close"
              >
                <X size={18} />
              </button>

              {/* Reader Header */}
              <div className="space-y-4 mb-8">
                <div className="flex flex-wrap items-center gap-3 text-xs">
                  <span className="px-3 py-1 rounded-full bg-[#14A3C7]/15 text-[#14A3C7] font-mono font-bold uppercase tracking-wider text-[11px]">
                    {activeArticle.category}
                  </span>
                  <span className="flex items-center gap-1 text-slate-400 font-mono text-[11px]">
                    <Clock size={12} />
                    {activeArticle.readTime}
                  </span>
                  <span className="text-slate-400">•</span>
                  <span className="flex items-center gap-1 text-slate-400 font-mono text-[11px]">
                    <Calendar size={12} />
                    {activeArticle.date}
                  </span>
                </div>

                <h1
                  className={`text-2xl sm:text-4xl md:text-5xl font-serif font-black uppercase tracking-tight leading-tight ${
                    isWhite ? "text-slate-950" : "text-white"
                  }`}
                >
                  {activeArticle.title}
                </h1>

                {/* Author Strip */}
                <div className="flex items-center justify-between pt-2 border-b border-slate-200/80 dark:border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#14A3C7]/20 border border-[#14A3C7]/40 text-[#14A3C7] font-bold text-sm flex items-center justify-center">
                      {activeArticle.author.initials}
                    </div>
                    <div>
                      <p className="font-bold text-sm">
                        {activeArticle.author.name}
                      </p>
                      <p className="text-xs text-slate-400">
                        {activeArticle.author.role}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => handleShare(activeArticle, e)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold transition-all ${
                        isWhite
                          ? "bg-slate-100 hover:bg-slate-200 border-slate-200 text-slate-800"
                          : "bg-white/10 hover:bg-white/20 border-white/15 text-white"
                      }`}
                    >
                      <Share2 size={13} />
                      <span className="hidden sm:inline">Share</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Reader Image Banner */}
              <div className="relative w-full h-64 sm:h-96 rounded-2xl overflow-hidden mb-8 shadow-lg">
                <Image
                  src={activeArticle.image}
                  alt={activeArticle.title}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>

              {/* Reader Content Body */}
              <div className="space-y-6 text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
                {activeArticle.content.map((block, i) => {
                  if (block.type === "paragraph") {
                    return (
                      <p key={i} className="leading-relaxed">
                        {block.text}
                      </p>
                    );
                  }
                  if (block.type === "heading") {
                    return (
                      <h3
                        key={i}
                        className={`text-xl sm:text-2xl font-serif font-black uppercase tracking-tight pt-4 ${
                          isWhite ? "text-slate-900" : "text-white"
                        }`}
                      >
                        {block.text}
                      </h3>
                    );
                  }
                  if (block.type === "quote") {
                    return (
                      <blockquote
                        key={i}
                        className="my-6 pl-4 sm:pl-6 border-l-4 border-[#14A3C7] italic text-base sm:text-lg font-serif text-slate-900 dark:text-slate-100 bg-[#14A3C7]/5 py-3 rounded-r-xl"
                      >
                        "{block.text}"
                      </blockquote>
                    );
                  }
                  if (block.type === "takeaways") {
                    return (
                      <div
                        key={i}
                        className={`my-6 p-6 rounded-2xl border ${
                          isWhite
                            ? "bg-slate-50 border-slate-200"
                            : "bg-[#061217] border-white/10"
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-3 text-xs font-mono font-bold uppercase tracking-wider text-[#14A3C7]">
                          <ShieldCheck size={16} />
                          <span>{block.title}</span>
                        </div>
                        <ul className="space-y-2">
                          {block.points.map((pt, pIdx) => (
                            <li
                              key={pIdx}
                              className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#14A3C7] mt-2 shrink-0" />
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>

              {/* Reader Footer Actions */}
              <div className="mt-12 pt-6 border-t border-slate-200/80 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <button
                    onClick={(e) => toggleLike(activeArticle.id, e)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-bold uppercase tracking-wider transition-all ${
                      likedArticles[activeArticle.id]
                        ? "bg-rose-500 border-rose-500 text-white"
                        : isWhite
                        ? "bg-slate-100 border-slate-200 text-slate-800 hover:bg-slate-200"
                        : "bg-white/10 border-white/15 text-white hover:bg-white/20"
                    }`}
                  >
                    <Heart
                      size={14}
                      className={
                        likedArticles[activeArticle.id] ? "fill-current" : ""
                      }
                    />
                    <span>
                      {likedArticles[activeArticle.id] ? "Liked" : "Like Article"}
                    </span>
                  </button>

                  <button
                    onClick={(e) => toggleBookmark(activeArticle.id, e)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-bold uppercase tracking-wider transition-all ${
                      bookmarkedArticles[activeArticle.id]
                        ? "bg-[#14A3C7] border-[#14A3C7] text-white"
                        : isWhite
                        ? "bg-slate-100 border-slate-200 text-slate-800 hover:bg-slate-200"
                        : "bg-white/10 border-white/15 text-white hover:bg-white/20"
                    }`}
                  >
                    <Bookmark
                      size={14}
                      className={
                        bookmarkedArticles[activeArticle.id] ? "fill-current" : ""
                      }
                    />
                    <span>
                      {bookmarkedArticles[activeArticle.id]
                        ? "Saved"
                        : "Save Article"}
                    </span>
                  </button>
                </div>

                <button
                  onClick={() => setActiveArticle(null)}
                  className="px-6 py-2.5 rounded-full bg-[#14A3C7] text-white text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
                >
                  Close Reader
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ── FOOTER ── */}
      <Footer />
    </main>
  );
}
