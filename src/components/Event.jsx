import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Download } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { SquareArrowUpRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import events from "../data/events.js";
import EventSessionQuery from "./EventSessionQuery";
import EventSubmissions from "./EventSubmissions";

export default function Event() {
  function handleRegister(url) {
    // const element = document.getElementById("embedded-form");
    // element.scrollIntoView({ behavior: "smooth", block: "start" });
    // window.location.href = event.register;
    navigate(`../../${url}`);
  }

  const { eventname } = useParams();

  const findEvent = () => {
    let event = events.upcoming.find((e) => e.eventId === eventname);
    if (!event) {
      for (const yearEvents of Object.values(events.past)) {
        const found = yearEvents.find((e) => e.eventId === eventname);
        if (found) return found;
      }
    }
    return event;
  };

  const event = findEvent();
  const navigate = useNavigate();

  if (!event) {
    return (
      <div className="pt-20 text-center">
        <h2 className="text-2xl font-semibold">Event not found</h2>
        <Link
          to="/events"
          className="text-blue-500 hover:underline mt-4 inline-block"
        >
          Return to Events
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-start items-center gap-6 mb-12">
          <Link
            to="/events"
            className="p-3 bg-white border border-neutral-200/60 shadow-sm hover:shadow-md hover:-translate-x-1 rounded-full transition-all self-center group"
          >
            <ArrowLeft size={24} className="text-neutral-500 group-hover:text-indigo-600 transition-colors" />
          </Link>
          <h2 className="font-extrabold text-3xl md:text-4xl lg:text-5xl tracking-tight text-neutral-900 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br hover:from-indigo-600 hover:to-teal-500 transition-all duration-300">
            {event.name}
          </h2>
        </div>
        <div className="rounded-[2.5rem] p-6 lg:p-10 bg-white/60 backdrop-blur-xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.06)] space-y-8 flex flex-col mb-12">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="p-6 rounded-3xl bg-gradient-to-br from-indigo-50/50 to-white border border-indigo-100/50 shadow-sm relative overflow-hidden group hover:-translate-y-1 transition-transform">
              <div className="absolute top-0 left-0 w-full h-1 bg-indigo-400 opacity-50 group-hover:opacity-100 transition-opacity" />
              <p className="text-lg font-bold text-indigo-900 mb-1">Date</p>
              <p className="font-medium text-neutral-600">{event.date}</p>
            </div>
            <div className="p-6 rounded-3xl bg-gradient-to-br from-teal-50/50 to-white border border-teal-100/50 shadow-sm relative overflow-hidden group hover:-translate-y-1 transition-transform">
              <div className="absolute top-0 left-0 w-full h-1 bg-teal-400 opacity-50 group-hover:opacity-100 transition-opacity" />
              <p className="text-lg font-bold text-teal-900 mb-1">Time</p>
              <p className="font-medium text-neutral-600">{event.timings}</p>
            </div>
            <div className="p-6 rounded-3xl bg-gradient-to-br from-coral-50/50 to-white border border-coral-100/50 shadow-sm relative overflow-hidden group hover:-translate-y-1 transition-transform">
              <div className="absolute top-0 left-0 w-full h-1 bg-coral-400 opacity-50 group-hover:opacity-100 transition-opacity" />
              <p className="text-lg font-bold text-coral-900 mb-1">Venue</p>
              <p className="font-medium text-neutral-600">{event.venue}</p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">About the Event</h3>
            <p className="text-neutral-600 text-lg leading-relaxed whitespace-pre-wrap">{event.description}</p>
          </div>

          {event.register && !event.isGFormEmbeddable && (
            <div className="self-start sm:self-end mt-4">
              <button
                onClick={() => handleRegister(event.register)}
                className="inline-block font-semibold text-white bg-gradient-to-r from-indigo-500 to-teal-400 hover:from-indigo-600 hover:to-teal-500 px-8 py-4 rounded-full shadow-[0_8px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_12px_25px_rgba(99,102,241,0.4)] transition-all transform hover:-translate-y-1 w-full sm:w-auto text-center"
              >
                Register Now
              </button>
            </div>
          )}
        </div>

        {event.sessionQuery && <EventSessionQuery eventname={eventname} />}

        {event.sessionSubmissions && <EventSubmissions />}

        {event.pics?.length > 0 && (
          <div className="my-16 relative">
            <h3 className="text-2xl font-bold text-neutral-900 mb-8 px-2">Event Highlights</h3>
            <div className="p-4 bg-white/40 backdrop-blur-md border border-white/50 rounded-[3rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <Swiper
                modules={[Pagination, Navigation, Autoplay]}
                pagination={{ clickable: true }}
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                navigation={{
                  nextEl: ".event-swiper-button-next",
                  prevEl: ".event-swiper-button-prev",
                }}
                className="event-swiper w-full md:h-[35rem] mx-auto rounded-[2.5rem] overflow-hidden flex justify-center"
              >
                {event.pics.map((pic, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={pic}
                      alt={`${event.name} - Image ${index + 1}`}
                      className="w-full h-full object-cover"
                      draggable={false}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              {event.pics?.length > 1 && (
                <>
                  <div className="event-swiper-button-next swiper-button-next hidden md:flex text-indigo-600 bg-white/80 backdrop-blur-md border border-white/50 shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 rounded-full right-6 w-12 h-12 after:text-xl"></div>
                  <div className="event-swiper-button-prev swiper-button-prev hidden md:flex text-indigo-600 bg-white/80 backdrop-blur-md border border-white/50 shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 rounded-full left-6 w-12 h-12 after:text-xl"></div>
                </>
              )}
            </div>
          </div>
        )}

        {event.winners && (
          <div className="my-12 p-8 bg-gradient-to-br from-indigo-50/50 to-transparent border border-indigo-100/50 rounded-[2.5rem] shadow-sm">
            <h3 className="font-bold text-2xl text-indigo-900 mb-4">Winners 🏆</h3>
            <div
              className="text-neutral-700 text-lg leading-relaxed overflow-x-auto"
              style={{ whiteSpace: "pre-wrap" }}
              dangerouslySetInnerHTML={{ __html: event.winners }}
            />
          </div>
        )}

        {event.outcome && (
          <div className="my-12 p-8 bg-gradient-to-br from-teal-50/50 to-transparent border border-teal-100/50 rounded-[2.5rem] shadow-sm">
            <h3 className="font-bold text-2xl text-teal-900 mb-4">Outcome 💡</h3>
            <div
              className="text-neutral-700 text-lg leading-relaxed"
              style={{ whiteSpace: "pre-wrap" }}
              dangerouslySetInnerHTML={{ __html: event.outcome }}
            />
          </div>
        )}

        {event.register && (
          <div className="my-8 text-center">
            {event?.isGFormEmbeddable ? (
              <div className="space-y-4" id="embedded-form">
                <h3 className="text-3xl font-semibold">
                  Fill out the form
                  <span>
                    <a href={event.register} target="_blank">
                      <SquareArrowUpRight className="inline-block mx-3" />
                    </a>
                  </span>
                </h3>
                <div className="flex justify-end"></div>
                <div className="relative w-full pt-[150%]">
                  <iframe
                    src={event.register}
                    className="absolute top-0 left-0 w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    title="Registration Form"
                  />
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        )}

        {event.externalDownloads && (
          <div className="my-8">
            <h3 className="font-semibold text-2xl mb-6">Workshop Material</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(event.externalDownloads).map(
                ([title, downloadUrl], index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <h4 className="font-medium text-lg mb-3">{title}</h4>
                    <button
                      onClick={async () => {
                        try {
                          let url = downloadUrl;
                          const isZip =
                            downloadUrl.slice(-3).toLowerCase() === "zip";
                          if (!isZip) {
                            const response = await fetch(downloadUrl);
                            const blob = await response.blob();
                            url = window.URL.createObjectURL(blob);
                          }
                          const a = document.createElement("a");
                          a.href = url;
                          a.download =
                            downloadUrl.split("/").pop() || "download";
                          document.body.appendChild(a);
                          a.click();
                          document.body.removeChild(a);

                          if (!isZip) window.URL.revokeObjectURL(url);
                        } catch (error) {
                          console.error("Download failed:", error);
                          alert("Failed to download. Please try again.");
                        }
                      }}
                      className="inline-flex items-center gap-2 bg-[#0077B6] text-white px-4 py-2 rounded-md hover:bg-[#174454] transition-colors"
                    >
                      <Download size={16} />
                      Download Now
                    </button>
                  </div>
                ),
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
