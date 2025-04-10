import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import AnalyticsProvider from "@/provider/AnalyticsProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MonadDAO - Fund Teams Trade Memes",
  description: "Pool ETH/SOL to invest and build on behalf of your community",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <AnalyticsProvider writeKey="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmlnaW4iOiJodHRwczovL21vbmFkLWRhby52ZXJjZWwuYXBwLyIsInByb2plY3RfaWQiOiI2RWE0U2tOSkNhcW9zR1NUckZlX0IiLCJpYXQiOjE3NDQyNTg1ODF9.c93wTPw7ftBztpJ8a1rXniiBEMjIsIAE2fNSXuSmILU">
          <Providers>{children}</Providers>
        </AnalyticsProvider>
      </body>
    </html>
  );
}
