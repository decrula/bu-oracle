import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

export default function CheckoutSuccessPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 cloud-pattern flex items-center justify-center">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-xl mx-auto text-center glass-card rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute inset-0 cloud-pattern opacity-30 pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-tertiary/20 mb-6">
              <Sparkles className="text-tertiary w-8 h-8" />
            </div>

            <h1 className="font-serif text-3xl md:text-4xl text-on-surface mb-4">
              Your Journey Begins
            </h1>

            <p className="text-on-surface-variant mb-8 leading-relaxed">
              The Oracle has received your offering. Check your inbox for your sacred dream reading, delivered within minutes.
            </p>

            <Link
              href="/"
              className="inline-flex items-center gap-2 text-tertiary hover:text-tertiary/80 transition-colors"
            >
              Return to the Temple
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
