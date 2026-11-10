import Image from "next/image";
import { ArrowDownRight, ArrowRight, ArrowUpRight } from "lucide-react";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import JourneyVideo from "./components/JourneyVideo";
import "./home.css";

const appUrl = "https://play.google.com/store/apps/details?id=com.BworthGo";

const journey = [
  {
    number: "01",
    title: "Sell old clothes",
    detail: "Give your wardrobe a fresh start.",
    image: "/bworth_closet_box.jpg",
    video: "/1.mp4",
    alt: "Pre-loved clothes packed in a BWORTH box",
  },
  {
    number: "02",
    title: "Earn BWC",
    detail: "Your clothes become rewards.",
    image: "/bworth-earn-customer.png",
    video: "/3.mp4",
    alt: "Happy customer after preparing clothes for BWORTH pickup",
  },
  {
    number: "03",
    title: "Shop new fashion",
    detail: "Use your coins on your next find.",
    image: "/bworth-shop-fashion.png",
    video: "/4.mp4",
    alt: "Customer choosing a new blue overshirt in a fashion boutique",
  },
  {
    number: "04",
    title: "Choose buyback",
    detail: "When new becomes old, begin again.",
    image: "/bworth-buyback-return.png",
    video: "/2.mp4",
    alt: "Customer returning a previously purchased overshirt through buyback",
  },
];

function AppLink({ children, secondary = false, className = "" }) {
  return (
    <a
      href={appUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`bw-button ${secondary ? "bw-button-secondary" : ""} ${className}`}
    >
      <span>{children}</span>
      <ArrowUpRight size={18} strokeWidth={1.6} aria-hidden="true" />
    </a>
  );
}

export default function Home() {
  return (
    <main className="bw-home">
      <section className="bw-hero" aria-labelledby="bw-hero-title">
        <div className="bw-hero-inner">
          <div className="bw-hero-copy">
            <p className="bw-eyebrow"><span className="bw-eyebrow-dot" /> Sustainable Fashion Marketplace</p>
            <h1 id="bw-hero-title">
              Your old clothes have a hidden price.
              <em>Unlock their worth with BWORTH.</em>
            </h1>
            <p className="bw-hero-intro">
              Join BWORTH in building a circular fashion ecosystem where clothes get a second life and customers get rewarded.
            </p>
            <div className="bw-hero-actions">
              <AppLink>Download the app</AppLink>
            </div>
            <a className="bw-scroll-cue" href="#journey">
              <span>Explore the journey</span><ArrowDownRight size={18} strokeWidth={1.5} aria-hidden="true" />
            </a>
          </div>

          <div className="bw-hero-visual">
            <Image
              src="/bworth-hero-closet-v2.png"
              alt="BWORTH customer preparing pre-loved clothes for doorstep pickup"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 48vw"
              className="bw-image"
            />
            <div className="bw-hero-visual-top" aria-hidden="true">BWORTH / A BETTER NEXT JOURNEY</div>
            <div className="bw-hero-visual-bottom">
              <span>OLD CLOTHES</span>
              <ArrowRight size={22} strokeWidth={1.3} aria-hidden="true" />
              <span>NEW POSSIBILITIES</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bw-journey" id="journey" aria-labelledby="bw-journey-title">
        <div className="bw-section-heading">
          <div>
            <h2 id="bw-journey-title">Sell. Earn. Shop. Repeat.</h2>
          </div>
          <p>Four simple steps. More life in every garment.</p>
        </div>

        <ol className="bw-process" aria-label="Sell, earn BWORTH coins, shop and choose buyback">
          {journey.map((step, index) => (
            <li key={step.number}>
              <span className="bw-process-number">{step.number}</span>
              <span>{step.title}</span>
              {index < journey.length - 1 && <ArrowRight size={20} strokeWidth={1.4} aria-hidden="true" />}
            </li>
          ))}
        </ol>

        <div className="bw-journey-grid">
          {journey.map((step) => (
            <article className="bw-journey-card" key={step.number}>
              <div className="bw-journey-image">
                <JourneyVideo src={step.video} poster={step.image} label={`${step.title}: ${step.alt}`} />
                <span className="bw-image-index">{step.number} / 04</span>
              </div>
              <div className="bw-journey-caption">
                <div><h3>{step.title}</h3><p>{step.detail}</p></div>
                <ArrowUpRight size={21} strokeWidth={1.4} aria-hidden="true" />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bw-rewards" aria-labelledby="bw-rewards-title">
        <div className="bw-rewards-photo">
          <Image
            src="/bworth-earn-customer.png"
            alt="Happy BWORTH customer ready to earn rewards from pre-loved clothes"
            fill
            sizes="(max-width: 900px) 100vw, 52vw"
            className="bw-image"
          />
          <span className="bw-photo-label">YOUR WARDROBE, REWARDED.</span>
        </div>
        <div className="bw-rewards-copy">
          <h2 id="bw-rewards-title">Free doorstep pickup.<br /><em>Instant BWC.</em></h2>
          <p>Book a slot in the app. We collect your old clothes and credit BWORTH Coins to your wallet.</p>
          <div className="bw-coin-row" role="img" aria-label="Illustration of BWORTH Coins credited to a wallet">
            <span className="bw-coin">BWC</span>
            <span className="bw-coin bw-coin-two">BWC</span>
            <span className="bw-coin-wallet">BWORTH WALLET <strong>COINS EARNED ✓</strong></span>
          </div>
          <AppLink>Book your slot in the app</AppLink>
        </div>
      </section>

      <section className="bw-redeem" aria-labelledby="bw-redeem-title">
        <div className="bw-redeem-copy">
          <h2 id="bw-redeem-title">Your coins look good on you.</h2>
          <p>Redeem your BWC on screen to buy new clothes on the BWORTH app.</p>
        </div>
        <div className="bw-redeem-stage">
          <div className="bw-redeem-photo">
            <Image src="/hero.png" alt="A new fashion look" fill sizes="(max-width: 900px) 90vw, 50vw" className="bw-image" />
          </div>
          <div className="bw-phone" aria-label="Illustrative BWORTH app checkout showing BWORTH Coins being redeemed">
            <div className="bw-phone-top"><span>BWORTH</span><span>•••</span></div>
            <div className="bw-phone-product">
              <Image src="/bworth-product-overshirt.png" alt="" fill sizes="170px" className="bw-image" />
            </div>
            <p className="bw-phone-label">YOUR NEXT FIND</p>
            <p className="bw-phone-name">New fashion. More worth.</p>
            <div className="bw-phone-rule" />
            <div className="bw-phone-wallet"><span className="bw-phone-coin">BWC</span><span>Use BWORTH Coins<strong>Applied at checkout</strong></span><span>✓</span></div>
            <div className="bw-phone-pay">CONTINUE TO SHOP <ArrowUpRight size={15} aria-hidden="true" /></div>
          </div>
        </div>
      </section>

      <section className="bw-final" aria-labelledby="bw-final-title">
        <p className="bw-section-kicker">THE NEXT LIFE STARTS HERE</p>
        <h2 id="bw-final-title">Start your circular fashion journey with <em>BWORTH.</em></h2>
      </section>

      <ContactSection />
      <Footer />
    </main>
  );
}
