export default function CardGrid({ title, description, cards }) {
  return (
    <section className="py-12 sm:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">{description}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              {card.icon && (
                <div 
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: card.iconBg || '#f3f4f6' }}
                >
                  {card.icon}
                </div>
              )}
              <h3 className="font-semibold text-lg sm:text-xl mb-2">{card.title}</h3>
              <p className="text-gray-600 text-sm">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
