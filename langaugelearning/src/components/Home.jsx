import React from 'react'

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 text-gray-800">
      {/* Hero Section */}
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold mb-4">Welcome to LangoLearn</h1>
        <p className="text-lg mb-6">Master new languages with interactive lessons and quizzes!</p>
        <a href="/lessons" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">Start Learning</a>
      </div>

      {/* Featured Languages */}
      <div className="w-full max-w-4xl mt-10">
        <h2 className="text-2xl font-semibold text-center mb-6">Popular Languages</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-4 bg-white shadow rounded-lg text-center">🇪🇸 Spanish</div>
          <div className="p-4 bg-white shadow rounded-lg text-center">🇫🇷 French</div>
          <div className="p-4 bg-white shadow rounded-lg text-center">🇩🇪 German</div>
          <div className="p-4 bg-white shadow rounded-lg text-center">🇯🇵 Japanese</div>
        </div>
      </div>

      {/* Testimonials / Benefits */}
      <div className="w-full max-w-3xl mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Why Choose LangoLearn?</h2>
        <ul className="list-disc list-inside text-lg">
          <li>✅ Interactive and fun lessons</li>
          <li>✅ Personalized learning experience</li>
          <li>✅ Track progress and earn achievements</li>
          <li>✅ Access from any device</li>
        </ul>
      </div>
    </div>
  )
}

export default Home