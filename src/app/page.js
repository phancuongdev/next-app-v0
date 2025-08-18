import Image from "next/image";
import PostCard from "@/ui/PostCard";
import { posts } from "@/data/posts";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <section className="bg-gray-900 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Chào mừng đến với My Blog</h1>
        <p className="text-lg mb-6">Chia sẻ kiến thức lập trình & công nghệ</p>
        <Link
          href="#"
          className="bg-blue-500 px-6 py-2 rounded hover:bg-blue-600 transition"
        >
          Xem bài viết mới nhất
        </Link>
      </section>

      <main className="flex-grow">
        <section className="max-w-6xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
          {/* <PostCard />
          <PostCard />
          <PostCard /> */}
        </section>
      </main>
    </>
  );
}
