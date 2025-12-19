import React from 'react'

export default function Nav() {
  return (
    <header className="border-b">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="font-semibold">PRERIT THAKUR</div>
        <nav className="space-x-4 text-sm">
          <a href="#about" className="hover:underline">About</a>
          <a href="#skills" className="hover:underline">Skills</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </div>
    </header>
  )
}
