import React, { useState } from 'react';
import { FiCalendar, FiUser, FiMessageSquare, FiArrowRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const posts = [
  {
    id: 1,
    title: 'The Future of Sustainable Agriculture',
    excerpt: 'Exploring innovative farming techniques that are shaping the future of sustainable agriculture...',
    date: 'October 15, 2025',
    author: 'Admin',
    comments: 3,
    image: '/blog1.jpg',
    category: 'Farming',
    tags: ['Agriculture', 'Sustainability']
  },
  {
    id: 2,
    title: 'Organic Farming Benefits',
    excerpt: 'Discover the numerous benefits of organic farming for both consumers and the environment...',
    date: 'October 10, 2025',
    author: 'Admin',
    comments: 5,
    image: '/blog2.jpg',
    category: 'Organic',
    tags: ['Organic', 'Health']
  },
  {
    id: 3,
    title: 'Seasonal Harvest Guide',
    excerpt: 'A comprehensive guide to what to plant and harvest each season for optimal yield...',
    date: 'October 5, 2025',
    author: 'Admin',
    comments: 2,
    image: '/blog3.jpg',
    category: 'Gardening',
    tags: ['Seasons', 'Harvest']
  },
  {
    id: 4,
    title: 'Urban Farming Solutions',
    excerpt: 'How to start and maintain a successful urban farm in limited spaces...',
    date: 'September 28, 2025',
    author: 'Admin',
    comments: 7,
    image: '/about2.jpg',
    category: 'Urban Farming',
    tags: ['Urban', 'DIY']
  },
  {
    id: 5,
    title: 'Natural Pest Control Methods',
    excerpt: 'Effective and eco-friendly ways to protect your crops from pests...',
    date: 'September 20, 2025',
    author: 'Admin',
    comments: 4,
    image: '/about3.jpg',
    category: 'Pest Control',
    tags: ['Pests', 'Organic']
  },
  {
    id: 6,
    title: 'Soil Health 101',
    excerpt: 'Understanding and improving your soil health for better crop production...',
    date: 'September 15, 2025',
    author: 'Admin',
    comments: 1,
    image: '/about4.jpg',
    category: 'Soil',
    tags: ['Soil', 'Fertilizers']
  },
  {
    id: 7,
    title: 'Agricultural Infrastructure in Rural Areas',
    excerpt: 'Key infrastructure improvements that boost rural farming productivity and logistics...',
    date: 'September 10, 2025',
    author: 'Admin',
    comments: 6,
    image: '/gallery3.jpg',
    category: 'Farming Tips',
    tags: ['Infrastructure', 'Rural']
  },
  {
    id: 8,
    title: 'Are You Prepared for the Upcoming Season?',
    excerpt: 'Checklist and planning strategies for a smooth and successful growing season...',
    date: 'September 03, 2025',
    author: 'Admin',
    comments: 2,
    image: '/gallery2.jpg',
    category: 'Seasonal',
    tags: ['Planning', 'Checklist']
  },
  {
    id: 9,
    title: 'A Beginner’s Guide for Managing a Successful Farm',
    excerpt: 'Essential tips for new farmers to manage operations, budgets, and crop cycles...',
    date: 'August 28, 2025',
    author: 'Admin',
    comments: 9,
    image: '/about4.jpg',
    category: 'Beginner',
    tags: ['Guide', 'Basics']
  }
];

export default function BlogGrid() {
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
    <div>
      {/* Navigation buttons */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-green-900">Latest Blog Posts</h2>
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrevious}
            className="h-9 w-9 grid place-items-center rounded-lg border border-neutral-300 text-neutral-600 hover:bg-white transition-all duration-300 hover:scale-110"
            aria-label="Previous posts"
          >
            <FiChevronLeft />
          </button>
          <button
            onClick={handleNext}
            className="h-9 w-9 grid place-items-center rounded-lg border border-neutral-300 text-neutral-600 hover:bg-white transition-all duration-300 hover:scale-110"
            aria-label="Next posts"
          >
            <FiChevronRight />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.slice(currentIndex, currentIndex + 3).map((post, index) => (
          <article
            key={post.id}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-up"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="relative">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-56 object-cover"
              />
              <div className="absolute left-4 top-8 sm:top-10 z-10">
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full shadow-sm">
                  {post.category}
                </span>
              </div>

              <a
                href={`/blog`}
                className="absolute -bottom-5 right-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-300 text-green-900 shadow ring-4 ring-white hover:bg-amber-200"
                aria-label="Open post"
              >
                <FiArrowRight />
              </a>
            </div>
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 space-x-4 mb-3">
                <span className="flex items-center">
                  <FiCalendar className="mr-1" />
                  {post.date}
                </span>
                <span className="flex items-center">
                  <FiUser className="mr-1" />
                  By {post.author}
                </span>
                <span className="flex items-center">
                  <FiMessageSquare className="mr-1" />
                  {post.comments} Comments
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-green-600 transition-colors">
                <a href={`/blog`}>
                  {post.title}
                </a>
              </h3>
              <p className="text-gray-600 mb-4">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <a
                  href={`/blog`}
                  className="text-green-600 hover:text-green-800 font-medium inline-flex items-center"
                >
                  Read More
                  <FiArrowRight className="ml-1" />
                </a>
                <div className="flex space-x-2">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination dots */}
      <div className="mt-10 flex justify-center items-center gap-2">
        {Array.from({ length: Math.ceil(posts.length / 3) }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index * 3)}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${index === Math.floor(currentIndex / 3) ? 'bg-green-600 w-8' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            aria-label={`Go to post group ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
