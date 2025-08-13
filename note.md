<!-- // Folder Structure -->
<pre>
project/
  src/
    app/        ← App Router pages/layout
    ui/         ← Component UI dùng chung
    lib/        ← Hàm tiện ích, xử lý logic
    styles/     ← CSS/Tailwind config
  public/       ← Ảnh, font, file tĩnh
  jsconfig.json


src="{post.image}" => src = {post.image}

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
