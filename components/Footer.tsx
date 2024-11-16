export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">Asimatch</h2>
            <p className="mt-2">革新的なマッチングサービス</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">お問い合わせ</h3>
            <p>Email: info@asimatch.com</p>
            <p>電話: 03-1234-5678</p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Asimatch. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
