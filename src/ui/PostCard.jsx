export default function PostCard({ post }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
      <a href={post.link}>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover"
        />
      </a>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
        <p className="text-gray-600 mb-4">{post.description}</p>
        <a href={post.link} className="text-blue-500 hover:underline">
          Đọc tiếp →
        </a>
      </div>
    </div>
  );
}
