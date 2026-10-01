import { company } from "@/lib/site";

export const organization = {
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

export const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: company.name,
  url: "https://advanced-fifthaxis.com",
  inLanguage: ["en-SA","ar-SA"]
};

