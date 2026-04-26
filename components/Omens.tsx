import { ArrowRight } from "lucide-react";

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

export { Omens };
