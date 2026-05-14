import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import events from "../data/events.js";
import Reveal from "../components/Reveal.jsx";

const EventCard = ({ event }) => {
  const navigate = useNavigate();

  return (
    <div
      className="card-premium h-full flex flex-col group cursor-pointer overflow-hidden"
      onClick={() => {
        if (event.link.startsWith("http")) {
          window.open(event.link, "_blank");
        } else {
          navigate(event.link);
        }
      }}
    >
      <div className="w-full h-48 overflow-hidden relative">
        <img
          src={event.image}
          alt={event.name}
          draggable={false}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-transparent transition-colors" />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex flex-wrap gap-2 mb-4">
          {event.event_tags.map((tag, index) => (
            <span
              key={index}
              className={`text-xs font-semibold px-2 py-1 rounded-md ${
                tag === "Limited Registrations"
                  ? "bg-coral-50 text-coral-600 border border-coral-200"
                  : "bg-teal-50 text-teal-700 border border-teal-100"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold text-neutral-950 mb-2 group-hover:text-indigo-600 transition-colors line-clamp-2">
          {event.name}
        </h3>
        <p className="text-sm font-medium text-indigo-600 mb-3">{event.date}</p>
        <p className="text-neutral-500 text-sm leading-relaxed line-clamp-3">
          {event.description}
        </p>
      </div>
    </div>
  );
};

export default function Events() {
  const recentYear = Object.keys(events.past)[0];
  const [pastevents, setPastevents] = useState(events.past[recentYear]);
  const [year, setyear] = useState(recentYear.slice(1));

  const [searchParams, setSearchParams] = useSearchParams();
  const pastEventsYear = searchParams.get("pastEventsYear");

  useEffect(() => {
    if (pastEventsYear && events.past[`e${pastEventsYear}`]) {
      setPastevents(events.past[`e${pastEventsYear}`]);
      setyear(pastEventsYear);
    }
  }, [pastEventsYear]);

  const handleYearChange = (e) => {
    setPastevents(events.past[e]);
    setSearchParams({ pastEventsYear: e.slice(1) });
    setyear(e.slice(1));
  };

  return (
    <div className="bg-transparent min-h-screen pt-32 pb-24">
      {/* Event highlights */}
      <section className="container-custom mb-20 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-xs font-semibold uppercase tracking-wider mb-6">
          Our Initiatives
        </div>
        <h1 className="mb-6">
          Discover Amazing Events we Organized
        </h1>
        <p className="text-neutral-500 text-lg">
          Explore the diverse range of events we've hosted, designed to inspire, educate, and bring our community together.
        </p>
      </section>

      {/* Display by year */}
      <div className="container-custom">
        <div className="w-full">
          {/* Upcoming events */}
          {events.upcoming.length !== 0 && (
            <div className="mb-20">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-2xl md:text-3xl m-0">Upcoming Events</h2>
                <div className="h-px bg-neutral-200 flex-grow" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {events.upcoming.map((event, index) => (
                  <Reveal key={index}>
                    <EventCard event={event} />
                  </Reveal>
                ))}
              </div>
            </div>
          )}

          {/* Past Events Section */}
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-4 mb-2">
                <h2 className="text-2xl md:text-3xl m-0">Past Archives</h2>
                <div className="h-px bg-neutral-200 flex-grow" />
            </div>
            
            <div className="flex flex-wrap gap-3">
              {Object.keys(events.past).map((eventyear) => {
                const isActive = year.toString() === eventyear.slice(1);
                return (
                  <button
                    key={eventyear}
                    className={`px-5 py-2 font-semibold text-sm rounded-full transition-all border ${
                      isActive
                        ? "bg-neutral-950 text-white border-neutral-950 shadow-md"
                        : "bg-white text-neutral-600 border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50"
                    }`}
                    onClick={() => handleYearChange(eventyear)}
                  >
                    {eventyear.slice(1)}
                  </button>
                );
              })}
            </div>

            {Object.keys(pastevents).length === 0 ? (
              <div className="card-premium p-12 text-center">
                 <p className="text-neutral-500 font-medium">No events found for the year {year}.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {pastevents.map((event, index) => (
                  <Reveal key={index}>
                    <EventCard event={event} />
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
