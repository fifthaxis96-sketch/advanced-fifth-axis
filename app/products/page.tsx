import type { Metadata } from "next";
import { ProductIndex } from "@/components/LocalizedSite";
export const metadata: Metadata = {
  title: "Foundation Drilling Products Saudi Arabia",
  description: "Browse foundation drilling tools, casing, Kelly systems, cutting and wear parts, and custom fabricated components for projects in Saudi Arabia.",
  alternates: { canonical: "https://advanced-fifthaxis.com/products", languages: { en: "https://advanced-fifthaxis.com/products", ar: "https://advanced-fifthaxis.com/ar/products" } },
  openGraph: { title: "Foundation Drilling Products Saudi Arabia", description: "Foundation drilling tools and fabricated components supplied from Jeddah, Saudi Arabia.", url: "https://advanced-fifthaxis.com/products", type: "website" }
};
export default function ProductsPage(){return <ProductIndex lang="en"/>;}