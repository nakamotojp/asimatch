export function CompanyInfo() {
  return (
    <section id="company" className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">会社概要</h2>
        <div className="bg-gray-50 rounded-lg shadow-md p-6">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">会社名</dt>
              <dd className="mt-1 text-sm text-gray-900">株式会社Asimatch</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">設立</dt>
              <dd className="mt-1 text-sm text-gray-900">20XX年X月X日</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">代表者</dt>
              <dd className="mt-1 text-sm text-gray-900">代表取締役社長 山田 太郎</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">所在地</dt>
              <dd className="mt-1 text-sm text-gray-900">東京都渋谷区〇〇町1-2-3</dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-sm font-medium text-gray-500">事業内容</dt>
              <dd className="mt-1 text-sm text-gray-900">マッチングサービスの開発・運営</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
