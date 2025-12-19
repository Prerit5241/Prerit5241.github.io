import React from 'react'

export default function Contact() {
  return (
    <section id="contact">
      <h2 className="text-2xl font-semibold">Contact</h2>
      <p className="mt-3 text-gray-700">Email: <a href="mailto:preritthakur2800@gmail.com" className="text-indigo-600">preritthakur2800@gmail.com</a></p>
      <p className="mt-2 text-gray-700">I’m open to opportunities and collaborations — feel free to reach out.</p>

      <div className="mt-6">
        <a href="mailto:preritthakur2800@gmail.com" className="inline-block bg-indigo-600 text-white px-4 py-2 rounded">Send Email</a>
      </div>
    </section>
  )
}
