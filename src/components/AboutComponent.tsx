// import { Progress } from "@nextui-org/react";
import { Card } from "@/components/ui/card";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import TrackVisibility from "react-on-screen";
import profile from "../assets/images/Profile.png";

const skills = [
  { name: "Expo", value: 60 },
  { name: "React JS", value: 90 },
  { name: "Next JS", value: 80 },
  { name: "TypeScript", value: 60 },
  { name: "MySql", value: 65 },
  { name: "MongoDB", value: 75 },
  { name: "Postgres", value: 65 },
  { name: "Github", value: 85 },
  { name: "Docker", value: 68 },
];

export default function AboutComponent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="mt-16"
    >
      {/* About Section */}

      <Card className="px-4 py-6 sm:p-10 dark:bg-card">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
          <div className="md:col-span-4 flex justify-center">
            <img
              src={profile}
              alt="Profile"
              className="w-[120px] sm:w-[160px] md:w-auto max-w-full h-auto rounded-full"
            />
          </div>

          <div className="md:col-span-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-btn dark:text-white">
              About Me<span className="text-theme">!</span>
            </h1>

            <p className="mt-3 text-xs sm:text-sm font-medium dark:text-gray-400">
              My expertise includes{" "}
              <b className="bg-theme/10 px-1 rounded">
                <mark>Full-Stack</mark>
              </b>{" "}
              development using the{" "}
              <b className="bg-theme/10 px-1 rounded">
                <mark>MERN</mark>
              </b>{" "}
              stack, database management with{" "}
              <b>
                <mark>MongoDB and MySQL</mark>
              </b>
              , and deploying efficient solutions with{" "}
              <b className="bg-theme/10 px-1 rounded">
                <mark>Expo and React Native</mark>
              </b>
              . I also have experience integrating tools like convex and working
              with various development environments, including Linux and Ubuntu.
              Additionally, I'm continuously learning, currently focusing on
              Angular, DSA with JavaScript.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row flex-wrap gap-6 sm:gap-10">
              <div className="flex items-center gap-3">
                <h2 className="text-3xl sm:text-4xl text-theme">
                  <TrackVisibility once>
                    {({ isVisible }) =>
                      isVisible && (
                        <>
                          <CountUp delay={0} start={0} end={35} />+
                        </>
                      )
                    }
                  </TrackVisibility>
                </h2>
                <p className="text-xs sm:text-sm leading-4 text-text">
                  Projects
                  <br />
                  Completed
                </p>
              </div>

              <div className="flex items-center gap-3">
                <h2 className="text-3xl sm:text-4xl text-theme">
                  <TrackVisibility once>
                    {({ isVisible }) =>
                      isVisible && (
                        <>
                          <CountUp delay={0} start={0} end={15} />+
                        </>
                      )
                    }
                  </TrackVisibility>
                </h2>
                <p className="text-xs sm:text-sm leading-4 text-text">
                  Satisfied
                  <br />
                  Clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Experience & Education */}
      <div className="grid grid-cols-12 gap-6 mt-8">
        <div className="col-span-12 md:col-span-6">
          <Card className="p-6 dark:bg-cardd">
            <h2 className="text-xl font-semibold text-btn dark:text-white">
              EXPERIENCE
            </h2>
            <div className="mt-4">
              <p className="text-sm text-text">2023 - 2024</p>
              <p className="text-base font-medium text-btn dark:text-white mt-1">
                Open Source
              </p>
              <p className="text-xs text-text">Firecamp.dev</p>

              <div className="mt-4">
                <p className="text-sm text-text">2023 - present</p>
                <p className="text-base font-medium text-btn dark:text-white mt-1">
                  Full stack Web Developer (MERN)
                </p>
                <p className="text-base font-medium text-btn dark:text-white mt-1">
                  React Native Apps (EXPO)
                </p>
              </div>
            </div>
          </Card>
        </div>
        <div className="col-span-12 md:col-span-6">
          <Card className="p-6 dark:bg-card">
            <h2 className="text-xl font-semibold text-btn dark:text-white">
              EDUCATION
            </h2>
            <div className="mt-4">
              <p className="text-sm text-text">2021 - Present</p>
              <p className="text-base font-medium text-btn dark:text-white mt-1">
                Research on Native & Web Application
              </p>
              <p className="text-xs text-text">
                Learn With CS50 || Udemy || Youtube
              </p>

              <div className="mt-4">
                <p className="text-sm text-text">2023 - 2024</p>
                <p className="text-base font-medium text-btn dark:text-white mt-1">
               Full Stack Web Development (MERN)
                </p>
                <p className="text-xs text-text">
                  Ostad Institute, Bangladesh
                </p>
              </div>
              <div className="mt-4">
                <p className="text-sm text-text">2019 - 2024</p>
                <p className="text-base font-medium text-btn dark:text-white mt-1">
                  Bachelor of Science (BSC)
                </p>
                <p className="text-xs text-text">
                  National University, Bangladesh
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Skills Section */}
      <Card className="p-6 mt-8 dark:bg-card">
        <h2 className="text-xl font-semibold text-btn dark:text-white">
          MY SPECIALIZATION
        </h2>
        <div className="mt-6 space-y-5">
          {skills.map(({ name, value }) => (
            <div key={name}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-btn dark:text-white">
                  {name}
                </span>
                <span className="text-sm font-medium text-btn dark:text-white">
                  {value}%
                </span>
              </div>

              <div className="relative w-full h-4 bg-gray-200 rounded">
                <div
                  className="absolute top-0 left-0 h-4 bg-green-500 rounded"
                  style={{ width: `${value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}
