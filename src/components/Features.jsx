// import React, { useRef, useContext } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { FiArrowUpRight } from "react-icons/fi";
// import { Link } from "react-router-dom";
// import { ContextApp } from "../utils/Context";

// // Import your images (ensure paths are correct)
// import Jobspic from "../assets/testFiles/test2.gif";
// import NewsPic from "../assets/testFiles/test4.png";
// import ChatbotPic from "../assets/testFiles/test11.png";
// import ResumeAnalysisPic from "../assets/testFiles/test7.gif";

// export const ModernFeatureSection = () => {
//   const { isOpen, setIsOpen } = useContext(ContextApp);
  
//   const features = [
//     {
//       imgUrl: Jobspic,
//       subheading: "Personalized Job Search",
//       heading: "Find Your Perfect Fit",
//       title: "Discover Your Next Position",
//       description: "Discover opportunities that align with your career ambitions. Our platform connects you to job listings tailored by industry, location, experience level, and more. With intuitive filters, you can zero in on roles that match your professional goals, streamlining the job search process and helping you find your perfect fit.",
//       linkTo: '/search'
//     },
//     {
//       imgUrl: NewsPic,
//       subheading: "Industry Insights at Your Fingertips",
//       heading: "Stay Informed, Stay Ahead",
//       title: "Stay Updated with Key Insights",
//       description: "Knowledge is power, especially in today's fast-paced industries. Our News Hub keeps you informed with the latest trends, insights, and breaking news. From emerging tech to changing market demands, stay ahead with expertly curated content that empowers you to make well-informed career decisions.",
//       linkTo: '/news'
//     },
//     {
//       imgUrl: ChatbotPic,
//       subheading: "Answers When You Need Them",
//       heading: "Your Career AI Guide",
//       title: "Your AI-Powered Career Guide",
//       description: "Meet your on-demand career advisor. Our AI Chatbot is here to answer your questions, offering guidance on job applications, industry trends, and current events. With instant responses and round-the-clock availability, you have a knowledgeable companion to support you in achieving your career goals.",
//       isChat: true
//     },
//     {
//       imgUrl: ResumeAnalysisPic,
//       subheading: "Stand Out in the Crowd",
//       heading: "Optimize Your Resume",
//       title: "Be Job-Ready: Upload Your Resume",
//       description: "Take the guesswork out of resume building. Our Resume Analysis feature lets you upload your resume for feedback and optimization tips. Whether you're fine-tuning your skills section or enhancing your experience, ensure your resume shines and leaves a lasting impression on potential employers.",
//     }
//   ];

//   return (
//     <div className="bg-transparent">
//       {features.map((feature, index) => (
//         <FeatureSection 
//           key={index} 
//           {...feature}
//           handleChatFeatureClick={() => feature.isChat && setIsOpen(prev => !prev)}
//         />
//       ))}
//     </div>
//   );
// };

// const FeatureSection = ({ 
//   imgUrl, 
//   subheading, 
//   heading, 
//   title, 
//   description, 
//   linkTo,
//   handleChatFeatureClick,
//   isChat 
// }) => {
//   return (
//     <div className="relative min-h-screen flex items-center justify-center px-4 py-16">
//       {/* Background Image */}
//       <div 
//         className="absolute inset-0 bg-cover bg-center opacity-30 filter blur-sm" 
        
//       />
      
//       {/* Content Overlay */}
//       <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
//         {/* Text Content */}
//         <div className="bg-black/70 backdrop-blur-sm rounded-2xl p-8 transform hover:scale-105 transition-transform duration-300">
//           <p className="text-lg text-blue-400 mb-4 uppercase tracking-wide">
//             {subheading}
//           </p>
//           <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
//             {title}
//           </h2>
//           <p className="text-xl text-gray-300 mb-8 leading-relaxed">
//             {description}
//           </p>
          
//           {/* Action Button */}
//           {linkTo ? (
//             <Link to={linkTo}>
//               <button className="group relative overflow-hidden rounded-lg bg-white px-6 py-3 text-black transition-all duration-300 hover:bg-blue-600 hover:text-white">
//                 <span className="relative z-10 flex items-center">
//                   Learn More 
//                   <FiArrowUpRight className="ml-2 transition-transform group-hover:rotate-45" />
//                 </span>
//                 <span className="absolute inset-0 bg-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
//               </button>
//             </Link>
//           ) : (
//             <button 
//               onClick={handleChatFeatureClick}
//               className="group relative overflow-hidden rounded-lg bg-white px-6 py-3 text-black transition-all duration-300 hover:bg-blue-600 hover:text-white"
//             >
//               <span className="relative z-10 flex items-center">
//                 Learn More 
//                 <FiArrowUpRight className="ml-2 transition-transform group-hover:rotate-45" />
//               </span>
//               <span className="absolute inset-0 bg-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
//             </button>
//           )}
//         </div>
        
