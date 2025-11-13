import React, { useState } from 'react'
import { FiChevronLeft, FiChevronRight, FiArrowUpRight } from 'react-icons/fi'

const services = [
  {
    img: '/service1.png',
    tag: 'Fertilizer',
    title: 'Harvest Concepts',
    desc: 'Farming and animal husbandry and discuss with farmers and scientists.'
  },
  {
    img: '/service2.png',
    tag: 'Fruits',
    title: 'Farming Products',
    desc: 'Farming and animal husbandry and discuss with farmers and scientists.'
  },
  {
    img: '/service3.png',
    tag: 'Fertilizer',
    title: 'Soil Fertilization',
    desc: 'Farming and animal husbandry and discuss with farmers and scientists.'
  },
  {
    img: '/service1.png',
    tag: 'Organic',
    title: 'Eco-Friendly Practices',
    desc: 'Promoting sustainable and eco-friendly farming methods.'
  },
  {
    img: '/service2.png',
    tag: 'Vegetables',
    title: 'Fresh Produce',
    desc: 'Delivering fresh and organic vegetables to your doorstep.'
  },
  {
    img: '/service3.png',
    tag: 'Growth',
    title: 'Advanced Techniques',
    desc: 'Utilizing modern techniques for better yield and quality.'
  },
]

export default function ServicesShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="relative bg-[#4E7D4F] text-white py-14 md:py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">


        <div className="flex items-center justify-between">
          <div className="animate-slide-in-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur-sm">
              Our Services
            </div>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold">Best Agriculture Services</h2>
          </div>
          <div className="hidden md:flex items-center gap-2 animate-slide-in-right">
            <button
              onClick={handlePrevious}
              className="h-9 w-9 grid place-items-center rounded-lg border border-white/30 hover:bg-white/10 transition-all duration-300 hover:scale-110"
              aria-label="Previous service"
            >
              <FiChevronLeft />
            </button>
            <button
              onClick={handleNext}
              className="h-9 w-9 grid place-items-center rounded-lg border border-white/30 hover:bg-white/10 transition-all duration-300 hover:scale-110"
              aria-label="Next service"
            >
              <FiChevronRight />
            </button>
          </div>
        </div>



        <div className="mt-8 flex justify-center">
          <article
            key={services[currentIndex].title}
            className="group relative rounded-[22px] bg-white text-green-900 shadow-sm overflow-hidden pb-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:ring-2 hover:ring-amber-200/70 animate-fade-up cursor-pointer max-w-md w-full"
          >
            <div className="h-60 w-full overflow-hidden">
              <img src={services[currentIndex].img} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2" />
            </div>
            <div className="p-5">
              <span className="text-[11px] uppercase tracking-wide text-amber-600">• {services[currentIndex].tag}</span>
              <h3 className="mt-1 text-lg font-semibold">{services[currentIndex].title}</h3>
              <p className="mt-1 text-sm text-neutral-600">{services[currentIndex].desc}</p>
            </div>

            <div className="absolute bottom-3 right-4 h-9 w-9 rounded-full bg-amber-400 text-white grid place-items-center transition-all duration-500 group-hover:scale-125 group-hover:rotate-45 group-hover:bg-amber-300 z-20">
              <FiArrowUpRight size={16} className="transition-transform duration-300" />
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-8 bg-white z-0 pointer-events-none" />
          </article>
        </div>

        <div className="mt-6 flex justify-center items-center gap-2">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-white w-8' : 'bg-white/30 hover:bg-white/50'
                }`}
              aria-label={`Go to service ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
