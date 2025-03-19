import React from 'react';

const Contact = () => (
  <section id="contact" className="py-20 px-6 bg-gray-100">
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="text-3xl font-semibold mb-4">Get In Touch</h2>
      <p className="text-gray-700 mb-6">Let’s build something cool together. Reach out if you're hiring or just want to chat.</p>
      <a href="mailto:godfrey@example.com" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
        Say Hello
      </a>
    </div>
  </section>
);

export default Contact;
