import { Link } from "react-router-dom";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

import gadgetgalaxy from "../assets/images/gadgetgalaxy.png";
import hivehaus from "../assets/images/hivehaus.png";
import nextjs from "../assets/images/nextjs.webp";
import react from "../assets/images/react.webp";
import expo from "../assets/images/expo.webp";
import api from "../assets/images/api.webp";

const HomeComponent = () => {
  return (
    <section className="mt-16">
      {/* About Intro */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Card className="bg-white dark:bg-card p-6 rounded-2xl shadow">
          <CardContent>
            <p className="text-lg tracking-wide text-text">
              <span className="dark:text-theme">Hi!</span> There I’m
            </p>
            <h2 className="mt-5  text-2xl font-semibold md:text-5xl leading-tight text-btn dark:text-white">
              Professional{" "}
              <span className="text-theme">
                Full Stack Web/Mobile Application
              </span>{" "}
              <br /> Developer
            </h2>
            <p className="mt-4 text-sm font-medium  dark:text-gray-400 ">
              I am a skilled web and mobile app developer with 3+ years of
              experience. Proficient in
              <b>
                <mark>
                  {" "}
                  Typescript, React, React Native, Expo, Next.js, and Node.js,
                </mark>
              </b>{" "}
              I have a strong foundation in full-stack development, including{" "}
              <b>
                <mark>MongoDB and MySQL</mark>
              </b>
              . My expertise extends to the{" "}
              <b>
                <mark>MERN Stack, Expo Apps</mark>{" "}
              </b>{" "}
              and creating scalable, production-ready apps.
            </p>
          </CardContent>
        </Card>

        {/* About + Services + Experience + Projects */}
        <div className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Left Section */}
            <div className="md:col-span-5 space-y-8">
              <Card className="bg-white dark:bg-card p-6 rounded-2xl shadow">
                <CardContent>
                  <Link to="/service">
                    <h3 className="text-xl tracking-widest text-btn dark:text-white">
                      Services Offer
                    </h3>
                  </Link>
                  <p className="text-sm text-text dark:text-white mb-4">
                    Specialization
                  </p>
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      { name: "React Web Apps", icon: react },
                      { name: "Next.JS Apps", icon: nextjs },
                      { name: "Expo Mobile Apps", icon: expo },
                      { name: "API Integration", icon: api },
                    ].map((service) => (
                      <div
                        key={service.name}
                        className="border flex flex-row items-center justify-betweend gap-3 p-2  dark:bg-btn rounded-lg shadow boxShadow"
                      >
                        <img
                          className="w-[60px] h-[60px]   rounded-4xl object-cover"
                          src={service.icon}
                          alt={service.name}
                        />
                        <h3>{service.name}</h3>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-card p-6 rounded-2xl shadow">
                <CardContent className="grid grid-cols-2">
                  <div>
                    <h2 className="text-4xl font-bold text-btn dark:text-theme">
                      <TrackVisibility once>
                        {({ isVisible }) =>
                          isVisible && (
                            <>
                              <CountUp end={3} />
                              {"+"}
                            </>
                          )
                        }
                      </TrackVisibility>
                    </h2>
                    <p className="text-sm text-text dark:text-white">
                      Years of Experience
                    </p>
                  </div>
                  <div>
                    <h2 className="text-4xl font-bold text-btn dark:text-theme">
                      <TrackVisibility once>
                        {({ isVisible }) =>
                          isVisible && (
                            <>
                              <CountUp end={35} />
                              {"+"}
                            </>
                          )
                        }
                      </TrackVisibility>
                    </h2>
                    <p className="text-sm text-text dark:text-white">
                      Project Completed
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Section */}
            <div className="md:col-span-7 space-y-8">
              <Card className="bg-white dark:bg-card p-6 rounded-2xl shadow">
                <CardContent>
                  <Link to="/projects/">
                    <h3 className="text-xl tracking-widest text-btn dark:text-white dark:hover:text-pink-600 hover:text-pink-600">
                      Projects
                    </h3>
                  </Link>
                  <p className="text-sm text-text dark:text-white mb-4">
                    Showcase View
                  </p>
                  <div className="flex gap-4">
                    {[
                      {
                        name: "HiveHaus",
                        desc: "HiveHaus is a modern platform for renting premium office spaces. Easily explore, book, and manage rentals with a seamless experience.",
                        img: hivehaus,
                        link: "https://hivehaus.vercel.app/",
                      },
                      {
                        name: "GadgetGalaxy",
                        desc: "Gadget-Galaxy is an online marketplace to buy and sell products. Post or browse listings for electronics, vehicles, real estate, jobs, and more.",
                        img: gadgetgalaxy,
                        link: "https://gadget-galaxy-seven.vercel.app/",
                      },
                    ].map((proj) => (
                      <div
                        key={proj.name}
                        className="overflow-hidden rounded-lg"
                      >
                        <Link to={proj.link} target="_blank">
                          <img
                            src={proj.img}
                            alt={proj.name}
                            className="transition-all duration-300 hover:scale-110"
                          />
                        </Link>
                        <h1 className="text-2xl mt-2">{proj.name}</h1>
                        {/* <p className="text-sm text-text dark:text-white">
                          {proj.desc}
                        </p> */}
                        <p className="text-sm text-text dark:text-white line-clamp-3 md:line-clamp-none">
                          {proj.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-white dark:bg-card p-6 rounded-2xl shadow hero-pattern">
                  <CardContent>
                    <p className="text-sm text-text dark:text-white">
                      Let’s work
                    </p>
                    <Link to="/contact">
                      <h3 className="text-xl  text-btn dark:text-white">
                        Contact
                      </h3>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HomeComponent;
