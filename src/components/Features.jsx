import React, { useContext } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiCode, FiTrello, FiTarget, FiTool } from "react-icons/fi";
import { Link } from "react-router-dom";
import { ContextApp } from "../utils/Context";

// Import your images (ensure paths are correct)
import Jobspic from "../assets/testFiles/test2.gif";
import NewsPic from "../assets/testFiles/newsGraphic.png";
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
      linkTo: '/resume'
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
            className="relative w-120 h-120 md:w-100 md:h-100" // Set consistent dimensions
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
              <Icon className="text-3xl text-white/70" />
              <p className="text-lg text-white/70 uppercase tracking-widest">
                {subheading}
              </p>
            </div>
            
            <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-white mb-6">
              {title}
            </h2>
            
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              {description}
            </p>
          </div>
          
          {/* Modern Action Button */}

            <Link to={linkTo}>
              <button className="group relative px-8 py-4 rounded-full overflow-hidden border bg-white text-black font-bold shadow-md shadow-primary hover:bg-gray-400 transition-all">
                <span className="relative z-10 flex items-center">
                  Explore Feature
                  <FiArrowUpRight className="ml-2 transition-transform group-hover:translate-x-2" />
                </span>
              </button>
            </Link>

        </div>
      </motion.div>
    </div>
  );
};

export default AlternatingFeaturesSection;
