export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6 mt-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-gray-600">
          © 2025 Phan Văn Cương. All rights reserved.
        </p>
        <div className="space-x-4 mt-4 sm:mt-0">
          <a href="#" className="text-gray-500 hover:text-gray-800">
            Facebook
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-800">
            Twitter
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-800">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
