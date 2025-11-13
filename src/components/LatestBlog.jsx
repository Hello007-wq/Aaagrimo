import React, { useState } from 'react'
import { FiChevronLeft, FiChevronRight, FiArrowUpRight } from 'react-icons/fi'

const posts = [
  { tag: 'Food Crops', date: 'March 20, 2024', author: 'Admin', title: 'What technology is used in vertical farming?', img: '/blog1.jpg' },
  { tag: 'Organic Farm', date: 'March 21, 2024', author: 'Admin', title: 'Which type of farming is more prevalent today?', img: '/blog2.jpg' },
  { tag: 'Farming Tips', date: 'March 23, 2024', author: 'Admin', title: 'The Farmers Sentiment Darkens Hopes Fade', img: '/blog3.jpg' },
  { tag: 'Innovation', date: 'April 10, 2024', author: 'Editor', title: 'Innovative Solutions in Modern Agriculture', img: '/blog1.jpg' },
  { tag: 'Sustainability', date: 'April 15, 2024', author: 'Editor', title: 'Sustainable Practices for Future Farming', img: '/blog2.jpg' },
  { tag: 'Technology', date: 'April 20, 2024', author: 'Editor', title: 'How AI is Transforming Agriculture', img: '/blog3.jpg' },
];

export default function LatestBlog() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = () => {
    setCurrentIndex((prev) => {
      const maxIndex = Math.max(0, posts.length - 3)
      return prev === 0 ? maxIndex : prev - 3
    })
  }

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const maxIndex = Math.max(0, posts.length - 3)
      return prev >= maxIndex ? 0 : prev + 3
    })
  }

  return (
    <section className="bg-[#F6F7EE] py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="animate-slide-in-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-white text-green-900 px-3 py-1 text-[11px] font-semibold border border-green-100">
              <span className="inline-block h-2 w-2 rounded-full bg-amber-400 animate-pulse-slow" aria-hidden></span>
              Latest Blog
            </div>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-green-900">Latest posts & articles</h2>
          </div>
          <div className="hidden md:flex items-center gap-2 animate-slide-in-right">
            <button
              onClick={handlePrevious}
              className="h-9 w-9 grid place-items-center rounded-lg border border-neutral-300 text-neutral-600 hover:bg-white transition-all duration-300 hover:scale-110"
              aria-label="Previous post"
            >
              <FiChevronLeft />
            </button>
            <button
              onClick={handleNext}
              className="h-9 w-9 grid place-items-center rounded-lg border border-neutral-300 text-neutral-600 hover:bg-white transition-all duration-300 hover:scale-110"
              aria-label="Next post"
            >
              <FiChevronRight />
            </button>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.slice(currentIndex, currentIndex + 3).map((p, index) => (
            <article
              key={p.title}
              className="rounded-[18px] overflow-hidden bg-white shadow-sm group hover:shadow-xl hover:-translate-y-2 transition-all duration-500 animate-fade-up cursor-pointer"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img src={p.img} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-white/90 text-green-900 px-3 py-1 text-[11px] font-semibold backdrop-blur-sm transition-all duration-300 group-hover:bg-amber-300 group-hover:text-white">
                  {p.tag}
                </div>
                <div className="absolute bottom-3 right-3 h-9 w-9 rounded-full bg-amber-400 text-white grid place-items-center transition-all duration-500 group-hover:scale-125 group-hover:rotate-45">
                  <FiArrowUpRight size={16} />
                </div>
              </div>
              <div className="p-5 text-green-900">
                <div className="mt-2 text-neutral-500 text-xs">{p.date} • {p.author}</div>
                <h3 className="mt-2 font-semibold transition-colors duration-300 group-hover:text-amber-600">{p.title}</h3>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 flex justify-center items-center gap-2">
          {Array.from({ length: Math.ceil(posts.length / 3) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * 3)}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${index === Math.floor(currentIndex / 3) ? 'bg-green-900 w-8' : 'bg-green-900/30 hover:bg-green-900/50'
                }`}
              aria-label={`Go to post group ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