//         {/* Image */}
//         <div className="hidden md:block">
//           <motion.img 
//             src={imgUrl} 
//             alt={heading}
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5 }}
//             className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ModernFeatureSection;

// import React, { useRef, useContext } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { FiArrowUpRight, FiCode, FiTrello, FiTarget, FiTool } from "react-icons/fi";
// import { Link } from "react-router-dom";
// import { ContextApp } from "../utils/Context";

// // Import your images (ensure paths are correct)
// import Jobspic from "../assets/testFiles/test2.gif";
// import NewsPic from "../assets/testFiles/test4.png";
// import ChatbotPic from "../assets/testFiles/test11.png";
// import ResumeAnalysisPic from "../assets/testFiles/test7.gif";

// export const UltraModernFeatureSection = () => {
//   const { isOpen, setIsOpen } = useContext(ContextApp);
  
//   const features = [
//     {
//       icon: FiTarget,
//       imgUrl: Jobspic,
//       color: "from-cyan-500 to-blue-500",
//       subheading: "Precision Job Matching",
//       heading: "Tailored Opportunities",
//       title: "Smart Job Discovery",
//       description: "Leveraging advanced AI algorithms to match your unique skills with precision-targeted job opportunities. Our intelligent platform goes beyond traditional job search, creating a personalized career ecosystem.",
//       linkTo: '/search'
//     },
//     {
//       icon: FiTrello,
//       imgUrl: NewsPic,
//       color: "from-purple-500 to-pink-500",
//       subheading: "Intelligent Insights",
//       heading: "Career Intelligence Hub",
//       title: "Real-Time Industry Pulse",
//       description: "Transform information into opportunity with our cutting-edge news aggregation and trend analysis. Get predictive insights that keep you ahead of the curve in your professional landscape.",
//       linkTo: '/news'
//     },
//     {
//       icon: FiCode,
//       imgUrl: ChatbotPic,
//       color: "from-green-400 to-emerald-600",
//       subheading: "AI-Powered Guidance",
//       heading: "Adaptive Career Companion",
//       title: "Intelligent Career Navigator",
//       description: "Your personal AI strategist, offering contextual, nuanced career advice. From skill development to interview preparation, receive hyper-personalized guidance that evolves with your career journey.",
//       isChat: true
//     },
//     {
//       icon: FiTool,
//       imgUrl: ResumeAnalysisPic,
//       color: "from-orange-400 to-red-500",
//       subheading: "Professional Optimization",
//       heading: "Resume Transformation Engine",
//       title: "Intelligent Resume Crafting",
//       description: "Advanced resume analysis powered by machine learning. We decode industry-specific keywords, optimize formatting, and provide strategic recommendations to elevate your professional narrative.",
//     }
//   ];

//   return (
//     <div className="bg-black">
//       {features.map((feature, index) => (
//         <FeatureSection 
//           key={index} 
//           {...feature}
//           handleChatFeatureClick={() => feature.isChat && setIsOpen(prev => !prev)}
//         />
//       ))}
//     </div>
//   );
// };

// const FeatureSection = ({ 
//   icon: Icon,
//   imgUrl, 
//   color,
//   subheading, 
//   heading, 
//   title, 
//   description, 
//   linkTo,
//   handleChatFeatureClick,
//   isChat 
// }) => {
//   return (
//     <div className="relative min-h-screen flex items-center justify-center px-4 py-16 overflow-hidden">
//       {/* Gradient Background */}
//       <div 
//         className={`absolute inset-0 bg-gradient-to-br ${color} opacity-10`}
//       />
      
//       {/* Animated Background Dots */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute animate-pulse-slow bg-white/10 rounded-full" style={{
//           width: '200px', 
//           height: '200px', 
//           top: '10%', 
//           left: '5%',
//           filter: 'blur(80px)'
//         }} />
//         <div className="absolute animate-pulse-slow bg-white/10 rounded-full" style={{
//           width: '300px', 
//           height: '300px', 
//           bottom: '10%', 
//           right: '5%',
//           filter: 'blur(100px)'
//         }} />
//       </div>

