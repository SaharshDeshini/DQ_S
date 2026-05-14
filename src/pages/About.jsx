import Reveal from "../components/Reveal";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import CountUp from "react-countup";

export default function About() {
  const location = useLocation();
  const counter = {
    mem: 300,
    events: 15,
    core: 60,
    alumni: 50,
  };

  const boxVariants = {
    initial: {
      scale: 1,
    },
    hover: {
      scale: 1.025,
      boxShadow: "0px 48px 100px 0px #110c2e26",
    },
  };

  useEffect(() => {
    if (location.hash) {
      let element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="mx-auto mt-[4.5rem] scroll-smooth">

      {/* Counting Component */}
      <div className="min-h-[calc(100vh-4.5rem)] py-4 sm:py-16 flex flex-col justify-start gap-8 lg:justify-between">
        <div className="mx-auto ">
          <h1 className="text-center text-4xl lg:text-8xl font-extrabold ">
            The hub for Data Science Enthusiasts
          </h1>
          <p className="text-center text-black text-md sm:text-xl">
            Driving innovation and collaboration through projects, hackathons
            certifications, and industry insights.
          </p>
        </div>

        <div className="w-11/12 lg:w-9/12 grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-16 bg-[#0077B6] mx-auto p-8 rounded-2xl">
          <div className="text-center">
            <CountUp
              className="text-white text-5xl sm:text-7xl font-semibold"
              end={counter.mem}
              duration={9}
              suffix="+"
            />
            <p className="text-white sm:text-xl"> Members</p>
          </div>
          <div className="text-center">
            <CountUp
              className="text-white text-5xl sm:text-7xl font-semibold"
              end={counter.events}
              duration={9}
              suffix="+"
            />
            <p className="text-white sm:text-xl"> Events</p>
          </div>
          <div className="text-center">
            <CountUp
              className="text-white text-5xl sm:text-7xl font-semibold"
              end={counter.core}
              duration={9}
              suffix="+"
            />
            <p className="text-white sm:text-xl"> Core members</p>
          </div>
          <div className="text-center">
            <CountUp
              className="text-white text-5xl sm:text-7xl font-semibold"
              end={counter.alumni}
              duration={9}
              suffix="+"
            />
            <p className="text-white sm:text-xl"> Alumni</p>
          </div>
        </div>

        <motion.div
          className="m-auto my-4 flex gap-4 items-center px-6 py-4 border-black/10 border-2 rounded-lg"
          variants={boxVariants}
          initial="initial"
          whileHover="hover"
          whileTap="hover"
        >
          <p className="text-black">Follow us on</p>
          <div className="flex flex-row gap-4 justify-evenly items-center">
            <a
              href="https://www.linkedin.com/company/vj-data-questers/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000"
                className="w-10"
                alt=""
              />
            </a>
            <a
              href="https://www.instagram.com/vjdataquesters.club/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000"
                className="w-10"
                alt=""
              />
            </a>
            <a
              href="mailto:vjdataquesters@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://img.icons8.com/?size=100&id=P7UIlhbpWzZm&format=png&color=000000"
                className="w-10"
                alt=""
              />
            </a>
          </div>
        </motion.div>
      </div>

      {/* About us */}
      <div className="flex flex-col items-center max-w-7xl mx-auto px-4 py-12 gap-8">
        
        {/* About Us Block */}
        <div className="w-full p-8 lg:p-12 bg-white/60 backdrop-blur-xl border border-neutral-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2.5rem]">
          <div className="mb-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight">
              About Us
            </h2>
          </div>
          
          <div className="space-y-4 text-neutral-600 text-lg leading-relaxed">
            <p>
              Welcome to our Data Science Club, the premier hub for data science
              enthusiasts at our college. Established with the vision of driving
              innovation and collaboration, our club serves as the central point
              for all data science-related activities on campus. We provide
              comprehensive guidance on projects, offer certifications for both
              students and faculty, and keep our members informed about the
              latest industry trends and real-world applications of data science.
            </p>
            <p>
              Our club hosts a variety of events, including expert-led guest
              lectures, hands-on workshops, and collaborative projects, ensuring
              a dynamic and engaging learning environment. By fostering strong
              connections with industry leaders, we bridge the gap between
              academic knowledge and practical experience, preparing our members
              to excel in the ever-evolving field of data science. Join us in
              our mission to uphold the highest standards of academic and
              technical integrity, and be part of a community dedicated to
              shaping the future of data science.
            </p>
          </div>
        </div>

        {/* Vision and Mission Blocks */}
        <div className="flex flex-col sm:flex-row gap-8 w-full">
          
          {/* Vision Block */}
          <div className="w-full sm:w-1/2 p-8 lg:p-10 bg-white border border-neutral-200/60 shadow-[0_4px_40px_rgb(0,0,0,0.03)] rounded-[2.5rem] relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-indigo-500 to-indigo-400 opacity-80 group-hover:opacity-100 transition-opacity" />
            
            <div className="mb-6 flex items-center gap-3">
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-400">
                Vision
              </h2>
            </div>
            
            <p className="text-neutral-600 text-lg leading-relaxed">
              To be the foremost hub for Data Science excellence, continually
              driving innovation and collaboration within our college
              community. We strive to create an environment where students and
              faculty can engage deeply with cutting-edge research and
              practical applications of Data Science. By fostering strong
              connections with industry leaders, we aim to bridge the gap
              between academic knowledge and real-world practice. Our
              vision includes being a leader in disseminating the latest
              trends and advancements in Data Science. Ultimately, we aspire
              to empower our members to be at the forefront of technological
              advancements and research in Data Science.
            </p>
          </div>

          {/* Mission Block */}
          <div className="w-full sm:w-1/2 p-8 lg:p-10 bg-white border border-neutral-200/60 shadow-[0_4px_40px_rgb(0,0,0,0.03)] rounded-[2.5rem] relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-teal-500 to-teal-400 opacity-80 group-hover:opacity-100 transition-opacity" />
            
            <div className="mb-6 flex items-center gap-3">
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-400">
                Mission
              </h2>
            </div>
            
            <p className="text-neutral-600 text-lg leading-relaxed">
              Our mission is to sustain and expand a thriving Data Science
              community by offering comprehensive guidance on various projects
              and providing certifications for students and faculty. We are
              dedicated to keeping our members abreast of industry trends and
              the practical implications of data in the real world through
              regular workshops, seminars, and guest lectures. By promoting
              active participation and collaboration, we aim to foster a
              culture of continuous learning and innovation. We ensure
              access to cutting-edge resources and tools that enable our
              members to excel in their data-driven endeavors. Our commitment
              is to uphold the highest standards of academic and technical
              integrity, preparing our members to lead and succeed in the
              dynamic field of Data Science.
            </p>
          </div>
          
        </div>
      </div>

      {/* Founders Block Component */}
      <div
        className="max-w-7xl px-4 py-24 mx-auto mb-2 min-h-[calc(100vh-4.5rem)] relative"
        id="foundersBlock"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-teal-500 inline-block">
            Founder of the club
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 py-8 items-stretch">
          {/* Image & Info Card */}
          <div className="w-full lg:w-4/12 flex flex-col items-center gap-6 p-8 bg-white/60 backdrop-blur-xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-[2.5rem]">
            <div className="p-1 rounded-[2.5rem] bg-gradient-to-br from-indigo-400 to-teal-400 shadow-lg group">
              <img
                src="/teamImages/sravanthi.jpg"
                className="w-full max-w-[280px] h-auto aspect-square object-cover rounded-[2.3rem] group-hover:scale-[0.98] transition-transform duration-500"
                alt="Rayani Sravanthi"
              />
            </div>
            <div className="text-center mt-2">
              <a
                href="https://www.linkedin.com/in/sravanthi-rayani-535a01228/"
                target="_blank"
                rel="noreferrer"
                className="block group"
              >
                <p className="text-2xl font-bold text-neutral-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-teal-500 transition-all duration-300">
                  Rayani Sravanthi
                </p>
              </a>
              <p className="text-indigo-600 font-medium text-lg mt-2">
                Dept. of CSE-(CyS,DS) & AI&DS
              </p>
              <div className="inline-block px-4 py-1 mt-3 bg-neutral-100 border border-neutral-200 rounded-full text-neutral-600 text-sm font-semibold tracking-wide">
                Batch 2020-2024
              </div>
            </div>
          </div>

          {/* Message Card */}
          <div className="lg:w-8/12 p-8 lg:p-10 h-[550px] bg-white border border-neutral-200/60 shadow-[0_4px_40px_rgb(0,0,0,0.04)] rounded-[2.5rem] overflow-y-scroll overflow-x-hidden small-scrollbar relative">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 via-teal-400 to-coral-400 rounded-t-[2.5rem]" />
            <p className="text-black text-base sm:text-lg whitespace-pre-wrap text-justify">
              One of the most difficult yet rewarding experiences of my life was
              founding a club while I was in college. As a sophomore who was
              deeply interested in data science. There was not a single student
              group focused on data science. I decided to start the VJ DATA
              QUESTERS Club (VJDQ) with the help of our department, motivated by
              my desire to have a real influence.{"\n"}
              {"\n"}
              With a lot of resolve and a distinct vision, the trip got
              underway. I put together a proposal to be given to the student
              activities office, wrote a mission statement, and listed the
              objectives of the organization. Convincing the administration of
              the club's potential influence and motivating students to join was
              a difficult first step. But what drove me was a deep-seated
              conviction that small steps taken by many could result in big
              changes.{"\n"}
              {"\n"}
              The next important step is to assemble a committed team. I reached
              out to colleagues who were passionate like me and gave them
              important roles in the club. We generated ideas and created an
              activity schedule together. Every event was painstakingly
              organized to guarantee optimal participation and influence. To
              keep club members motivated and involved, a combination of
              acknowledgment, passion, and human connection is needed. I made it
              a point to recognize everyone's participation, no matter how tiny,
              and to celebrate our group's accomplishments.{"\n"}
              {"\n"}Frequent meetings provided members with an opportunity to
              discuss ideas, express problems, and foster a sense of camaraderie
              in addition to planning and logistics. Everyone felt appreciated
              and motivated to participate because of the encouraging atmosphere
              we fostered. Our development was greatly aided by the
              administration's and the faculty's support. Through exhibiting the
              benefits of our work and proving our dedication, we were able to
              obtain funds and resources that allowed us to plan bigger events
              and take on more challenging initiatives. Faculty members offered
              their time to serve as advisors, offering advice and putting us in
              touch with outside organizations and subject matter experts.
              {"\n"}
              {"\n"}
              Reflecting on this journey, I am immensely proud of what the VJ
              DATA QUESTERS Club has achieved. From a fledgling idea to a
              vibrant, impactful organization, the club's success is a testament
              to the power of passion, perseverance, and collaboration. My
              motivation was fueled by the belief that together, we could make a
              difference. This belief not only drove me but also inspired
              countless others to join and support our mission.
              {"\n"}
              {"\n"}
              Looking ahead, the VJDQ is poised to continue its growth and
              impact. New leaders have emerged, bringing fresh ideas and energy.
              The foundation we built will support future initiatives, ensuring
              that our commitment to our club endures. Founding this club has
              been a transformative experience, teaching me invaluable lessons
              in leadership, teamwork, and the profound impact of collective
              action.
            </p>
          </div>
        </div>

        {/* Dr. M. Raja Sekar Block */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 py-8 mt-8 items-stretch">
          {/* Image & Info Card */}
          <div className="w-full lg:w-4/12 flex flex-col items-center gap-6 p-8 bg-white/60 backdrop-blur-xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-[2.5rem]">
            <div className="p-1 rounded-[2.5rem] bg-gradient-to-br from-indigo-400 to-teal-400 shadow-lg group">
              <img
                src="/teamImages/raja.png"
                className="w-full max-w-[280px] h-auto aspect-square object-cover rounded-[2.3rem] group-hover:scale-[0.98] transition-transform duration-500 bg-white"
                alt="Dr. M. Raja Sekar"
              />
            </div>
            <div className="text-center mt-2 group">
              <p className="text-2xl font-bold text-neutral-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-teal-500 transition-all duration-300">
                Dr. M. Raja Sekar
              </p>
              <p className="text-indigo-600 font-medium text-lg mt-2">
                Professor, Dept of CSE-CyS, DS and AI&DS
              </p>
            </div>
          </div>

          {/* Message Card */}
          <div className="lg:w-8/12 p-8 lg:p-10 bg-white border border-neutral-200/60 shadow-[0_4px_40px_rgb(0,0,0,0.04)] rounded-[2.5rem] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-teal-400 via-indigo-500 to-coral-400" />
            <div className="h-full flex items-center">
              <p className="text-black text-base sm:text-lg text-justify italic">
                "VJ DATA QUESTERS has been instrumental in fostering a culture of data science excellence within our college. The club's commitment to providing a platform for students and faculty to engage with cutting-edge data science technologies is commendable. I am proud of the club's achievements and look forward to its continued success in the future."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
