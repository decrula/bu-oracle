import { Star } from "lucide-react";

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

export { Testimonials };
