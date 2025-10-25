import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";
const SITE_NAME = "Zyra";
const DEFAULT_TITLE = "Zyra — AI Assistant";
const DEFAULT_DESCRIPTION =
  "Zyra automates customer communication and appointment bookings for salons, gyms, clinics, and spas. Never miss a booking.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | Zyra",
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    "Zyra",
    "AI assistant",
    "appointment booking",
    "salon booking",
    "gym booking",
    "clinic booking",
    "spa booking",
    "customer automation",
  ],
  authors: [{ name: "Fares Brayek", url: "https://github.com/farsbrayek3" }],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        alt: "Zyra — AI assistant demo preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [`${SITE_URL}/og-image.png`],
    creator: "@farsbrayek3",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [{ rel: "manifest", url: "/site.webmanifest" }],
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  // canonical handled by metadataBase + openGraph.url; alternates can be added if needed
  // alternates: { canonical: SITE_URL },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Explicit favicon link as fallback */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>{" "}
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