//       {/* Content Container */}
//       <motion.div 
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
//       >
//         {/* Text Content */}
//         <div className="bg-black/50 backdrop-blur-xl rounded-3xl border border-white/10 p-10 space-y-6 transform hover:scale-105 transition-transform duration-500 ease-in-out">
//           <div className="flex items-center space-x-4 mb-4">
//             <Icon className="text-4xl text-white/70" />
//             <p className="text-lg text-white/70 uppercase tracking-widest">
//               {subheading}
//             </p>
//           </div>
          
//           <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50 mb-6">
//             {title}
//           </h2>
          
//           <p className="text-xl text-white/80 leading-relaxed mb-8">
//             {description}
//           </p>
          
//           {/* Modern Action Button */}
//           {linkTo ? (
//             <Link to={linkTo}>
//               <button className="group relative px-8 py-4 rounded-full overflow-hidden border border-white/20 bg-white/5 text-white">
//                 <span className="relative z-10 flex items-center">
//                   Explore Feature
//                   <FiArrowUpRight className="ml-2 transition-transform group-hover:translate-x-2" />
//                 </span>
//                 <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//               </button>
//             </Link>
//           ) : (
//             <button 
//               onClick={handleChatFeatureClick}
//               className="group relative px-8 py-4 rounded-full overflow-hidden border border-white/20 bg-white/5 text-white"
//             >
//               <span className="relative z-10 flex items-center">
//                 Activate AI Guide
//                 <FiArrowUpRight className="ml-2 transition-transform group-hover:translate-x-2" />
//               </span>
//               <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//             </button>
//           )}
//         </div>
        
//         {/* Image Container */}
//         <div className="hidden md:block">
//           <motion.div 
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6 }}
//             className="relative"
//           >
//             <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-50" />
//             <img 
//               src={imgUrl} 
//               alt={heading}
//               className="relative z-10 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500 border-4 border-white/10"
//             />
//           </motion.div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default UltraModernFeatureSection;

// import React, { useContext } from "react";
// import { motion } from "framer-motion";
// import { FiArrowUpRight, FiCode, FiTrello, FiTarget, FiTool } from "react-icons/fi";
// import { Link } from "react-router-dom";
// import { ContextApp } from "../utils/Context";

// // Import your images (ensure paths are correct)
// import Jobspic from "../assets/testFiles/test2.gif";
// import NewsPic from "../assets/testFiles/test4.png";
// import ChatbotPic from "../assets/testFiles/test11.png";
// import ResumeAnalysisPic from "../assets/testFiles/test7.gif";

// export const AlternatingFeaturesSection = () => {
//   const { isOpen, setIsOpen } = useContext(ContextApp);
  
//   const features = [
//     {
//       icon: FiTarget,
//       imgUrl: Jobspic,
//       color: "from-cyan-500 to-blue-500",
//       subheading: "Precision Job Matching",
//       heading: "Tailored Opportunities",
//       title: "Smart Job Discovery",
//       description: "Leveraging advanced AI algorithms to match your unique skills with precision-targeted job opportunities. Our intelligent platform goes beyond traditional job search, creating a personalized career ecosystem.",
//       linkTo: '/search'
//     },
//     {
//       icon: FiTrello,
//       imgUrl: NewsPic,
//       color: "from-purple-500 to-pink-500",
//       subheading: "Intelligent Insights",
//       heading: "Career Intelligence Hub",
//       title: "Real-Time Industry Pulse",
//       description: "Transform information into opportunity with our cutting-edge news aggregation and trend analysis. Get predictive insights that keep you ahead of the curve in your professional landscape.",
//       linkTo: '/news'
//     },
//     {
//       icon: FiCode,
//       imgUrl: ChatbotPic,
//       color: "from-green-400 to-emerald-600",
//       subheading: "AI-Powered Guidance",
//       heading: "Adaptive Career Companion",
//       title: "Intelligent Career Navigator",
//       description: "Your personal AI strategist, offering contextual, nuanced career advice. From skill development to interview preparation, receive hyper-personalized guidance that evolves with your career journey.",
//       isChat: true
//     },
//     {
//       icon: FiTool,
//       imgUrl: ResumeAnalysisPic,
//       color: "from-orange-400 to-red-500",
//       subheading: "Professional Optimization",
//       heading: "Resume Transformation Engine",
//       title: "Intelligent Resume Crafting",
//       description: "Advanced resume analysis powered by machine learning. We decode industry-specific keywords, optimize formatting, and provide strategic recommendations to elevate your professional narrative.",
//     }
//   ];

