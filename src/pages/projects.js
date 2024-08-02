import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import foodOrderImg from "../../public/images/projects/food-order-app.png";
import expenseTracker from "../../public/images/projects/expense-tracker.png";
import helloWorld from "../../public/images/projects/hello-world.png";
import cardHoverEffect from "../../public/images/projects/card-hover-effect.png";
import bankistApp from "../../public/images/projects/bankist-app.png";
import calculator from "../../public/images/projects/calculator.png";
import notebook from "../../public/images/projects/notebook.png";
import eCommerceWebsite from "../../public/images/projects/e-commerce-website.png";
import boxAnimationEffect from "../../public/images/projects/box-animation-effect.png";
import modalWindow from "../../public/images/projects/modal-window.png";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl 
    border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark 
      dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"
      ></div>

      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
            dark:bg-light dark:text-dark
            sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl
    border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] 
      bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"
      ></div>

      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw, 50vw"
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <>
      <Head>
        <title>Projects | Portfolio</title>
        <meta
          name="description"
          content="Explore a showcase of innovative projects demonstrating expertise in web development, 
            design, and programming. From dynamic web applications to creative design solutions, 
            discover the diverse portfolio that highlights my technical skills and creative 
            problem-solving abilities."
        />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Food Order Application"
                img={foodOrderImg}
                summary="An expense tracker project is a practical application designed to help users 
                manage and track their daily expenses. Where the user can fill out the form and add expenses. 
                Plus filtering out expenses by year."
                link="https://food-order-application-six.vercel.app/"
                type="React, Context API, Firebase"
                github="https://github.com/murtazshaikh/31_Food_Order_Application"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Expense Tracker"
                img={expenseTracker}
                summary="An expense tracker project is a practical application designed to help users manage 
                  and track their daily expenses. Where user can fill the form and add expenses. 
                  Plus filtering out expenses by year."
                link="https://expense-tracker-navy-one.vercel.app/"
                type="React"
                github="https://github.com/murtazshaikh/30_Expense_Tracker"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Hello World"
                img={helloWorld}
                link="https://hello-world-murtazshaikh.vercel.app/"
                type="HTML5, CSS3"
                github="https://github.com/murtazshaikh/19_Hello_World"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Card Hover Effect"
                img={cardHoverEffect}
                link="https://murtazshaikh.github.io/02_Card_Hover_Effects/"
                type="HTML5, CSS3"
                github="https://github.com/murtazshaikh/02_Card_Hover_Effects"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                title="Bankist App"
                img={bankistApp}
                summary="Login and logout functionality for users. Display of account balance, 
                  summary of income and expenses, and detailed transaction history. Ability to 
                  transfer money between accounts, often including internal and external transfers. 
                  Sorting transactions by date, amount, etc. And an automatic logout after 2 minutes from logging in."
                link="https://murtazshaikh.github.io/29_Bankist_App/"
                type="Vanilla Javascript"
                github="https://github.com/murtazshaikh/29_Bankist_App"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Calculator"
                img={calculator}
                link="https://26-calculator.vercel.app/"
                type="Vanilla Javascript"
                github="https://github.com/murtazshaikh/26_Calculator"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Notebook"
                img={notebook}
                link="https://murtazshaikh.github.io/04_NoteBook/"
                type="HTML5, CSS3"
                github="https://github.com/murtazshaikh/04_NoteBook"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="E-Commerce Website"
                img={eCommerceWebsite}
                summary="Designed and developed a responsive e-commerce website using HTML 
                  and CSS, featuring a user-friendly interface, product listings, shopping 
                  cart functionality, and a secure checkout process. The project demonstrates 
                  proficiency in front-end development and attention to detail in design."
                link="https://e-commerce-website-zeta.vercel.app/"
                type="HTML5, CSS3, Vanilla Javascript"
                github="https://github.com/murtazshaikh/01_E-Commerce_Website"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="3D Design"
                img={boxAnimationEffect}
                link="https://box-animation-effect.vercel.app/"
                type="HTML5, CSS3"
                github="https://github.com/murtazshaikh/08_Box_Animation_Effect"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Modal Window"
                img={modalWindow}
                link="https://murtazshaikh.github.io/23_Modal_Window/"
                type="HTML5, CSS3"
                github="https://github.com/murtazshaikh/23_Modal_Window"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
