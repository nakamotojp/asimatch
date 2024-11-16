export function CoverImage() {
  return (
    <div className="relative bg-gray-900 h-96">
      <img
        src="/placeholder.svg?height=384&width=1920"
        alt="Asimatchのカバー画像"
        className="w-full h-full object-cover opacity-50"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Asimatchへようこそ</h1>
          <p className="text-xl text-white">革新的なマッチングサービスを提供します</p>
        </div>
      </div>
    </div>
  )
}
