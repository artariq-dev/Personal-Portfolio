import useFadeIn from '../hooks/useFadeIn';
import { engagements } from './contactData';
import PixelBtn from './PixelBtn';

const Contact = () => {
  const ref = useFadeIn();
  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 relative overflow-hidden">

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div ref={ref} className="max-w-5xl mx-auto px-6 opacity-0 translate-y-6 transition-all duration-700 relative">

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left — positioning */}
          <div>
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest">Engage</span>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mt-3 mb-4 leading-tight">
              Something's broken,<br />
              <span className="text-blue-600">or it's about to be.</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-8">
              If your infrastructure keeps you up at night — deployments that feel like a gamble, costs nobody can explain, or a security posture you'd rather not think about — let's talk. I work with teams globally to untangle the mess and build something that actually holds.
            </p>

            {/* Engagement types */}
            <div className="space-y-4">
              {engagements.map((e, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                  <div>
                    <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">{e.label}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{e.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — contact */}
          <div className="space-y-4">
            <PixelBtn as="a" href="mailto:artariq.dev.1@gmail.com"
              className="flex items-center gap-4 p-5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 transition-all group shadow-[4px_4px_0px_#e5e7eb] dark:shadow-[4px_4px_0px_#374151] hover:shadow-[6px_6px_0px_#93c5fd] dark:hover:shadow-[6px_6px_0px_#1e3a5f] hover:-translate-x-0.5 hover:-translate-y-0.5"
            >
              <div className="w-10 h-10 rounded bg-blue-600 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div>
                <div className="text-xs text-gray-400 font-medium mb-0.5">Email</div>
                <div className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 transition-colors">artariq.dev.1@gmail.com</div>
              </div>
            </PixelBtn>

            <PixelBtn as="a" href="https://www.linkedin.com/in/khan-abdurrehman-883653214/" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 transition-all group shadow-[4px_4px_0px_#e5e7eb] dark:shadow-[4px_4px_0px_#374151] hover:shadow-[6px_6px_0px_#93c5fd] dark:hover:shadow-[6px_6px_0px_#1e3a5f] hover:-translate-x-0.5 hover:-translate-y-0.5"
            >
              <div className="w-10 h-10 rounded bg-[#0077B5] flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </div>
              <div>
                <div className="text-xs text-gray-400 font-medium mb-0.5">LinkedIn</div>
                <div className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 transition-colors">khan-abdurrehman</div>
              </div>
            </PixelBtn>

            <PixelBtn as="a" href="https://github.com/AbdurRehman924" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 transition-all group shadow-[4px_4px_0px_#e5e7eb] dark:shadow-[4px_4px_0px_#374151] hover:shadow-[6px_6px_0px_#93c5fd] dark:hover:shadow-[6px_6px_0px_#1e3a5f] hover:-translate-x-0.5 hover:-translate-y-0.5"
            >
              <div className="w-10 h-10 bg-gray-900 dark:bg-gray-700 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" /></svg>
              </div>
              <div>
                <div className="text-xs text-gray-400 font-medium mb-0.5">GitHub</div>
                <div className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 transition-colors">AbdurRehman924</div>
              </div>
            </PixelBtn>

            <PixelBtn as="a" href={`${process.env.PUBLIC_URL}/Abdur-Rehman-DevSecOps.pdf`} download="Abdur-Rehman-DevSecOps.pdf"
              className="flex items-center justify-center gap-2 w-full p-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold shadow-[3px_3px_0px_#1d4ed8] dark:shadow-[3px_3px_0px_#93c5fd] hover:shadow-[5px_5px_0px_#1d4ed8] dark:hover:shadow-[5px_5px_0px_#93c5fd] transition-colors mt-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" /></svg>
              Download Technical Profile
            </PixelBtn>

            <p className="text-xs text-gray-400 dark:text-gray-500 text-center pt-2">
              Based in Pakistan (UTC+5) · Available for remote engagements worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
