import React from 'react'

export default function Hero() {
  return (
    <section className="pt-8">
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl font-bold">PRERIT THAKUR</h1>
        <p className="mt-3 text-xl text-gray-600">Frontend / Full-Stack Developer (Fresher)</p>
        <div className="mt-6 space-x-4">
          <a href="mailto:preritthakur2800@gmail.com" className="inline-block bg-indigo-600 text-white px-4 py-2 rounded">Email</a>
          <a href="https://Prerit5241.github.io" target="_blank" rel="noreferrer" className="inline-block border px-4 py-2 rounded">Portfolio</a>
          <a href="https://github.com/Prerit5241" target="_blank" rel="noreferrer" className="inline-block border px-4 py-2 rounded">GitHub</a>
        </div>
      </div>
    </section>
  )
}
