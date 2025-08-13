import { posts } from "@/data/posts";
import Image from "next/image";

export default function Page({ params }) {
  const { id } = params;
  const post = posts.find((p) => p.id.toString() === id);

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold">Bài viết không tồn tại</h1>
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto p-6">
      {/* Ảnh */}
      <div className="relative w-full h-64 mb-6">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      {/* Tiêu đề */}
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

      {/* Mô tả */}
      <p className="text-gray-700 leading-relaxed">{post.description}</p>

      {/* Back */}
      <div className="mt-8">
        <a
          href="/"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition"
        >
          ← Quay lại
        </a>
      </div>
    </article>
  );
}
