import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnalyticsProviders } from "@/components/providers/AnalyticsProviders";

export const metadata: Metadata = {
  title: "Bu – The Oracle of Dreams",
  description: "Your Dreams Are Not Random – They're Letters from Your Subconscious.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <AnalyticsProviders />
      </body>
    </html>
  );
}
