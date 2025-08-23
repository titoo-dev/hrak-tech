import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "HRak Tech - Solutions Digitales Innovantes | Développement Web, Mobile & ERP",
  description: "HRak Tech transforme vos idées en solutions digitales performantes. Expertise en développement web (Next.js), applications mobiles (Flutter), et ERP (Odoo). Contactez-nous pour concrétiser votre projet.",
  keywords: ["développement web", "application mobile", "ERP Odoo", "Next.js", "Flutter", "solutions digitales", "transformation numérique"],
  authors: [{ name: "HRak Tech" }],
  creator: "HRak Tech",
  publisher: "HRak Tech",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://hraktech.com"),
  icons: {
    icon: "/logo-with-bg.png",
    shortcut: "/logo-with-bg.png",
    apple: "/logo-with-bg.png",
  },
  openGraph: {
    title: "HRak Tech - Solutions Digitales Innovantes",
    description: "Transformez vos idées en solutions digitales performantes avec HRak Tech. Développement web, mobile et ERP.",
    url: "https://hraktech.com",
    siteName: "HRak Tech",
    images: [
      {
        url: "/logo-with-bg.png",
        width: 1200,
        height: 630,
        alt: "HRak Tech - Solutions Digitales Innovantes",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HRak Tech - Solutions Digitales Innovantes",
    description: "Transformez vos idées en solutions digitales performantes avec HRak Tech. Développement web, mobile et ERP.",
    creator: "@hraktech",
    images: ["/logo-with-bg.png"],
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