//   return (
//     <div className="bg-black">
//       {features.map((feature, index) => (
//         <FeatureSection 
//           key={index} 
//           {...feature}
//           isReverse={index % 2 !== 0}
//           handleChatFeatureClick={() => feature.isChat && setIsOpen(prev => !prev)}
//         />
//       ))}
//     </div>
//   );
// };

// const FeatureSection = ({ 
//   icon: Icon,
//   imgUrl, 
//   color,
//   subheading, 
//   heading, 
//   title, 
//   description, 
//   linkTo,
//   isReverse,
//   handleChatFeatureClick,
//   isChat 
// }) => {
//   return (
//     <div className="relative min-h-screen flex items-center justify-center px-4 py-16 overflow-hidden">
//       {/* Gradient Background */}
//       <div 
//         className={`absolute inset-0 bg-gradient-to-br ${color} opacity-10`}
//       />
      
//       {/* Animated Background Dots */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute animate-pulse-slow bg-white/10 rounded-full" style={{
//           width: '200px', 
//           height: '200px', 
//           top: '10%', 
//           left: '5%',
//           filter: 'blur(80px)'
//         }} />
//         <div className="absolute animate-pulse-slow bg-white/10 rounded-full" style={{
//           width: '300px', 
//           height: '300px', 
//           bottom: '10%', 
//           right: '5%',
//           filter: 'blur(100px)'
//         }} />
//       </div>

//       {/* Content Container */}
//       <motion.div 
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className={`relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center ${isReverse ? 'md:flex-row-reverse' : ''}`}
//       >
//         {/* Image Container */}
//         <div className={`hidden md:block ${isReverse ? 'md:order-2' : 'md:order-1 '}`}>
//   <motion.div 
//     initial={{ opacity: 0, scale: 0.9 }}
//     whileInView={{ opacity: 1, scale: 1 }}
//     transition={{ duration: 0.6 }}
//     className="relative w-100 h-100 md:w-96 md:h-96" // Set consistent dimensions
//   >
//     <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-50" />
//     <img 
//       src={imgUrl} 
//       alt={heading}
//       className="relative z-10 rounded-3xl shadow-2xl object-cover w-full h-full border-4 border-white/10" // Ensures the image fills the container proportionally
//     />
//   </motion.div>
// </div>

        
//         {/* Text Content */}
//         <div className={`bg-black/50 backdrop-blur-xl rounded-3xl border border-white/10 p-10 space-y-6 transform hover:scale-105 transition-transform duration-500 ease-in-out ${isReverse ? 'md:order-1' : 'md:order-2'}`}>
//           <div className="flex items-center space-x-4 mb-4">
//             <Icon className="text-4xl text-white/70" />
//             <p className="text-lg text-white/70 uppercase tracking-widest">
//               {subheading}
//             </p>
//           </div>
          
//           <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50 mb-6">
//             {title}
//           </h2>
          
//           <p className="text-xl text-white/80 leading-relaxed mb-8">
//             {description}
//           </p>
          
//           {/* Modern Action Button */}
//           {linkTo ? (
//             <Link to={linkTo}>
//               <button className="group relative px-8 py-4 rounded-full overflow-hidden border border-white/20 bg-white/5 text-white">
//                 <span className="relative z-10 flex items-center">
//                   Explore Feature
//                   <FiArrowUpRight className="ml-2 transition-transform group-hover:translate-x-2" />
//                 </span>
//                 <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//               </button>
//             </Link>
//           ) : (
//             <button 
//               onClick={handleChatFeatureClick}
//               className="group relative px-8 py-4 rounded-full overflow-hidden border border-white/20 bg-white/5 text-white"
//             >
//               <span className="relative z-10 flex items-center">
//                 Activate AI Guide
//                 <FiArrowUpRight className="ml-2 transition-transform group-hover:translate-x-2" />
//               </span>
//               <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//             </button>
//           )}
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default AlternatingFeaturesSection;
import React, { useContext } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiCode, FiTrello, FiTarget, FiTool } from "react-icons/fi";
import { Link } from "react-router-dom";
import { ContextApp } from "../utils/Context";

// Import your images (ensure paths are correct)
import Jobspic from "../assets/testFiles/test2.gif";
import NewsPic from "../assets/testFiles/test4.png";
import ChatbotPic from "../assets/testFiles/test11.png";
import ResumeAnalysisPic from "../assets/testFiles/test7.gif";

