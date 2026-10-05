"use client";
import React from "react";
import { Star, Quote, CheckCircle2, Sparkles } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export const reviewsData = [
  {
    id: 1,
    name: "Deepak Joshi",
    review:
      "Bworth picks up old clothes right from the doorstep, so I no longer have to worry about disposing of them. It also feels great to contribute positively to the environment. Kudos to the Bworth team! 😀",
    rating: 5,
    tag: "Doorstep Pickup",
    category: "Doorstep Pickup",
    role: "Verified Seller",
    avatarBg: "from-cyan-500 to-blue-600",
  },
  {
    id: 2,
    name: "Harsh Purwar",
    review:
      "The app is very easy to use and the concept is unique. No more stress about old clothes—I can sell my old clothes and make room for new ones. Love the concept! ❤️",
    rating: 5,
    tag: "Wardrobe Declutter",
    category: "App Experience",
    role: "Verified Seller",
    avatarBg: "from-rose-500 to-pink-600",
  },
  {
    id: 3,
    name: "Jatin Mourya",
    review: "A very useful app. 👍👍",
    rating: 5,
    tag: "Useful App",
    category: "App Experience",
    role: "Verified User",
    avatarBg: "from-emerald-500 to-teal-600",
  },
  {
    id: 4,
    name: "Aman Raj",
    review:
      "Great service! I’m from Lajpat Nagar, and the team picked up my old clothes directly from my doorstep without any extra charges. Thanks for helping me clear my wardrobe so easily.",
    rating: 5,
    tag: "Lajpat Nagar, Delhi",
    category: "Doorstep Pickup",
    role: "Doorstep Seller",
    avatarBg: "from-sky-500 to-indigo-600",
  },
  {
    id: 5,
    name: "Saurabh Godawat",
    review:
      "A one-stop solution for my wardrobe—sell old clothes and shop for new ones. What a great idea!",
    rating: 5,
    tag: "Wardrobe & Cash",
    category: "Wardrobe & Cash",
    role: "Circular Shopper",
    avatarBg: "from-amber-500 to-orange-600",
  },
  {
    id: 6,
    name: "Prasad Shaswat",
    review:
      "A very useful app for selling old clothes and discovering new clothing options.",
    rating: 5,
    tag: "Sell & Discover",
    category: "Wardrobe & Cash",
    role: "Verified Member",
    avatarBg: "from-teal-500 to-emerald-600",
  },
  {
    id: 7,
    name: "Teenu Kumar",
    review: "Super experience! 5 stars! ⭐⭐⭐⭐⭐",
    rating: 5,
    tag: "5 Star Rating",
    category: "App Experience",
    role: "Verified User",
    avatarBg: "from-yellow-500 to-amber-600",
  },
  {
    id: 8,
    name: "Vishnu",
    review: "Had a great experience with Bworth.",
    rating: 5,
    tag: "Smooth Experience",
    category: "App Experience",
    role: "Verified User",
    avatarBg: "from-blue-500 to-cyan-600",
  },
  {
    id: 9,
    name: "Lalit Baheti",
    review:
      "Purane kapde sell karne ke liye bahut achha app hai. Slot book karte hi ghar se kapde pick up ho gaye, aur new branded clothes ki range bhi kaafi achhi hai. Good work!",
    rating: 5,
    tag: "Pickup & Brands",
    category: "Doorstep Pickup",
    role: "Verified Seller",
    avatarBg: "from-emerald-600 to-green-700",
  },
  {
    id: 10,
    name: "Prashant Pandey",
    review:
      "A great e-commerce platform with plenty of choices and fast delivery. 😍",
    rating: 5,
    tag: "Fast Delivery",
    category: "Brand Quality",
    role: "Verified Buyer",
    avatarBg: "from-fuchsia-500 to-purple-600",
  },
  {
    id: 11,
    name: "Vinay Singla",
    review: "Very good experience.",
    rating: 5,
    tag: "Quick Pickup",
    category: "App Experience",
    role: "Verified User",
    avatarBg: "from-sky-600 to-blue-700",
  },
  {
    id: 12,
    name: "Rohit Khan",
    review: "Good service.",
    rating: 5,
    tag: "Reliable Service",
    category: "Doorstep Pickup",
    role: "Verified User",
    avatarBg: "from-indigo-500 to-blue-600",
  },
  {
    id: 13,
    name: "Manoj Parjapat",
    review: "Good and useful app.",
    rating: 5,
    tag: "Helpful App",
    category: "App Experience",
    role: "Verified User",
    avatarBg: "from-cyan-600 to-teal-700",
  },
  {
    id: 14,
    name: "Surendar",
    review: "Nice products and a good experience.",
    rating: 5,
    tag: "Quality Products",
    category: "Brand Quality",
    role: "Verified Buyer",
    avatarBg: "from-violet-500 to-purple-600",
  },
  {
    id: 15,
    name: "Sunil Dhiman",
    review: "Good experience overall.",
    rating: 5,
    tag: "Smooth Process",
    category: "App Experience",
    role: "Verified User",
    avatarBg: "from-amber-600 to-yellow-600",
  },
  {
    id: 16,
    name: "Uvka Innovations",
    review: "Excellent service.",
    rating: 5,
    tag: "Enterprise Partner",
    category: "Doorstep Pickup",
    role: "Corporate Partner",
    avatarBg: "from-emerald-500 to-cyan-600",
  },
  {
    id: 17,
    name: "Lokesh Sharma",
    review: "Good service and a smooth experience.",
    rating: 5,
    tag: "Doorstep Pickup",
    category: "Doorstep Pickup",
    role: "Verified User",
    avatarBg: "from-blue-600 to-indigo-700",
  },
  {
    id: 18,
    name: "Aarushi Kothari",
    review:
      "The service is very prompt, and the doorstep pickup of old clothes is extremely convenient. The additional value offered makes the experience even better. Kudos to the team!",
    rating: 5,
    tag: "Prompt Pickup",
    category: "Doorstep Pickup",
    role: "Top Contributor",
    avatarBg: "from-pink-500 to-rose-600",
  },
  {
    id: 19,
    name: "Asmeet Bisla",
    review: "Nice products and a good overall experience.",
    rating: 5,
    tag: "Quality & Style",
    category: "Brand Quality",
    role: "Verified Shopper",
    avatarBg: "from-purple-600 to-indigo-600",
  },
  {
    id: 20,
    name: "Manojpooja Meena",
    review: "Nice experience.",
    rating: 5,
    tag: "Happy Customer",
    category: "App Experience",
    role: "Verified User",
    avatarBg: "from-teal-600 to-cyan-700",
  },
  {
    id: 21,
    name: "Babinder Singh",
    review: "Nice and convenient service.",
    rating: 5,
    tag: "Convenient",
    category: "Doorstep Pickup",
    role: "Verified User",
    avatarBg: "from-slate-600 to-slate-800",
  },
];

