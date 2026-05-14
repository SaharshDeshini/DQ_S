import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { motion } from "framer-motion";

import router from "./pages";

import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import Loading from "./components/Loading";
import Footer from "./components/Footer";
import { PromoDiv } from "./components/PromoDiv";
import events from "./data/events";

function App() {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const loadingAnimationBlacklist = ["/hit", "/hit-gen-qr-ultrasecretendpoint", "/register", "/register/ssd","/events/SSD/submissions"];
  const headerBlacklist = ["/hit", "/register", "/register/ssd"];
  const promoBlacklist = ["/hit", "/hit-gen-qr-ultrasecretendpoint", "/register", "/register/ssd"];

  function PromoSection() {
    return (
      <div className="fixed bottom-2 md:bottom-14 right-2 flex flex-col gap-2 z-10">
        {events.upcoming.map((e, i) => (
          <PromoDiv
            key={i}
            eventName={e.name}
            eventLink={e.link}
            eventStatus="upcoming"
          />
        ))}
      </div>
    );
  }

  function DynamicComponent({ Component, blacklist, ...props }) {
    const { pathname: currentPath } = useLocation();

    return (
      <>
        {!blacklist.some((path) => path === currentPath) && (
          <Component {...props} />
        )}
      </>
    );
  }

  return (
    <Router>
      <Analytics />
      <DynamicComponent
        Component={Loading}
        blacklist={loadingAnimationBlacklist}
        load={load}
      />
      <DynamicComponent Component={Header} blacklist={headerBlacklist} />
      <ScrollToTop />
      <motion.div 
        className="flex flex-col min-h-screen bg-blue-50/70"
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.5, delay: 2.2, ease: "easeOut" }}
      >
        <Routes>
          {router.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </motion.div>
      <DynamicComponent Component={PromoSection} blacklist={promoBlacklist} />
      <DynamicComponent Component={Footer} blacklist={headerBlacklist} />
    </Router>
  );
}

export default App;
