import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { getConfigSection } from "@/hooks/useWebsiteConfig";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

// Get configuration data
const seoConfig = getConfigSection("seo");
const companyConfig = getConfigSection("company");

export const metadata: Metadata = {
  title: seoConfig.title,
  description: seoConfig.description,
  keywords: seoConfig.keywords,
  authors: [{ name: seoConfig.author }],
  creator: seoConfig.author,
  publisher: seoConfig.author,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(seoConfig.url),
  icons: {
    icon: companyConfig.logoWithBg,
    shortcut: companyConfig.logoWithBg,
    apple: companyConfig.logoWithBg,
  },
  openGraph: {
    title: seoConfig.openGraph.title,
    description: seoConfig.openGraph.description,
    url: seoConfig.url,
    siteName: companyConfig.name,
    images: [
      {
        url: seoConfig.openGraph.image,
        width: 1200,
        height: 630,
        alt: seoConfig.openGraph.imageAlt,
      },
    ],
    locale: seoConfig.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: seoConfig.openGraph.title,
    description: seoConfig.openGraph.description,
    creator: companyConfig.social.twitterHandle,
    images: [seoConfig.openGraph.image],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
