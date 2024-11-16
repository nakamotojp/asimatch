export function Services() {
  return (
    <section id="services" className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">サービス一覧</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "サービス1", description: "サービス1の詳細説明" },
            { title: "サービス2", description: "サービス2の詳細説明" },
            { title: "サービス3", description: "サービス3の詳細説明" },
          ].map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
