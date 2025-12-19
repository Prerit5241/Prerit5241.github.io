import React from 'react'

const skills = [
  'Frontend Development',
  'Next.js',
  'React.js',
  'Node.js',
  'MongoDB',
  'MySQL (Basic)',
  'Python (Basics)',
  'Git & GitHub',
  'Postman',
]

export default function Skills() {
  return (
    <section id="skills">
      <h2 className="text-2xl font-semibold">Technical Skills</h2>
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
        {skills.map((s) => (
          <div key={s} className="px-3 py-2 border rounded text-sm">{s}</div>
        ))}
      </div>
    </section>
  )
}
