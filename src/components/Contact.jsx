import useFadeIn from '../hooks/useFadeIn';
import { engagements } from './contactData';
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
    <div className={`w-10 h-10 rounded ${bg} flex items-center justify-center shrink-0`}>
      <Icon />
    </div>
    <div>
      <div className="text-xs text-gray-400 font-medium mb-0.5">{label}</div>
      <div className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 transition-colors">{value}</div>
    </div>
  </PixelBtn>
);

const Contact = () => {
  const ref = useFadeIn();
  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div ref={ref} className="max-w-5xl mx-auto px-6 opacity-0 translate-y-6 transition-all duration-700 relative">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest">Engage</span>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mt-3 mb-4 leading-tight">
              Not sure what you need?<br />
              <span className="text-blue-600">Let's talk.</span>
            </h2>
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
          <div className="space-y-4">
            {contacts.map((c, i) => <ContactBtn key={i} {...c} />)}
            <PixelBtn as="a" href={`${process.env.PUBLIC_URL}/dev-artariq-resume.pdf`} download="dev-artariq-resume.pdf"
              className="flex items-center justify-center gap-2 w-full p-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold shadow-[3px_3px_0px_#1d4ed8] dark:shadow-[3px_3px_0px_#93c5fd] hover:shadow-[5px_5px_0px_#1d4ed8] dark:hover:shadow-[5px_5px_0px_#93c5fd] transition-colors mt-2"
            >
              <Download size="md" />
              Download Resume
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
