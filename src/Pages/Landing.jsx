// import React from 'react'
// import Hero from '../components/Hero';
// import {TextParallaxContentExample} from '../components/Features';
// import Testimonials from '../components/Testimonials';
// import Contact from '../components/Contact';
// import Footer from '../components/Footer';



// const Landing = () => {
//   return (
//     <>
//     <Hero />
//     <TextParallaxContentExample />
    
//     <Testimonials />
//     <div className='bg-zinc-900'>
//       <Contact />
//     </div>
//     <Footer />
    
//     </>
//   )
// }

// export default Landing

// import React from 'react'
// import Hero from '../components/Hero';
// import { TextParallaxContentExample } from '../components/Features';
// import Testimonials from '../components/Testimonials';
// import Contact from '../components/Contact';
// import Footer from '../components/Footer';
// import { useMotionValue, motion, useMotionTemplate } from 'framer-motion';
// import { cn } from '../libs/utils';

// // Reusable Background Highlight Component
// export const PageBackgroundHighlight = ({ children, className }) => {
//   let mouseX = useMotionValue(0);
//   let mouseY = useMotionValue(0);

//   function handleMouseMove({ currentTarget, clientX, clientY }) {
//     if (!currentTarget) return;
//     let { left, top } = currentTarget.getBoundingClientRect();

//     mouseX.set(clientX - left);
//     mouseY.set(clientY - top);
//   }

//   return (
//     <div
//       className={cn(
//         "relative min-h-screen flex flex-col bg-black",
//         className
//       )}
//       onMouseMove={handleMouseMove}
//     >
//       {/* Background Layer */}
//       <div className="absolute inset-0 bg-dot-thick-neutral-800 pointer-events-none" />
//       <motion.div
//         className="pointer-events-none bg-dot-thick-indigo-500 absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
//         style={{
//           WebkitMaskImage: useMotionTemplate`radial-gradient(200px circle at ${mouseX}px ${mouseY}px, black 0%, transparent 100%)`,
//           maskImage: useMotionTemplate`radial-gradient(200px circle at ${mouseX}px ${mouseY}px, black 0%, transparent 100%)`,
//         }}
//       />
//       {/* Content Layer */}
//       <div className="relative z-10">{children}</div>
//     </div>
//   );
// };

// // Landing Page Component
// const Landing = () => {
//   return (
//     <PageBackgroundHighlight>
//       <Hero />
//       <TextParallaxContentExample />
//       <Testimonials />
      
//         <Contact />
      
//       <Footer />
//     </PageBackgroundHighlight>
//   )
// }

// export default Landing;


import React from 'react';
import Hero from '../components/Hero';
import TextParallaxContentExample  from '../components/Features';
import {InfiniteMovingCardsDemo} from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { useMotionValue, motion, useMotionTemplate } from 'framer-motion';
import { cn } from '../libs/utils';
import DeveloperSection from '../components/Developers';

// Reusable Background Highlight Component
export const PageBackgroundHighlight = ({ children, className }) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    if (!currentTarget) return;
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={cn(
        "relative min-h-screen flex flex-col bg-[#05081c] group",
        className
      )}
      onMouseMove={handleMouseMove}
    >
      {/* Background Layer */}
      <div className="absolute inset-0 bg-dot-thick-neutral-800 pointer-events-none" />
      <motion.div
        className="pointer-events-none bg-dot-thick-white absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          WebkitMaskImage: useMotionTemplate`radial-gradient(200px circle at ${mouseX}px ${mouseY}px, black 0%, transparent 100%)`,
          maskImage: useMotionTemplate`radial-gradient(200px circle at ${mouseX}px ${mouseY}px, black 0%, transparent 100%)`,
        }}
      />
      {/* Content Layer */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

// Landing Page Component
const Landing = () => {
  return (
    <PageBackgroundHighlight>
      <Hero />
      <TextParallaxContentExample />
      <InfiniteMovingCardsDemo />
      <DeveloperSection />
      <Contact />
      <Footer />
    </PageBackgroundHighlight>
  )
}

export default Landing;
