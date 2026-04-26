const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 glass-nav flex justify-between items-center px-6 md:px-12 py-6">
    <div className="text-3xl font-serif italic text-tertiary">Bu</div>
    <div className="hidden md:flex gap-10 items-center">
      <a href="#" className="text-tertiary border-b border-tertiary/40 pb-1 font-serif text-lg tracking-wide hover:text-tertiary transition-colors duration-300">The Oracle</a>
    </div>
    <button className="bg-tertiary text-on-tertiary px-6 py-2 rounded-full font-sans text-[11px] uppercase tracking-widest font-bold hover:brightness-110 transition-all active:scale-95">
      Decode My Dream
    </button>
  </nav>
);

export { Navbar };
