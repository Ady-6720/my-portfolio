/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
   distDir: 'dist',
   eslint: {
    ignoreDuringBuilds: true,
  },
}

module.export = {
  output: "export",
  // ...
  distDir: 'dist',
}