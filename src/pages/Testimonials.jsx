import testimonials from "../data/testimonial.js";
import Reveal from "../components/Reveal.jsx";
import { Quote, ArrowRight, GraduationCap } from "lucide-react";

export default function Testimonials() {
  // Filter out faculty to only show alumni
  const alumni = testimonials.filter(
    (t) => t.role.toLowerCase() === "alumini" || t.role.toLowerCase() === "alumni"
  );

  return (
    <div className="flex flex-col min-h-screen bg-transparent overflow-hidden">
      {/* Background glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[800px] bg-gradient-to-b from-indigo-400/10 via-teal-400/5 to-transparent blur-[120px] pointer-events-none -z-10" />

      {/* Header Section */}
      <section className="pt-36 pb-16 px-6 relative z-10 text-center">
        <div className="container-custom">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-neutral-200/60 shadow-sm text-neutral-600 text-xs font-bold uppercase tracking-widest mb-6">
              <GraduationCap size={16} className="text-indigo-600" />
              Alumni Connect
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-950 mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-teal-500">Alumni Network</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto leading-relaxed">
              Hear directly from our founding members and past leaders about how the VJ Data Questers shaped their college journey and careers.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Alumni Cards Section */}
      <section className="pb-32 px-4 sm:px-8 lg:px-12 relative z-10 w-full max-w-[1800px] mx-auto">
        <div className="columns-1 lg:columns-2 2xl:columns-3 gap-8 space-y-8 max-w-[1400px] mx-auto">
          {alumni.map((t, index) => (
            <Reveal key={index}>
              <div className="flex flex-col p-8 bg-white/60 backdrop-blur-xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] transition-all duration-500 rounded-[2rem] group relative overflow-hidden break-inside-avoid">
                
                {/* Decorative quote icon */}
                <div className="absolute top-6 right-6 text-indigo-100/40 group-hover:text-indigo-100 transition-colors duration-500 pointer-events-none">
                  <Quote size={64} strokeWidth={1} />
                </div>

                {/* Header: Image and Info */}
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className="w-16 h-16 shrink-0 rounded-full bg-gradient-to-br from-indigo-200 to-teal-200 p-0.5 group-hover:from-indigo-400 group-hover:to-teal-400 transition-colors duration-500 shadow-sm">
                    <img
                      src={`/${t.image}`}
                      alt={t.name}
                      className="w-full h-full object-cover rounded-full bg-white"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-teal-500 transition-all duration-300">
                      {t.name}
                    </h3>
                    <p className="text-indigo-600 font-medium text-sm">Alumni Member</p>
                  </div>
                </div>

                {/* Statement */}
                <div className="relative z-10 flex-grow">
                  <p className="text-neutral-600 text-sm leading-relaxed text-justify italic">
                    "{t.statement}"
                  </p>
                </div>
                
                {/* Link (if any) */}
                {t.linkedin && (
                  <div className="mt-6 pt-6 border-t border-neutral-100 relative z-10">
                    <a
                      href={t.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold text-indigo-500 hover:text-indigo-700 transition-colors"
                    >
                      Connect on LinkedIn <ArrowRight size={16} />
                    </a>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
