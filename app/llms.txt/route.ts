import { company, products, collections } from "@/lib/site";
import { guides } from "@/lib/guides";

export const dynamic = "force-static";

// Optional directory for clients that support llms.txt; not an indexing protocol.
export function GET() {
  const base = "https://advanced-fifthaxis.com";
  const link = (name: string, path: string, description: string) =>
    `- [${name}](${base}${path}): ${description}`;
  const text = [
    `# ${company.name}`,
    "",
    "> Foundation drilling tools, casing, wear parts, Kelly systems and custom steel fabrication in Jeddah, Saudi Arabia.",
    "",
    "The website is available in English and Arabic. Product pages provide inquiry information; prices, stock, dimensions and rig compatibility must be confirmed with the company before ordering.",
    `Contact: ${company.email}; ${company.phone}. Address: ${company.address}.`,
    "",
    "## Company and inquiries",
    link("English home", "/", "Company overview and product families."),
    link("Arabic home", "/ar", "معدات وأدوات حفر الأساسات في السعودية."),
    link("About", "/about", "Company background."),
    link("Capabilities", "/capabilities", "Manufacturing and repair capabilities."),
    link("Contact", "/contact", "Request a quotation and confirm specifications."),
    link("FAQ", "/faq", "Ordering and project information."),
    link("Sitemap", "/sitemap.xml", "Complete English and Arabic page directory."),
    "",
    "## Collections",
    ...collections.map(c => link(c.name, `/collections/${c.slug}`, c.description)),
    "",
    "## Products",
    ...products.map(p => link(p.name, `/products/${p.slug}`, p.description)),
    "",
    "## Technical guides",
    ...guides.map(g => link(g.en.title, `/guides/${g.slug}`, g.en.description)),
    "",
    "## Arabic pages",
    ...collections.map(c => link(c.nameAr, `/ar/collections/${c.slug}`, c.descriptionAr)),
    ...products.map(p => link(p.nameAr, `/ar/products/${p.slug}`, p.descriptionAr)),
    ...guides.map(g => link(g.ar.title, `/ar/guides/${g.slug}`, g.ar.description)),
    "",
  ].join("\n");
  return new Response(text, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
