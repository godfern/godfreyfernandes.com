import React from 'react';

const Footer = () => (
  <footer id="contact" className="py-20 px-4 bg-brand-aqua text-white">
    <div className="max-w-4xl mx-auto text-center">
      {/* Logo */}
      <div className="flex justify-center mb-6">
        <img src="/logo.webp" alt="Godfrey Fernandes Logo" className="w-16 h-16" />
      </div>

      <h3 className="text-4xl font-extrabold mb-4 text-brand-navy">
        Let's Build Something Fluid & Innovative.
      </h3>
      <p className="text-lg mb-8 text-brand-navy/80">
        Have a challenging project, an interesting idea, or just want to talk tech? I'm always open to connecting.
      </p>

      {/* Contact Link */}
      <a href="mailto:godfern13@gmail.com" className="inline-block px-8 py-3 rounded-xl font-semibold text-white bg-brand-coral hover:bg-brand-navy transition duration-300 shadow-xl mb-12">
        Say Hello: godfern13@gmail.com
      </a>

      {/* Social Media Links */}
      <div className="flex justify-center space-x-6">

        {/* LinkedIn Icon (Placeholder SVG) */}
        <a href="https://www.linkedin.com/in/godfrey-fernandes-5b06a589/" target="_blank" className="text-brand-navy hover:text-white transition duration-200" aria-label="LinkedIn">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
          {/* <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" viewBox="0 0 50 50">
            <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
          </svg> */}
        </a>

        {/* GitHub Icon (Placeholder SVG) */}
        <a href="https://github.com/godfern" target="_blank" className="text-brand-navy hover:text-white transition duration-200" aria-label="GitHub">
          {/* <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 4 5.44 5.44 0 0 0 12 8.57a5.44 5.44 0 0 0-7.91-4.77 5.07 5.07 0 0 0-.09.77A5.44 5.44 0 0 0 2 13.5c0 5.44 3.3 6.63 6.44 7A3.37 3.37 0 0 0 9 22.87V19" /></svg> */}
          {/* <svg height="32" aria-hidden="true" viewBox="0 0 24 24" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github v-align-middle">
            <path d="M12 1C5.923 1 1 5.923 1 12c0 4.867 3.149 8.979 7.521 10.436.55.096.756-.233.756-.522 0-.262-.013-1.128-.013-2.049-2.764.509-3.479-.674-3.699-1.292-.124-.317-.66-1.293-1.127-1.554-.385-.207-.936-.715-.014-.729.866-.014 1.485.797 1.691 1.128.99 1.663 2.571 1.196 3.204.907.096-.715.385-1.196.701-1.471-2.448-.275-5.005-1.224-5.005-5.432 0-1.196.426-2.186 1.128-2.956-.111-.275-.496-1.402.11-2.915 0 0 .921-.288 3.024 1.128a10.193 10.193 0 0 1 2.75-.371c.936 0 1.871.123 2.75.371 2.104-1.43 3.025-1.128 3.025-1.128.605 1.513.221 2.64.111 2.915.701.77 1.127 1.747 1.127 2.956 0 4.222-2.571 5.157-5.019 5.432.399.344.743 1.004.743 2.035 0 1.471-.014 2.654-.014 3.025 0 .289.206.632.756.522C19.851 20.979 23 16.854 23 12c0-6.077-4.922-11-11-11Z"></path>
          </svg> */}
          <svg height="32" aria-hidden="true" viewBox="0 0 24 24" version="1.1" width="32" data-view-component="true" className="octicon octicon-mark-github v-align-middle">
            <path d="M12 1C5.923 1 1 5.923 1 12c0 4.867 3.149 8.979 7.521 10.436.55.096.756-.233.756-.522 0-.262-.013-1.128-.013-2.049-2.764.509-3.479-.674-3.699-1.292-.124-.317-.66-1.293-1.127-1.554-.385-.207-.936-.715-.014-.729.866-.014 1.485.797 1.691 1.128.99 1.663 2.571 1.196 3.204.907.096-.715.385-1.196.701-1.471-2.448-.275-5.005-1.224-5.005-5.432 0-1.196.426-2.186 1.128-2.956-.111-.275-.496-1.402.11-2.915 0 0 .921-.288 3.024 1.128a10.193 10.193 0 0 1 2.75-.371c.936 0 1.871.123 2.75.371 2.104-1.43 3.025-1.128 3.025-1.128.605 1.513.221 2.64.111 2.915.701.77 1.127 1.747 1.127 2.956 0 4.222-2.571 5.157-5.019 5.432.399.344.743 1.004.743 2.035 0 1.471-.014 2.654-.014 3.025 0 .289.206.632.756.522C19.851 20.979 23 16.854 23 12c0-6.077-4.922-11-11-11Z"></path>
          </svg>
        </a>

        {/* Email Icon (Placeholder SVG) */}
        <a href="mailto:godfern13@gmail.com" className="text-brand-navy hover:text-white transition duration-200" aria-label="Email">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
        </a>
      </div>

      {/* Copyright and final note */}
      <p className="mt-12 text-sm text-brand-navy/60 flex items-center justify-center gap-1">
        &copy; {new Date().getFullYear()} Godfrey Fernandes. Designed & Developed with passion on the Goan Coast
      </p>
    </div>
  </footer>
);

export default Footer;