// Helper to get initials
function getInitials(name) {
  if (!name) return "BW";
  const parts = name.trim().split(" ");
  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
}

// Single Review Card with explicit text-wrapping and responsive width
function ReviewCard({ item, isWhite }) {
  return (
    <div
      className={`relative w-[340px] sm:w-[390px] shrink-0 whitespace-normal p-6 rounded-3xl border transition-all duration-300 select-none flex flex-col justify-between ${
        isWhite
          ? "bg-white border-slate-200/90 shadow-[0_4px_20px_rgba(20,163,199,0.06)] hover:border-[#14A3C7]/60 hover:shadow-[0_16px_36px_rgba(20,163,199,0.14)]"
          : "bg-[#0c1f2c] border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.4)] hover:border-cyan-400/50 hover:shadow-[0_16px_40px_rgba(20,163,199,0.22)]"
      }`}
    >
      {/* Decorative Quote Icon Watermark */}
      <Quote
        size={36}
        className={`absolute top-5 right-5 pointer-events-none ${
          isWhite ? "text-[#14A3C7]/15" : "text-[#14A3C7]/20"
        }`}
      />

      <div className="whitespace-normal w-full">
        {/* Header: Avatar, Name, Role */}
        <div className="flex items-center gap-3.5 mb-3.5 pr-8 whitespace-normal">
          <div
            className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${item.avatarBg} text-white font-bold font-sans text-sm flex items-center justify-center shadow-md shrink-0 ring-2 ring-white/20`}
          >
            {getInitials(item.name)}
          </div>

          <div className="min-w-0 flex-1 whitespace-normal">
            <h4
              className={`font-sans font-bold text-base sm:text-[1.05rem] leading-snug break-words ${
                isWhite ? "text-slate-900" : "text-white"
              }`}
            >
              {item.name}
            </h4>
            <div className="flex flex-wrap items-center gap-1.5 mt-0.5 whitespace-normal">
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 size={12} className="shrink-0" />
                <span>{item.role}</span>
              </span>
              <span className={`text-[10px] ${isWhite ? "text-slate-300" : "text-white/20"}`}>•</span>
              <span
                className={`text-[11px] font-medium ${
                  isWhite ? "text-slate-500" : "text-slate-400"
                }`}
              >
                {item.tag}
              </span>
            </div>
          </div>
        </div>

        {/* 5-Star Rating Row */}
        <div className="flex items-center gap-1 mb-3">
          {[...Array(item.rating)].map((_, i) => (
            <Star
              key={i}
              size={15}
              className="text-amber-400 fill-amber-400 shrink-0 drop-shadow-xs"
            />
          ))}
          <span
            className={`text-xs font-bold font-mono ml-1.5 ${
              isWhite ? "text-slate-800" : "text-slate-200"
            }`}
          >
            5.0
          </span>
        </div>

        {/* Review Body: whitespace-normal & break-words ensure clean wrapping with NO overflow */}
        <p
          className={`text-sm leading-relaxed font-normal whitespace-normal break-words ${
            isWhite ? "text-slate-800" : "text-slate-100"
          }`}
        >
          “{item.review}”
        </p>
      </div>

      {/* Card Footer Micro-Bar */}
      <div
        className={`pt-3.5 mt-4 border-t flex items-center justify-between text-[11px] font-medium whitespace-normal ${
          isWhite ? "border-slate-100 text-slate-600" : "border-white/10 text-slate-400"
        }`}
      >
        <span className="inline-flex items-center gap-1 font-semibold text-[#14A3C7]">
          <Sparkles size={12} />
          <span>Verified Experience</span>
        </span>
        <span
          className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider ${
            isWhite
              ? "bg-slate-100 text-slate-700"
              : "bg-white/5 text-slate-300 border border-white/10"
          }`}
        >
          {item.category}
        </span>
      </div>
    </div>
  );
}

