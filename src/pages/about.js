import React, { useEffect, useRef } from "react";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-2.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";
import Morty from "@/components/Morty";

const AnimatedNumber = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>About | Portfolio</title>
        <meta
          name="description"
          content="I'm Murtaza, a Full Stack Developer with over 2 years of
          experience in creating dynamic and responsive web applications.
          I specialize in Next, React, Javascript, and Ruby on Rails, and
          have a strong background in both frontend and backend
          development."
        />
      </Head>
      {/* <TransitionEffect /> */}
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="mb-16 lg:!text-7xl sm:text-6xl xs:text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2  md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium">
                Hi, I'm Murtaza, a Full Stack Developer with over 2 years of
                experience in creating dynamic and responsive web applications.
                I specialize in Next, React, Javascript, and Ruby on Rails, and
                have a strong background in both frontend and backend
                development.
              </p>
              <p className="my-4 font-medium">
                My main focus these days is building accessible user interfaces
                for{" "}
                <a
                  href="https://www.eventible.com/"
                  className="hover:text-primary hover:dark:text-primaryDark"
                >
                  <strong>Eventible</strong>
                </a>
                . I most enjoy building software in the sweet spot where design
                and engineering meet — things that look good but are also built
                well under the hood. I am eager to take on challenges and work
                collaboratively to contribute to the organisation`s success!
              </p>
              <p className="font-medium">
                When I’m not at the computer, I’m usually rock climbing,
                reading, hanging out with my friends, listening songs, or playing
                musical instruments.
              </p>
            </div>
            <div
              className="col-span-3 relative h-max rounded-2xl border-2 
            border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light 
            xl:col-span-4 md:order-1 md:col-span-8"
            >
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light"></div>
              <Morty />
              {/* <Image
                src={profilePic}
                alt="profile-photo"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw, 33vw"
              /> */}
            </div>
            <div
              className="col-span-2 flex flex-col items-end justify-between 
            xl:col-span-8 xl:flex-row xl:items-center md:order-3 md:col-span-8"
            >
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={50} />+
                </span>
                <h2
                  className="text-xl font-medium capitalize text-dark/75 dark:text-light/75
                xl:text-center md:text-lg sm:text-base xs:text-sm"
                >
                  satisfied clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold text-right md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={30} />+
                </span>
                <h2
                  className="text-xl font-medium capitalize text-dark/75 dark:text-light/75
                xl:text-center md:text-lg sm:text-base xs:text-sm"
                >
                  projects completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={2} />+
                </span>
                <h2
                  className="text-xl font-medium capitalize text-dark/75 dark:text-light/75
                 xl:text-center md:text-lg sm:text-base xs:text-sm"
                >
                  years of experience
                </h2>
              </div>
            </div>
          </div>
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
