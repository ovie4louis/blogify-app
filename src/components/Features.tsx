import { Code, TestTube, FileText, GitBranch, Zap, Users } from 'lucide-react'

export function Features() {
  const features = [
    {
      icon: Code,
      title: 'AI Code Generation',
      description: 'Generate components, API routes, and database models with AI assistance. Reduce boilerplate and focus on core logic.',
      color: 'bg-blue-500',
    },
    {
      icon: TestTube,
      title: 'Automated Testing',
      description: 'AI generates comprehensive unit and integration tests automatically. Improve code quality and reduce manual testing effort.',
      color: 'bg-green-500',
    },
    {
      icon: FileText,
      title: 'Smart Documentation',
      description: 'Auto-generate docstrings, README files, and technical documentation. Keep your codebase well-documented with minimal effort.',
      color: 'bg-purple-500',
    },
    {
      icon: GitBranch,
      title: 'Version Control Integration',
      description: 'Seamless Git integration with AI-powered commit messages and code review suggestions.',
      color: 'bg-orange-500',
    },
    {
      icon: Zap,
      title: 'Real-time Collaboration',
      description: 'Work together with your team in real-time. See changes as they happen with live cursors and instant updates.',
      color: 'bg-red-500',
    },
    {
      icon: Users,
      title: 'Team Management',
      description: 'Manage team permissions, roles, and access levels. Collaborate effectively with built-in project management tools.',
      color: 'bg-indigo-500',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Modern Development
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built with AI-first principles, Blogify combines cutting-edge technology 
            with intuitive design to accelerate your development workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card hover:shadow-lg transition-shadow duration-200">
              <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Development Process?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Join thousands of developers who are already using AI-assisted development 
              to build better software faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/auth/signup"
                className="btn-primary inline-flex items-center justify-center"
              >
                Get Started Free
              </a>
              <a
                href="/docs"
                className="btn-secondary inline-flex items-center justify-center"
              >
                View Documentation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
