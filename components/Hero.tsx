"use client";

import { motion } from "motion/react";
import { Star, Globe, Book } from "lucide-react";

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-24 overflow-hidden cloud-pattern">
    <div className="absolute inset-0 bg-gradient-to-b from-primary-container/20 to-surface pointer-events-none" />

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

export { Hero };
