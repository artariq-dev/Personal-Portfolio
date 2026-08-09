import { motion } from 'framer-motion';
import PixelBtn from './PixelBtn';
import { Email, LinkedIn, GitHub, Download } from './Icons';

const contacts = [
  { href: "mailto:artariq.dev.1@gmail.com", label: "Email", value: "artariq.dev.1@gmail.com", icon: Email, bg: "bg-blue-600" },
  { href: "https://www.linkedin.com/in/artariq-dev/", label: "LinkedIn", value: "artariq-dev", icon: LinkedIn, bg: "bg-[#0077B5]" },
  { href: "https://github.com/artariq-dev", label: "GitHub", value: "artariq-dev", icon: GitHub, bg: "bg-gray-900 dark:bg-gray-700" },
];

const btnClass = "flex items-center gap-4 p-5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 transition-all group shadow-[4px_4px_0px_#e5e7eb] dark:shadow-[4px_4px_0px_#374151] hover:shadow-[6px_6px_0px_#93c5fd] dark:hover:shadow-[6px_6px_0px_#1e3a5f] hover:-translate-x-0.5 hover:-translate-y-0.5";

const ContactBtn = ({ href, label, value, icon: Icon, bg }) => (
  <PixelBtn as="a" href={href} target="_blank" rel="noopener noreferrer" className={btnClass}>
    <div className={`w-10 h-10 rounded ${bg} flex items-center justify-center shrink-0 text-white`}>
      <Icon />
    </div>
    <div>
      <div className="text-xs text-gray-400 font-medium mb-0.5">{label}</div>
      <div className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 transition-colors">{value}</div>
    </div>
  </PixelBtn>
);

const Contact = () => (
  <section id="contact" className="py-24 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 relative overflow-hidden">
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
    <motion.div
      className="max-w-5xl mx-auto px-6 relative"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
        <div className="max-w-sm flex flex-col space-y-4">
          <h2 className="text-2xl font-bold text-blue-600 leading-tight">
            Let's talk.
          </h2>
          <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
            I work with founders of <span className="font-semibold text-gray-800 dark:text-gray-200">Tech, SaaS, marketplaces, e-commerce etc</span> — dozen+ projects shipped worldwide.
          </p>
          {contacts.map((c, i) => <ContactBtn key={i} {...c} />)}
          <PixelBtn as="a" href={`${process.env.PUBLIC_URL}/resume-abdurrehman-2026.pdf`} download="resume-abdurrehman-2026.pdf"
            className="flex items-center justify-center gap-2 w-full p-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold shadow-[3px_3px_0px_#1d4ed8] dark:shadow-[3px_3px_0px_#93c5fd] hover:shadow-[5px_5px_0px_#1d4ed8] dark:hover:shadow-[5px_5px_0px_#93c5fd] transition-colors"
          >
            <Download size="md" />
            Download Resume
          </PixelBtn>
          <p className="text-xs text-gray-400 dark:text-gray-500 text-center pt-2">
            Based in Pakistan (UTC+5) · Available for remote engagements worldwide
          </p>
        </div>
    </motion.div>
  </section>
);

export default Contact;
