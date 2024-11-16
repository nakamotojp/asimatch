export function Pricing() {
  return (
    <section id="pricing" className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">価格表</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { plan: "ベーシック", price: "¥10,000/月", features: ["機能1", "機能2", "機能3"] },
            { plan: "スタンダード", price: "¥20,000/月", features: ["機能1", "機能2", "機能3", "機能4"] },
            { plan: "プレミアム", price: "¥30,000/月", features: ["機能1", "機能2", "機能3", "機能4", "機能5"] },
          ].map((tier, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{tier.plan}</h3>
              <p className="text-2xl font-bold text-gray-900 mb-4">{tier.price}</p>
              <ul className="space-y-2">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
