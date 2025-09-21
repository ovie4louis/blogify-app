import { BlogList } from '@/components/BlogList'
import { Hero } from '@/components/Hero'
import { Features } from '@/components/Features'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Latest Blog Posts
          </h2>
          <p className="text-lg text-gray-600">
            Discover insights, tutorials, and stories from our community
          </p>
        </div>
        <BlogList />
      </div>
    </div>
  )
}
