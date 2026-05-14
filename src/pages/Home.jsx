import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { whatwedo } from "../data/whatwedo";
import { ArrowRight, Quote } from "lucide-react";
import testimonials from "../data/testimonial";
import Reveal from "../components/Reveal";
import Carousel from "../components/Carousel";
import Aurora from "../components/Aurora";
import BorderGlow from "../components/BorderGlow";
import MascotWidget from "../components/MascotWidget";

const TestimonialCard = ({ person }) => {
  return (
    <Reveal>
      <a
        href={person.linkedin || "#"}
        target={person.linkedin ? "_blank" : "_self"}
        aria-label={`View ${person.name}'s profile`}
        className="block group/link h-full"
      >
        <div className="card-premium p-8 h-full flex flex-col justify-start group relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] bg-white/80">
          {/* Decorative Quote Icon */}
          <div className="absolute top-6 right-6 text-indigo-100/40 group-hover:text-indigo-100 transition-colors duration-500">
            <Quote size={80} strokeWidth={1} />
          </div>

          <div className="relative z-10 flex flex-col h-full">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-6 text-center sm:text-left">
              <div className="w-20 h-20 shrink-0 rounded-full overflow-hidden border-4 border-white shadow-md ring-2 ring-indigo-50 group-hover:ring-teal-100 transition-all duration-500 group-hover:scale-105">
                <img
                  className="w-full h-full object-cover"
                  src={
                    person.image
                      ? `/${person.image}`
                      : "https://picsum.photos/200"
                  }
                  alt={person.name}
                />
              </div>
              <div className="pt-2">
                <h4 className="text-xl font-bold text-neutral-900 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-teal-500 transition-all duration-300">
                  {person.name}
                </h4>
                <p className="text-sm font-semibold text-indigo-600 mt-1">
                  {person.role}
                </p>
              </div>
            </div>
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed italic relative z-10 flex-grow">
              "{person.statement}"
            </p>
          </div>
        </div>
      </a>
    </Reveal>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-transparent overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-36 pb-20 md:pt-48 md:pb-24 px-6 flex flex-col items-center justify-center text-center min-h-[90vh]">
        {/* Dynamic Aurora Background */}
        <div className="absolute inset-0 w-full h-[150%] -z-10 overflow-hidden [mask-image:linear-gradient(to_bottom,white_40%,transparent_100%)] opacity-60">
          <Aurora
            colorStops={["#4f46e5", "#0ea5e9", "#14b8a6"]}
            blend={0.15}
            amplitude={1.5}
            speed={0.7}
          />
        </div>

        {/* Mascot Widget */}
        <MascotWidget />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 backdrop-blur-md border border-neutral-200/60 shadow-sm text-neutral-600 text-[11px] font-bold uppercase tracking-widest mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
            </span>
            VNRVJIET Data Science Club
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-neutral-900 mb-6 max-w-4xl leading-[1.05] tracking-tight"
          >
            Differentiated by Inputs, <br className="hidden md:block" />
            Integrated by{" "}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-teal-500">
              Outputs.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-neutral-600 text-lg md:text-xl max-w-[600px] mb-10 leading-loose font-medium"
          >
            We are the premier hub for data science enthusiasts, driving
            innovation, collaboration, and real-world impact on campus.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row justify-start gap-4 w-full sm:w-auto"
          >
            <Link to="/events" className="btn-coral w-full sm:w-auto px-8">
              Explore Events
            </Link>
            <Link to="/about" className="btn-secondary w-full sm:w-auto px-8">
              Know More
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white/60 backdrop-blur-md border-y border-white/20 relative z-10 shadow-sm">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <Reveal>
              <div className="flex justify-center md:justify-start">
                <BorderGlow
                  edgeSensitivity={20}
                  glowColor="243 75 59"
                  backgroundColor="#ffffff"
                  borderRadius={32}
                  glowRadius={40}
                  glowIntensity={0.6}
                  coneSpread={30}
                  animated={true}
                  colors={["#4f46e5", "#0ea5e9", "#14b8a6"]}
                  className="w-full max-w-md aspect-square shadow-sm"
                >
                  <div className="relative w-full h-full flex items-center justify-center p-8 z-10">
                    <img
                      src="/logo.png"
                      alt="DataQuesters"
                      className="relative z-10 w-2/3 h-auto drop-shadow-xl transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </BorderGlow>
              </div>
            </Reveal>

            <Reveal>
              <div className="flex flex-col items-start text-left">
                <h2 className="mb-6">About VJDQ</h2>
                <p className="text-neutral-500 text-lg mb-8 max-w-prose">
                  Established with the vision of driving innovation and
                  collaboration, our club serves as the central point for all
                  data science-related activities on campus. We provide
                  comprehensive guidance on projects, offer certifications for
                  both students and faculty, and keep our members informed about
                  the latest industry trends and real-world applications of data
                  science.
                </p>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-700 hover:gap-3 transition-all"
                >
                  Read our full story <ArrowRight size={18} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 bg-transparent relative">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2>What We Do</h2>
            <p className="text-neutral-500 mt-4">
              Discover the core pillars of our community and how we empower
              students.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {whatwedo.map((item, index) => (
              <Reveal key={index}>
                <div className="card-premium p-8 h-full flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-24 h-24 mb-8 relative">
                    <div className="absolute inset-0 bg-indigo-50 rounded-full scale-110 group-hover:scale-125 transition-transform duration-500 opacity-50" />
                    <img
                      src={`/${item.imgURL}`}
                      alt={item.title}
                      className="w-full h-full object-contain relative z-10 drop-shadow-sm group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-6">
                    {item.title}
                  </h3>

                  {item.example && (
                    <Link
                      to={item.example}
                      className="mt-auto text-indigo-600 font-semibold hover:text-indigo-700 flex items-center gap-1 group-hover:gap-2 transition-all text-sm uppercase tracking-wide"
                    >
                      Know More <ArrowRight size={16} />
                    </Link>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Testimonials Section */}
      <section className="py-24 bg-white/60 backdrop-blur-md border-y border-white/20 shadow-sm relative z-10">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold tracking-tight  inline-block mb-4">
              Our Coordinators
            </h2>
            <p className="text-neutral-500 text-lg">
              Hear from our experienced mentors who guide our vision and inspire
              excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.slice(0, 3).map((person, index) => (
              <div
                key={index}
                className={
                  index === 2
                    ? "md:col-span-2 md:w-[calc(50%-1rem)] mx-auto w-full"
                    : "w-full"
                }
              >
                <TestimonialCard person={person} />
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/team"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white border border-neutral-200 text-indigo-600 rounded-full font-bold shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 hover:border-indigo-200 transition-all duration-300"
            >
              Meet the entire team <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-24 bg-transparent border-t border-white/20 overflow-hidden w-full">
        <div className="w-full">
          <div className="text-center max-w-2xl mx-auto mb-12 px-4">
            <h2>Captured Moments</h2>
            <p className="text-neutral-500 mt-4">
              A glimpse into our vibrant community events.
            </p>
          </div>
          {/* Full width container for Carousel */}
          <div className="w-full pl-4 sm:pl-8 xl:pl-16">
            <Carousel />
          </div>
        </div>
      </section>
    </div>
  );
}
