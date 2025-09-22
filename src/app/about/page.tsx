import { Code, TestTube, FileText, GitBranch, Zap, Users } from 'lucide-react'

export default function AboutPage() {
  const features = [
    {
      icon: Code,
      title: 'AI Code Generation',
      description: 'Leverage AI to generate components, API routes, and database models with context-aware assistance.',
    },
    {
      icon: TestTube,
      title: 'Automated Testing',
      description: 'AI generates comprehensive test suites automatically, improving code quality and coverage.',
    },
    {
      icon: FileText,
      title: 'Smart Documentation',
      description: 'Auto-generate documentation, comments, and technical specifications with AI assistance.',
    },
    {
      icon: GitBranch,
      title: 'Version Control',
      description: 'Seamless Git integration with AI-powered commit messages and code review suggestions.',
    },
    {
      icon: Zap,
      title: 'Real-time Collaboration',
      description: 'Work together with your team in real-time with live cursors and instant updates.',
    },
    {
      icon: Users,
      title: 'Team Management',
      description: 'Manage team permissions, roles, and access levels for effective collaboration.',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Blogify
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A modern blogging platform built with AI-assisted development, featuring 
            real-time collaboration, Markdown support, and a beautiful user interface 
            that empowers developers and content creators alike.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Mission</h2>
          <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto leading-relaxed">
            To revolutionize the way developers build and maintain blogging platforms by 
            integrating AI-assisted development tools that accelerate feature creation, 
            improve code quality, and enable seamless real-time collaboration. We believe 
            that the future of development lies in the synergy between human creativity 
            and AI capabilities.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card hover:shadow-lg transition-shadow duration-200">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
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
        </div>

        {/* Technology Stack */}
        <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Technology Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Frontend</h3>
              <ul className="text-gray-600 space-y-1">
                <li>Next.js 14</li>
                <li>React 18</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Backend</h3>
              <ul className="text-gray-600 space-y-1">
                <li>Firebase Firestore</li>
                <li>Firebase Auth</li>
                <li>Firebase Storage</li>
                <li>Real-time Updates</li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Development</h3>
              <ul className="text-gray-600 space-y-1">
                <li>Jest Testing</li>
                <li>ESLint</li>
                <li>TypeScript</li>
                <li>Git Integration</li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Tools</h3>
              <ul className="text-gray-600 space-y-1">
                <li>Cursor AI</li>
                <li>OpenAI GPT-4</li>
                <li>Context-Aware Prompts</li>
                <li>Automated Testing</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Built with AI Assistance</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            This project was developed using AI-assisted development tools, demonstrating 
            the power of human-AI collaboration in modern software development. Every 
            component, API endpoint, and test suite was created with the help of AI tools 
            that understood the project context and maintained consistency throughout.
          </p>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Development Process</h3>
            <ul className="text-gray-600 space-y-2 text-left">
              <li>• AI-generated components with TypeScript types</li>
              <li>• Automated test suite creation</li>
              <li>• Context-aware code generation</li>
              <li>• Smart documentation and comments</li>
              <li>• Iterative refinement with AI feedback</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}


