import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export statique pour Cloudflare Pages (previews)
  // Sur Vercel, output: 'export' n'est pas utilisé (Vercel gère nativement Next.js)
  ...(process.env.NEXT_PUBLIC_ENV === "preview" ? { output: "export" } : {}),
};

export default nextConfig;
