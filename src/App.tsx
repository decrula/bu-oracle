/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Moon, 
  Sparkles, 
  Star, 
  Globe, 
  Book, 
  ArrowRight,
  Mountain,
  History,
} from "lucide-react";

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 glass-nav flex justify-between items-center px-6 md:px-12 py-6">
    <div className="text-3xl font-serif italic text-tertiary">Bu</div>
    <div className="hidden md:flex gap-10 items-center">
      <a href="#" className="text-tertiary border-b border-tertiary/40 pb-1 font-serif text-lg tracking-wide hover:text-tertiary transition-colors duration-300">The Oracle</a>
      {/* <a href="#" className="text-on-surface-variant font-serif text-lg tracking-wide hover:text-tertiary transition-colors duration-300">Manuscript</a>
      <a href="#" className="text-on-surface-variant font-serif text-lg tracking-wide hover:text-tertiary transition-colors duration-300">Wisdom</a>
      <a href="#" className="text-on-surface-variant font-serif text-lg tracking-wide hover:text-tertiary transition-colors duration-300">Sanctuary</a> */}
    </div>
    <button className="bg-tertiary text-on-tertiary px-6 py-2 rounded-full font-sans text-[11px] uppercase tracking-widest font-bold hover:brightness-110 transition-all active:scale-95">
      Decode My Dream
    </button>
  </nav>
);

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-24 overflow-hidden cloud-pattern">
    <div className="absolute inset-0 bg-gradient-to-b from-primary-container/20 to-surface pointer-events-none" />
    
    {/* Decorative Elements */}
    <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-tertiary/5 blur-[120px] rounded-full" />
    <div className="absolute bottom-0 left-0 w-full h-1/2 opacity-20 pointer-events-none">
      <img 
        className="w-full h-full object-cover mix-blend-screen" 
        src="/images/misty-mountains.jpg" 
        alt="Misty mountains"
        referrerPolicy="no-referrer"
      />
    </div>

    <div className="container mx-auto px-6 md:px-12 relative z-10 grid md:grid-cols-12 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="md:col-span-8 lg:col-span-7"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/5 bg-surface-container-low mb-8">
          <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
          <span className="text-[10px] uppercase tracking-[0.2em] font-sans font-medium text-on-surface-variant">The Ancient Scroll is Open</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-[1.1] text-on-surface">
          Your Dreams Are Not Random – They're Letters from Your <span className="italic text-tertiary">Subconscious</span>.
        </h1>
        
        <p className="text-lg md:text-xl text-on-surface-variant font-sans mb-10 max-w-xl leading-relaxed font-light">
          Stop waking up anxious. Written 3,000 years ago, our wisdom provides clarity. Get your personalized Eastern dream reading in minutes.
        </p>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <button className="bg-tertiary text-on-tertiary px-10 py-5 rounded-full font-sans text-sm uppercase tracking-widest font-bold shadow-[0_0_30px_rgba(233,195,73,0.2)] hover:scale-105 transition-transform">
            Decode My Dream Now →
          </button>
          <div className="text-[11px] font-sans tracking-wide text-on-surface-variant/80 uppercase max-w-[200px]">
            Includes Feng Shui action step • 100% refund if not satisfied
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-20 flex flex-wrap gap-x-12 gap-y-6">
          <div className="flex items-center gap-3">
            <Star className="text-tertiary w-5 h-5 fill-tertiary" />
            <span className="text-[11px] uppercase tracking-widest text-on-surface-variant font-sans"><strong className="text-on-surface font-bold">4.9/5</strong> from 12,400+ dreamers</span>
          </div>
          <div className="flex items-center gap-3">
            <Globe className="text-tertiary w-5 h-5" />
            <span className="text-[11px] uppercase tracking-widest text-on-surface-variant font-sans">Used in <strong className="text-on-surface font-bold">47 countries</strong></span>
          </div>
          <div className="flex items-center gap-3">
            <Book className="text-tertiary w-5 h-5" />
            <span className="text-[11px] uppercase tracking-widest text-on-surface-variant font-sans">Based on <strong className="text-on-surface font-bold">Zhou Gong's</strong> Dream Classic</span>
          </div>
        </div>
      </motion.div>

      {/* Hero Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="md:col-span-4 lg:col-span-5 hidden md:block relative px-4"
      >
        <div className="relative w-full aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl border border-white/5">
          <img 
            className="w-full h-full object-cover" 
            src="/images/ethereal-sleep.jpg" 
            alt="Ethereal sleep"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 p-6 glass-card rounded-2xl">
            <p className="text-sm italic font-serif text-white/90 leading-relaxed">
              "The soul wanders while the body rests, gathering the seeds of tomorrow's fortune."
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const Steps = () => (
  <section className="py-32 bg-surface-container-low shadow-inner relative overflow-hidden">
    <div className="container mx-auto px-6 md:px-12 relative z-10">
      <div className="text-center mb-24">
        <h2 className="text-4xl font-serif mb-4 flex items-center justify-center gap-4">
          The Path to Revelation
        </h2>
        <div className="w-24 h-px bg-tertiary mx-auto opacity-40" />
      </div>
      
      <div className="grid md:grid-cols-3 gap-16">
        {[
          { 
            icon: Moon, 
            step: "Step 1: Tell us your dream", 
            text: "Whisper your visions to our digital parchment. Every detail, no matter how small, holds a fragment of the truth." 
          },
          { 
            icon: Sparkles, 
            step: "Step 2: Ancient Wisdom", 
            text: "Our Oracle processes your dream through the lens of Zhou Gong’s Classic and modern psychological archetypes." 
          },
          { 
            icon: History, 
            step: "Step 3: Receive your ritual", 
            text: "Obtain a detailed manuscript of interpretation along with a personalized Feng Shui ritual to harmonize your path." 
          }
        ].map((item, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ y: -5 }}
            className="flex flex-col items-center text-center group"
          >
            <div className="w-20 h-20 rounded-full bg-surface-container-high flex items-center justify-center mb-8 border border-white/5 group-hover:border-tertiary/30 transition-all duration-500">
              <item.icon className="w-8 h-8 text-tertiary" />
            </div>
            <h3 className="text-xl font-serif mb-4">{item.step}</h3>
            <p className="text-on-surface-variant font-sans text-sm leading-relaxed max-w-xs font-light">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Omens = () => (
  <section className="py-32 cloud-pattern">
    <div className="container mx-auto px-6 md:px-12">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-serif mb-6 leading-tight">
            Common Omens & <span className="italic text-tertiary">Celestial Symbols</span>
          </h2>
          <p className="text-on-surface-variant font-light">The language of the night is symbolic. Here is how we bridge the gap between sight and sense.</p>
        </div>
        <button className="text-tertiary font-sans text-[10px] uppercase tracking-[0.2em] flex items-center gap-2 group">
          View Entire Dictionary <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            tag: "Prosperity Omen",
            title: "Dreamt of snakes → Wealth is approaching.",
            desc: "In Eastern tradition, snakes are guardians of the earth's treasures. Their appearance signals a shift in financial currents.",
            ritual: "Includes Feng Shui adjustment"
          },
          {
            tag: "Ancestral Link",
            title: "Dreamt of teeth falling → Family roots.",
            desc: "A call from your lineage. It signifies a need to ground yourself in your heritage and address unresolved family dynamics.",
            ritual: "Includes candle ritual"
          },
          {
            tag: "Elemental Flow",
            title: "Dreamt of flood → Life transition.",
            desc: "Water represents emotion and movement. A flood indicates a overwhelming but necessary purification of your current path.",
            ritual: "Includes element balancing"
          }
        ].map((omen, idx) => (
          <div key={idx} className="bg-surface-container-high p-10 rounded-2xl relative group overflow-hidden border border-white/5">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-tertiary/5 rounded-full blur-2xl group-hover:bg-tertiary/10 transition-colors" />
            <div className="text-[10px] font-sans text-tertiary uppercase tracking-widest mb-6 font-bold">{omen.tag}</div>
            <h3 className="text-2xl font-serif mb-6 leading-relaxed">{omen.title}</h3>
            <p className="text-on-surface-variant text-sm mb-8 leading-relaxed font-light">{omen.desc}</p>
            <div className="pt-6 border-t border-white/5 text-[10px] font-sans uppercase tracking-widest text-on-surface/40">
              {omen.ritual}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-32 bg-primary-container/5">
    <div className="container mx-auto px-6 md:px-12">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-4xl font-serif mb-8">Whispers from the <span className="italic text-tertiary">Waking World</span></h2>
          <p className="text-on-surface-variant text-lg mb-12 font-light">Thousands have found their footing through our ancestral readings.</p>
          
          <div className="space-y-16">
            {[
              {
                quote: "This is different from Western dream dictionaries. It doesn't just label symbols; it gives you a ritual to fix the energy. My sleep has never been more peaceful.",
                author: "Elena R.",
                img: "/images/elena.jpg"
              },
              {
                quote: "The detail in the manuscript was startling. It felt like someone had been watching my life from the clouds. The Feng Shui tip actually worked.",
                author: "Marcus T.",
                img: "/images/marcus.jpg"
              }
            ].map((t, idx) => (
              <div key={idx} className="relative">
                <blockquote className="text-xl italic font-serif leading-relaxed mb-6 text-on-surface/90">
                  "{t.quote}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <img src={t.img} className="w-12 h-12 rounded-full object-cover grayscale opacity-80" alt={t.author} referrerPolicy="no-referrer" />
                  <div>
                    <p className="font-sans text-xs uppercase tracking-wider font-bold">{t.author}</p>
                    <div className="flex text-tertiary text-[10px] gap-0.5 mt-1">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-tertiary" />)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative hidden md:block">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/5">
            <img 
              src="/images/ancient-scroll.jpg" 
              className="w-full h-auto opacity-70 grayscale hover:grayscale-0 transition-all duration-700" 
              alt="Ancient scroll"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-tertiary/10 rounded-full blur-3xl -z-10" />
        </div>
      </div>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="py-40 relative overflow-hidden text-center">
    <div className="absolute inset-0 cloud-pattern opacity-30" />
    <div className="container mx-auto px-6 relative z-10">
      <h2 className="text-4xl md:text-6xl font-serif mb-8 max-w-3xl mx-auto leading-tight">
        Still wondering what your dream means?
      </h2>
      <p className="text-on-surface-variant text-lg mb-12 max-w-xl mx-auto font-light">
        Get your complete oracular reading and personalized ritual now for just <span className="text-tertiary font-bold">$66.66</span>.
      </p>
      <button className="bg-tertiary text-on-tertiary px-12 py-6 rounded-full font-sans text-sm uppercase tracking-[0.2em] font-bold shadow-[0_20px_60px_rgba(233,195,73,0.3)] hover:scale-105 transition-all">
        Decode My Dream
      </button>
      <div className="mt-12 text-[10px] uppercase tracking-[0.3em] text-on-surface-variant/60 font-medium">
        Encrypted • Secure • Eternal
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-primary-container/20 border-t border-white/5 py-24 px-6 md:px-12">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
      <div className="flex flex-col items-center md:items-start">
        <div className="text-3xl font-serif italic text-tertiary mb-6">Bu</div>
        <p className="font-serif italic text-sm text-on-surface-variant">© 2026 Bu – The Celestial Manuscript. All Wisdom Reserved.</p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-8 md:gap-12">
        {/*["Journaling Tips", "Dream Library", "Privacy Scrolls", "Divine Support"].map((link, idx) => (
          <a key={idx} href="#" className="text-on-surface-variant font-sans uppercase tracking-[0.2em] text-[10px] hover:text-tertiary transition-colors">
            {link}
          </a>
        ))*/}
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Steps />
      <Omens />
      <Testimonials />
      <FinalCTA />
      <Footer />
      
      {/* Mobile Oracle FAB */}
      <button className="fixed bottom-8 right-8 w-16 h-16 rounded-full glass-nav border border-tertiary/30 shadow-2xl flex items-center justify-center group z-[100] md:hidden">
        <Mountain className="text-tertiary group-hover:scale-110 transition-transform w-6 h-6" />
      </button>
    </div>
  );
}
