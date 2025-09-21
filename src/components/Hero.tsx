import Link from 'next/link'
import { ArrowRight, Sparkles, Users, Zap } from 'lucide-react'

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center space-x-2 bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              <span>AI-Powered Development</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Write, Share, and
            <span className="text-primary-600"> Collaborate</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Experience the future of blogging with AI-assisted development, 
            real-time collaboration, and seamless content creation. 
            Built for developers, by developers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/create"
              className="inline-flex items-center justify-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200"
            >
              <span>Start Writing</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/posts"
              className="inline-flex items-center justify-center space-x-2 bg-white hover:bg-gray-50 text-gray-900 font-semibold py-4 px-8 rounded-lg border border-gray-300 transition-colors duration-200"
            >
              <span>Explore Posts</span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                AI-Assisted Development
              </h3>
              <p className="text-gray-600">
                Leverage AI tools for faster code generation, testing, and documentation
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Real-time Collaboration
              </h3>
              <p className="text-gray-600">
                Work together with your team in real-time on blog posts and content
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Modern Tech Stack
              </h3>
              <p className="text-gray-600">
                Built with Next.js, Firebase, and cutting-edge web technologies
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
