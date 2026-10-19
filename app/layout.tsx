import type { Metadata } from "next";
import "./globals.css";

// Change this if your final domain is different.
const siteUrl = "https://takegoodcareconsulting.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: "Take Good Care Consulting | Strategic Support for Lasting Change",

  description:
    "Relationship-based research, strategy, communications and storytelling for non-profit, Indigenous and community-led organizations across Canada.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "/",
    siteName: "Take Good Care Consulting",
    title: "Strategic support for lasting change",
    description:
      "Research, strategy, communications and storytelling. Helping communities and organizations build capacity and bring their vision to life.",
    images: [
      {
        url: "/images/social-share.jpg",
        width: 1200,
        height: 630,
        alt: "Take Good Care Consulting — Strategic support for lasting change",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Strategic support for lasting change",
    description:
      "Relationship-based consulting for non-profit, Indigenous and community-led organizations across Canada.",
    images: ["/images/social-share.jpg"],
  },
};