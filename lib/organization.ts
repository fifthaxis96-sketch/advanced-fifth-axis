import { company } from "@/lib/site";

export const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://advanced-fifthaxis.com/#organization",
  name: company.name,
  alternateName: company.nameAr,
  url: "https://advanced-fifthaxis.com",
  logo: "https://advanced-fifthaxis.com/advanced-fifth-axis-logo.webp",
  telephone: company.phone,
  email: company.email,
  areaServed: { "@type": "Country", name: "Saudi Arabia" },
  identifier: { "@type": "PropertyValue", propertyID: "Commercial registration", value: company.cr },
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
  "@id": "https://advanced-fifthaxis.com/#website",
  name: company.name,
  url: "https://advanced-fifthaxis.com",
  inLanguage: ["en-SA","ar-SA"],
  publisher: { "@id": "https://advanced-fifthaxis.com/#organization" }
};

