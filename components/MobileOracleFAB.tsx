"use client";

import { Mountain } from "lucide-react";

const MobileOracleFAB = () => (
  <button className="fixed bottom-8 right-8 w-16 h-16 rounded-full glass-nav border border-tertiary/30 shadow-2xl flex items-center justify-center group z-[100] md:hidden">
    <Mountain className="text-tertiary group-hover:scale-110 transition-transform w-6 h-6" />
  </button>
);

export { MobileOracleFAB };
