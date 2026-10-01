import { withSEO } from "@/lib/seo";
import "../globals.css";
import type { Metadata, Viewport } from "next";
import { organization, website } from "@/lib/organization";

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#0b376d" };

export const metadata: Metadata = withSEO("/", {
  metadataBase: new URL("https://advanced-fifthaxis.com"),
  title: { default: "Advanced Fifth Axis | Foundation Drilling Tools Saudi Arabia", template: "%s | Advanced Fifth Axis" },
  description: "Foundation drilling tools, drilling buckets, augers, core barrels, casing, Kelly systems, wear parts and custom fabrication in Jeddah, Saudi Arabia.",
  applicationName: "Advanced Fifth Axis",
  creator: "Advanced Fifth Axis",
  publisher: "Advanced Fifth Axis",
  category: "Industrial Manufacturing",
  icons: { icon: "/favicon.svg" },
  keywords: ["foundation drilling tools Saudi Arabia","drilling bucket Jeddah","rock auger Saudi Arabia","piling tools","core barrel","casing","Kelly box","drilling accessories"],
  alternates: { canonical: "/", languages: { en: "/", ar: "/ar" } },
  openGraph: { type: "website", locale: "en_SA", alternateLocale: ["ar_SA"], siteName: "Advanced Fifth Axis", title: "Advanced Fifth Axis | Foundation Drilling Tools Saudi Arabia", description: "Foundation drilling tools and custom fabricated components for piling contractors in Saudi Arabia.", url: "/", images: [{ url: "/home/foundation-drilling-showcase.webp", alt: "Advanced Fifth Axis foundation drilling equipment" }] },
  twitter: { card: "summary_large_image", title: "Advanced Fifth Axis", description: "Foundation drilling tools and fabricated components in Saudi Arabia.", images: ["/home/foundation-drilling-showcase.webp"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
});

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en"><body><a className="skipLink" href="#main-content">Skip to content</a>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(organization)}}/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(website)}}/>
    {children}
  </body></html>;
}