export default function ReviewMarqueeSection() {
  const { theme } = useTheme();
  const isWhite = theme === "white";

  // Duplicate all 21 reviews for seamless single row infinite marquee
  const duplicatedReviews = [...reviewsData, ...reviewsData];

  return (
    <section
      id="reviews-section"
      className={`py-16 md:py-24 overflow-hidden relative border-t transition-colors ${
        isWhite
          ? "bg-gradient-to-b from-[#f4fafc] via-white to-[#f4fafc] border-slate-200/80"
          : "bg-[#07151e] border-white/5"
      }`}
    >
      {/* Embedded Component Styles for 100% Guaranteed Left-to-Right Continuous Glide */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes bworthLtrGlide {
              0% {
                transform: translate3d(-50%, 0, 0);
              }
              100% {
                transform: translate3d(0%, 0, 0);
              }
            }
            .bworth-single-track {
              display: flex;
              width: max-content;
              will-change: transform;
              animation: bworthLtrGlide 75s linear infinite;
            }
            .bworth-single-track:hover {
              animation-play-state: paused;
            }
            @media (max-width: 640px) {
              .bworth-single-track {
                animation-duration: 55s;
              }
            }
            @media (prefers-reduced-motion: reduce) {
              .bworth-single-track {
                animation: none;
                overflow-x: auto;
              }
            }
          `,
        }}
      />

      {/* Background Decorative Ambient Radial Lighting */}
      <div className="pointer-events-none absolute -top-24 left-1/4 w-96 h-96 bg-[#14A3C7]/10 blur-3xl rounded-full" />
      <div className="pointer-events-none absolute -bottom-24 right-1/4 w-96 h-96 bg-emerald-500/10 blur-3xl rounded-full" />

      {/* Clean Section Header */}
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 relative z-10 mb-8 sm:mb-10 text-center space-y-3">
        {/* Heading */}
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl font-sans font-black uppercase tracking-tight leading-[1.08] ${
            isWhite ? "text-slate-900" : "text-white"
          }`}
        >
          REAL PEOPLE. REAL CLOSET CLEAROUTS.{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14A3C7] via-[#0ea5e9] to-[#0284c7]">
            REAL CASH.
          </span>
        </h2>

        <p
          className={`text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-2xl mx-auto ${
            isWhite ? "text-slate-600" : "text-slate-300"
          }`}
        >
          Discover how people across India turn old clothes into instant wallet cash
          and support zero-landfill eco recycling.
        </p>
      </div>

      {/* SINGLE ROW CONTINUOUS SCROLL (Gliding smoothly Left to Right) */}
      <div className="relative select-none w-full overflow-hidden">
        {/* Left & Right Blended Fade Gradients */}
        <div
          className={`pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-36 lg:w-48 z-20 bg-gradient-to-r ${
            isWhite
              ? "from-[#f4fafc] via-[#f4fafc]/80 to-transparent"
              : "from-[#07151e] via-[#07151e]/80 to-transparent"
          }`}
        />
        <div
          className={`pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-36 lg:w-48 z-20 bg-gradient-to-l ${
            isWhite
              ? "from-[#f4fafc] via-[#f4fafc]/80 to-transparent"
              : "from-[#07151e] via-[#07151e]/80 to-transparent"
          }`}
        />

        {/* Single Row Infinite Left to Right Marquee Track */}
        <div className="w-full overflow-hidden py-3">
          <div className="bworth-single-track flex items-stretch gap-5 sm:gap-6 shrink-0">
            {duplicatedReviews.map((item, idx) => (
              <ReviewCard key={`single-row-${item.id}-${idx}`} item={item} isWhite={isWhite} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
