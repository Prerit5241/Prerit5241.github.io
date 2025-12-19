import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t mt-12">
      <div className="max-w-4xl mx-auto px-6 py-6 text-sm text-gray-600 flex items-center justify-between">
        <div>© {new Date().getFullYear()} PRERIT THAKUR</div>
        <div>
          <a href="https://github.com/Prerit5241" target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
        </div>
      </div>
    </footer>
  )
}
