/** @type {import('next').NextConfig} */
const nextConfig = {
  // Portabilidade total:
  // - Vercel / Docker / Node: roda como servidor híbrido de alta performance.
  // - Hostinger cPanel / Apache / Nginx: execute EXPORT_STATIC=true npm run build e suba a pasta 'out/' diretamente.
  output: process.env.EXPORT_STATIC === "true" ? "export" : undefined,
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
