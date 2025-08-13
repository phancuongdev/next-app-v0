/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      // nếu bạn cũng dùng các nguồn khác, thêm vào đây:
      // { protocol: 'https', hostname: 'picsum.photos' },
      // { protocol: 'https', hostname: 'source.unsplash.com' },
    ],
    // Hoặc cách cũ:
    // domains: ['images.unsplash.com', 'picsum.photos', 'source.unsplash.com'],
  },
};

export default nextConfig;
