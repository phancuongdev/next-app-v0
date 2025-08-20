import Link from "next/link";

export default function PostCard({ post }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
      <Link href={post.link}>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="p-4">
        <Link className="text-xl font-semibold mb-2">{post.title}</Link>
        <p className="text-gray-600 mb-4">{post.description}</p>
        <Link href={post.link} className="text-blue-500 hover:underline">
          Đọc tiếp →
        </Link>
        {/* <a href={post.link} className="text-blue-500 hover:underline">
          Đọc tiếp →
        </a> */}
      </div>
    </div>
  );
}
