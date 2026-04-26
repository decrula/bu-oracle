import Link from "next/link";

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
      <Link href="/checkout" className="inline-block bg-tertiary text-on-tertiary px-12 py-6 rounded-full font-sans text-sm uppercase tracking-[0.2em] font-bold shadow-[0_20px_60px_rgba(233,195,73,0.3)] hover:scale-105 transition-all">
        Decode My Dream
      </Link>
      <div className="mt-12 text-[10px] uppercase tracking-[0.3em] text-on-surface-variant/60 font-medium">
        Encrypted • Secure • Eternal
      </div>
    </div>
  </section>
);

export { FinalCTA };
