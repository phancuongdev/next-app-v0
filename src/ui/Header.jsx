export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-gray-800">My Blog</h1>

        {/* Navigation */}
        <nav className="space-x-6">
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
            Trang chủ
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
            Bài viết
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
            Giới thiệu
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
            Liên hệ
          </a>
        </nav>
      </div>
    </header>
  );
}
