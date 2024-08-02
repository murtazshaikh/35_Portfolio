import React, { useEffect, useRef } from "react";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-2.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import TransitionEffect from "@/components/TransitionEffect";

const skills = () => {
  return (
    <>
      <Head>
        <title>Skills | Portfolio</title>
        <meta
          name="description"
          content="Discover my diverse skill set ranging from web development, 
            design, and programming to project management and problem-solving. 
            Explore the comprehensive skills that drive my professional success 
            and fuel my passion for technology and innovation."
        />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Skills"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <Skills />
        </Layout>
      </main>
    </>
  );
};

export default skills;
