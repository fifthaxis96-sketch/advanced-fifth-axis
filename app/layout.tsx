import "./globals.css";
import type { Metadata, Viewport } from "next";
import { company } from "@/lib/site";

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#0b376d" };

export const metadata: Metadata = {
  metadataBase: new URL("https://advanced-fifthaxis.com"),
  title: { default: "Advanced Fifth Axis | Foundation Drilling Tools Saudi Arabia", template: "%s | Advanced Fifth Axis" },
  description: "Foundation drilling tools, drilling buckets, augers, core barrels, casing, Kelly systems, wear parts and custom fabrication in Jeddah, Saudi Arabia.",
  keywords: ["foundation drilling tools Saudi Arabia","drilling bucket Jeddah","rock auger Saudi Arabia","piling tools","core barrel","casing","Kelly box","drilling accessories"],
  alternates: { canonical: "/", languages: { en: "/", ar: "/ar" } },
  openGraph: { type: "website", locale: "en_SA", alternateLocale: ["ar_SA"], siteName: "Advanced Fifth Axis", title: "Advanced Fifth Axis | Foundation Drilling Tools Saudi Arabia", description: "Foundation drilling tools and custom fabricated components for piling contractors in Saudi Arabia.", url: "/" },
  twitter: { card: "summary_large_image", title: "Advanced Fifth Axis", description: "Foundation drilling tools and fabricated components in Saudi Arabia." },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
};

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  url: "https://advanced-fifthaxis.com",
  logo: "https://advanced-fifthaxis.com/advanced-fifth-axis-logo.webp",
  telephone: company.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Al Muftakira Street 4474, Jeddah Industrial",
    addressLocality: "Jeddah",
    addressCountry: "SA"
  },
  vatID: company.vat
};

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: company.name,
  url: "https://advanced-fifthaxis.com",
  inLanguage: ["en-SA","ar-SA"]
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en"><body><a className="skipLink" href="#main-content">Skip to content</a>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(organization)}}/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(website)}}/>
    {children}
  </body></html>;
}