export const AlternatingFeaturesSection = () => {
  const { isOpen, setIsOpen } = useContext(ContextApp);
  
  const features = [
    {
      icon: FiTarget,
      imgUrl: Jobspic,
      color: "from-cyan-500 to-blue-500",
      subheading: "Precision Job Matching",
      heading: "Tailored Opportunities",
      title: "Smart Job Discovery",
      description: "Leveraging advanced AI algorithms to match your unique skills with precision-targeted job opportunities. Our intelligent platform goes beyond traditional job search, creating a personalized career ecosystem.",
      linkTo: '/search'
    },
    {
      icon: FiTrello,
      imgUrl: NewsPic,
      color: "from-purple-500 to-pink-500",
      subheading: "Intelligent Insights",
      heading: "Career Intelligence Hub",
      title: "Real-Time Industry Pulse",
      description: "Transform information into opportunity with our cutting-edge news aggregation and trend analysis. Get predictive insights that keep you ahead of the curve in your professional landscape.",
      linkTo: '/news'
    },
    {
      icon: FiCode,
      imgUrl: ChatbotPic,
      color: "from-green-400 to-emerald-600",
      subheading: "AI-Powered Guidance",
      heading: "Adaptive Career Companion",
      title: "Intelligent Career Navigator",
      description: "Your personal AI strategist, offering contextual, nuanced career advice. From skill development to interview preparation, receive hyper-personalized guidance that evolves with your career journey.",
      isChat: true
    },
    {
      icon: FiTool,
      imgUrl: ResumeAnalysisPic,
      color: "from-orange-400 to-red-500",
      subheading: "Professional Optimization",
      heading: "Resume Transformation Engine",
      title: "Intelligent Resume Crafting",
      description: "Advanced resume analysis powered by machine learning. We decode industry-specific keywords, optimize formatting, and provide strategic recommendations to elevate your professional narrative.",
    }
  ];

  return (
    <div className="bg-transparent">
      {features.map((feature, index) => (
        <FeatureSection 
          key={index} 
          {...feature}
          isReverse={index % 2 !== 0}
          handleChatFeatureClick={() => feature.isChat && setIsOpen(prev => !prev)}
        />
      ))}
    </div>
  );
};

const FeatureSection = ({ 
  icon: Icon,
  imgUrl, 
  color,
  subheading, 
  heading, 
  title, 
  description, 
  linkTo,
  isReverse,
  handleChatFeatureClick,
  isChat 
}) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-16 overflow-hidden">
      
      

      {/* Content Container */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center ${isReverse ? 'md:flex-row-reverse' : ''}`} // Increased gap from gap-12 to gap-16
      >
        {/* Image Container */}
        <div className={`hidden md:block ${isReverse ? 'md:order-2' : 'md:order-1'} pl-8`}> {/* Added pl-8 (padding-left) to create more space */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative w-100 h-100 md:w-96 md:h-96" // Set consistent dimensions
          >
            
            <img 
              src={imgUrl} 
              alt={heading}
              className="relative z-10 rounded-3xl shadow-2xl object-cover w-full h-full border-4 border-white/10" // Ensures the image fills the container proportionally
            />
          </motion.div>
        </div>
        
        {/* Text Content */}
        <div 
          className={`
            bg-zinc-600
            rounded-3xl  
            p-10 
            space-y-6 
            transform 
            hover:scale-105 
            transition-transform 
            duration-500 
            ease-in-out 
            flex 
            flex-col 
            justify-between 
            min-h-[300px] 
            ${isReverse ? 'md:order-1 pr-8' : 'md:order-2 pl-8'}
          `}
        >
          <div>
            <div className="flex items-center space-x-4 mb-4">
              <Icon className="text-4xl text-white/70" />
              <p className="text-lg text-white/70 uppercase tracking-widest">
                {subheading}
              </p>
            </div>
            
            <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-white mb-6">
              {title}
            </h2>
            
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              {description}
            </p>
          </div>
          
          {/* Modern Action Button */}

            <Link to={linkTo}>
              <button className="group relative px-8 py-4 rounded-full overflow-hidden border border-white/20 bg-white/5 text-white">
                <span className="relative z-10 flex items-center">
                  Explore Feature
                  <FiArrowUpRight className="ml-2 transition-transform group-hover:translate-x-2" />
                </span>
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </Link>

        </div>
      </motion.div>
    </div>
  );
};

export default AlternatingFeaturesSection;