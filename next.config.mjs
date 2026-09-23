/** @type {import('next').NextConfig} */
const isStaticExport = process.env.EXPORT_STATIC === "true";

const nextConfig = {
  // Portabilidade total:
  // - Vercel / Docker / Node: roda como servidor híbrido de alta performance.
  // - Hostinger cPanel / Apache / Nginx: execute EXPORT_STATIC=true npm run build e suba a pasta 'out/' diretamente.
  output: isStaticExport ? "export" : undefined,
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  ...(isStaticExport
    ? {}
    : {
        async redirects() {
          return [
            {
              source: "/index.html",
              destination: "/",
              permanent: true,
            },
            {
              source: "/produto.html",
              destination: "/#colecao",
              permanent: true,
            },
          ];
        },
      }),
};

export default nextConfig;
