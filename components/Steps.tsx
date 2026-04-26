"use client";

import { motion } from "motion/react";
import { Moon, Sparkles, History } from "lucide-react";

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
            text: "Our Oracle processes your dream through the lens of Zhou Gong's Classic and modern psychological archetypes."
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

export { Steps };
