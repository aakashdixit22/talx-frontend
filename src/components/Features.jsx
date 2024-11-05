import React, { useRef, useContext } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import test from "../assets/testFiles/test.gif";
import Jobspic from "../assets/testFiles/test2.gif";
import NewsPic from "../assets/testFiles/test4.png";
import ChatbotPic from "../assets/testFiles/test11.png";
import ResumeAnalysisPic from "../assets/testFiles/test7.gif";
import { Link } from "react-router-dom";
import { ContextApp } from "../utils/Context";

export const TextParallaxContentExample = () => {
  const {isOpen, setIsOpen} = useContext(ContextApp);
  const handleChatFeatureClick = ()=>{
    setIsOpen(!isOpen)
  }
  return (
    <div className="bg-transparent">
      <TextParallaxContent
        imgUrl={Jobspic}
        subheading="Personalized Job Search"
        heading="Find Your Perfect Fit"
      >
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
          <h2 className="col-span-1 text-3xl font-bold text-white md:col-span-4">
            Discover Your Next Position
          </h2>
          <div className="col-span-1 md:col-span-8">
            <p className="mb-4 text-xl text-white md:text-2xl">
              Discover opportunities that align with your career ambitions. Our platform connects you to job listings tailored by industry, location, experience level, and more. With intuitive filters, you can zero in on roles that match your professional goals, streamlining the job search process and helping you find your perfect fit.
            </p>
            <Link to='/search'>
            <button className="w-full rounded-2xl bg-white px-9 py-4 text-xl text-black transition-colors hover:bg-neutral-700 hover:text-white md:w-fit">
              Learn more <FiArrowUpRight className="inline" />
            </button>
            </Link>
            
          </div>
        </div>
      </TextParallaxContent>

      <TextParallaxContent
        imgUrl={NewsPic}
        subheading="Industry Insights at Your Fingertips"
        heading="Stay Informed, Stay Ahead"
      >
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
          <h2 className="col-span-1 text-3xl font-bold text-white md:col-span-4">
            Stay Updated with Key Insights
          </h2>
          <div className="col-span-1 md:col-span-8">
            <p className="mb-4 text-xl text-white md:text-2xl">
              Knowledge is power, especially in today’s fast-paced industries. Our News Hub keeps you informed with the latest trends, insights, and breaking news. From emerging tech to changing market demands, stay ahead with expertly curated content that empowers you to make well-informed career decisions.
            </p>
            <Link to='/news'>
            <button className="w-full rounded-2xl bg-white px-9 py-4 text-xl text-black transition-colors hover:bg-neutral-700 hover:text-white md:w-fit">
              Learn more <FiArrowUpRight className="inline" />
            </button>
            </Link>
          </div>
        </div>
      </TextParallaxContent>

      <TextParallaxContent
        imgUrl={ChatbotPic}
        subheading="Answers When You Need Them"
        heading="Your Career AI Guide"
      >
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
          <h2 className="col-span-1 text-3xl font-bold text-white md:col-span-4">
            Your AI-Powered Career Guide
          </h2>
          <div className="col-span-1 md:col-span-8">
            <p className="mb-4 text-xl text-white md:text-2xl">
              Meet your on-demand career advisor. Our AI Chatbot is here to answer your questions, offering guidance on job applications, industry trends, and current events. With instant responses and round-the-clock availability, you have a knowledgeable companion to support you in achieving your career goals.
            </p>
            
            <button
            onClick={handleChatFeatureClick}
             className="w-full rounded-2xl bg-white px-9 py-4 text-xl text-black transition-colors hover:bg-neutral-700 hover:text-white md:w-fit">
              Learn more <FiArrowUpRight className="inline" />
            </button>
            
          </div>
        </div>
      </TextParallaxContent>

      <TextParallaxContent
        imgUrl={ResumeAnalysisPic}
        subheading="Stand Out in the Crowd"
        heading="Optimize Your Resume"
      >
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
          <h2 className="col-span-1 text-3xl font-bold text-white md:col-span-4">
            Be Job-Ready: Upload Your Resume
          </h2>
          <div className="col-span-1 md:col-span-8">
            <p className="mb-4 text-xl text-white md:text-2xl">
              Take the guesswork out of resume building. Our Resume Analysis feature lets you upload your resume for feedback and optimization tips. Whether you’re fine-tuning your skills section or enhancing your experience, ensure your resume shines and leaves a lasting impression on potential employers.
            </p>
            <button className="w-full rounded-2xl bg-white px-9 py-4 text-xl text-black transition-colors hover:bg-neutral-700 hover:text-white md:w-fit">
              Learn more <FiArrowUpRight className="inline" />
            </button>
          </div>
        </div>
      </TextParallaxContent>
    </div>
  );
};
const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[100vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "75vh", // Apply reduced height
        width: "100%", // Make width responsive
        maxWidth: "1200px", // Set a max width
        margin: "0 auto", // Center the image horizontally
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <div className="bg-[#05081c] p-2 rounded-2xl">
        <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
      </div>
    </motion.div>
  );
};

