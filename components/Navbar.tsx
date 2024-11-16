import Link from 'next/link'

export function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <a href="#" className="flex items-center py-4 px-2">
                <span className="font-semibold text-gray-500 text-lg">Asimatch</span>
              </a>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <a href="#services" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">サービス</a>
            <a href="#pricing" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">価格</a>
            <a href="#company" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">会社概要</a>
            <a href="#contact" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">お問い合わせ</a>
          </div>
        </div>
      </div>
    </nav>
  )
}
