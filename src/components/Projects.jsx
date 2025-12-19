import React from 'react'

const projects = [
  {
    title: 'Responsive React Interfaces',
    description: 'Developed responsive web interfaces using React.js and Next.js',
  },
  {
    title: 'Animations & UI',
    description: 'Implemented animations and smooth UI interactions with Framer Motion',
  },
  {
    title: 'Backend Services',
    description: 'Built basic backend services using Node.js and used MongoDB for data storage',
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="text-2xl font-semibold">Projects</h2>
      <div className="mt-4 space-y-4">
        {projects.map((p) => (
          <div key={p.title} className="p-4 border rounded">
            <h4 className="font-semibold">{p.title}</h4>
            <p className="text-gray-700">{p.description}</p>
          </div>
        ))}
      </div>
      <p className="mt-3 text-sm text-gray-600">🔗 Portfolio: https://Prerit5241.github.io</p>
    </section>
  )
}
