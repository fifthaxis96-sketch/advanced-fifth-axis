import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Advanced Fifth Axis",
    short_name: "Advanced Fifth Axis",
    description: "Foundation drilling tools and custom fabricated components in Saudi Arabia.",
    start_url: "/",
    display: "standalone",
    background_color: "#f6f8fb",
    theme_color: "#0b376d"
  };
}