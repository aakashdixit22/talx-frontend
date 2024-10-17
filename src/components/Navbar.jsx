// import React, { useState } from 'react';
// import { NavLink, Link, useNavigate } from 'react-router-dom';
// import { FaBarsStaggered, FaXmark } from 'react-icons/fa6';
// import { motion } from 'framer-motion';

// const NavBar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
//   const handleMenuToggler = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const navigate = useNavigate();
//   const token = localStorage.getItem('token');
//   const email = localStorage.getItem('email');

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('email');
//     navigate('/login');
//   };

//   // Get the initial from email (e.g., "a" from "abc@gmail.com")
//   const emailInitial = email ? email.charAt(0).toUpperCase() : '';

//   const navItems = [
//     { path: '/', title: "Start a Search" },
//     { path: '/my-job', title: "My Job" },
//     { path: '/news', title: "Salary Estimate" },
//     { path: '/post-job', title: "Post a Job" },
//   ];

//   return (
//     <header className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
//       <nav className='flex justify-between items-center py-6'>
//         <Link to='/' className='flex flex-row items-center gap-2 text-2xl text-black font-bold'>
//           <svg xmlns='http://www.w3.org/2000/svg' width="29" height="30" viewBox='0 0 33 34' fill='none'>
//             {/* SVG content */}
//           </svg>
//           JobFinder
//         </Link>
//         <ul className='lg:flex gap-8 items-center hidden'>
//           {navItems.map((item, i) => (
//             <li key={i} className='group'>
//               <NavLink
//                 to={item.path}
//                 className={({ isActive }) =>
//                   isActive
//                     ? 'text-black font-semibold'
//                     : 'text-gray-600 font-normal'
//                 }
//               >
//                 <span className="relative pb-1 group-hover:text-black group-hover:font-semibold transition-all">
//                   {item.title}
//                   <motion.div
//                     className="absolute bottom-0 left-0 h-[2px] bg-black rounded"
//                     initial={{ width: 0 }}
//                     whileHover={{ width: '100%' }}
//                     transition={{ duration: 0.3 }}
//                   />
//                 </span>
//               </NavLink>
//             </li>
//           ))}
//           {!token ? (
//             <>
//               <li>
//                 <Link to='/login' className='text-gray-600 font-semibold hover:text-black transition-all'>
//                   Log in
//                 </Link>
//               </li>
//               <li>
//                 <Link to='/signup' className='text-gray-600 font-semibold hover:text-black transition-all'>
//                   Sign up
//                 </Link>
//               </li>
//             </>
//           ) : (
//             <li>
//               {/* Profile Icon */}
//               <div
//                 className='relative flex items-center justify-center w-8 h-8 bg-gray-300 rounded-full cursor-pointer text-black font-semibold hover:bg-gray-400 transition-colors duration-200'
//                 onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
//               >
//                 {emailInitial}
//                 {isProfileMenuOpen && (
//                   <motion.div
//                     className='absolute top-10 right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden'
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <button
//                       onClick={handleLogout}
//                       className='w-full py-2 text-white font-semibold bg-red-500 border border-red-500 hover:bg-red-600 text-center rounded transition-all'
//                     >
//                       Log out
//                     </button>
//                   </motion.div>
//                 )}
//               </div>
//             </li>
//           )}
//         </ul>
//         <div className='lg:hidden flex items-center gap-4'>
//           {/* Profile Icon for Mobile */}
//           {token && (
//             <div
//               className='flex items-center justify-center w-8 h-8 bg-gray-300 rounded-full cursor-pointer text-black font-semibold hover:bg-gray-400 transition-colors duration-200'
//               onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
//             >
//               {emailInitial}
//               {isProfileMenuOpen && (
//                 <motion.div
//                   className='absolute top-16 right-4 w-32 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden'
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <button
//                     onClick={handleLogout}
//                     className='w-full py-2 text-white font-semibold bg-red-500 border border-red-500 hover:bg-red-600 text-center rounded transition-all'
//                   >
//                     Log out
//                   </button>
//                 </motion.div>
//               )}
//             </div>
//           )}
//           <button onClick={handleMenuToggler}>
//             {isMenuOpen ? (
//               <FaXmark size={25} className='text-black' />
//             ) : (
//               <FaBarsStaggered size={25} className='text-black' />
//             )}
//           </button>
//         </div>
//       </nav>
//       {isMenuOpen && (
//         <motion.div
//           className='bg-white rounded-lg border border-gray-300 py-4 lg:hidden'
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3 }}
//         >
//           <ul className='space-y-4'>
//             {navItems.map((item, i) => (
//               <li key={i} className='text-center'>
//                 <NavLink
//                   to={item.path}
//                   className={({ isActive }) =>
//                     isActive
//                       ? 'text-black font-semibold'
//                       : 'text-gray-600 font-normal'
//                   }
//                   onClick={handleMenuToggler}
//                 >
//                   {item.title}
//                 </NavLink>
//               </li>
//             ))}
//             {!token ? (
//               <>
//                 <li className='text-center'>
//                   <Link to='/login' className='text-gray-600 font-semibold hover:text-black transition-all'>
//                     Log in
//                   </Link>
//                 </li>
//                 <li className='text-center'>
//                   <Link to='/signup' className='text-gray-600 font-semibold hover:text-black transition-all'>
//                     Sign up
//                   </Link>
//                 </li>
//               </>
//             ) : (
//               <li className='text-center'>
//                 {/* Mobile Profile Icon with Logout Option */}
//                 <div
//                   className='relative flex items-center justify-center w-8 h-8 bg-gray-300 rounded-full cursor-pointer mx-auto text-black font-semibold'
//                   onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
//                 >
//                   {emailInitial}
//                   {isProfileMenuOpen && (
//                     <motion.div
//                       className='absolute top-10 left-1/2 transform -translate-x-1/2 mt-2 w-32 bg-red-500 rounded-lg shadow-lg border'
//                       initial={{ opacity: 0, scale: 0.8 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       transition={{ duration: 0.3 }}
//                     >
//                       <button
//                         onClick={handleLogout}
//                         className='w-full py-2 text-white font-semibold border border-red-500 bg-red-500 hover:bg-red-800 text-center rounded transition-all'
//                       >
//                         Log out
//                       </button>
//                     </motion.div>
//                   )}
//                 </div>
//               </li>
//             )}
//           </ul>
//         </motion.div>
//       )}
//     </header>
//   );
// };

// export default NavBar;

// "use client";
// import React, { useState } from "react";
// import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
// import { cn } from "../libs/utils";
// export default function NavbarDemo() {
//   return (
//     (<div className="relative w-full flex items-center justify-center">
//       <Navbar className="top-2" />
      
//     </div>)
//   );
// }

// function Navbar({
//   className
// }) {
//   const [active, setActive] = useState(null);
//   return (
//     (<div
//       className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
//       <Menu setActive={setActive}>
//         <MenuItem setActive={setActive} active={active} item="Services">
//           <div className="flex flex-col space-y-4 text-sm">
//             <HoveredLink href="/web-dev">Web Development</HoveredLink>
//             <HoveredLink href="/interface-design">Interface Design</HoveredLink>
//             <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
//             <HoveredLink href="/news">Branding</HoveredLink>
//           </div>
//         </MenuItem>
//         <MenuItem setActive={setActive} active={active} item="Products">
//           <div className="  text-sm grid grid-cols-2 gap-10 p-4">
//             <ProductItem
//               title="Algochurn"
//               href="https://algochurn.com"
//               src="https://assets.aceternity.com/demos/algochurn.webp"
//               description="Prepare for tech interviews like never before." />
//             <ProductItem
//               title="Tailwind Master Kit"
//               href="https://tailwindmasterkit.com"
//               src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
//               description="Production ready Tailwind css components for your next project" />
//             <ProductItem
//               title="Moonbeam"
//               href="https://gomoonbeam.com"
//               src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
//               description="Never write from scratch again. Go from idea to blog in minutes." />
//             <ProductItem
//               title="Rogue"
//               href="https://userogue.com"
//               src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
//               description="Respond to government RFPs, RFIs and RFQs 10x faster using AI" />
//           </div>
//         </MenuItem>
//         <MenuItem setActive={setActive} active={active} item="Pricing">
//           <div className="flex flex-col space-y-4 text-sm">
//             <HoveredLink href="/hobby">Hobby</HoveredLink>
//             <HoveredLink href="/individual">Individual</HoveredLink>
//             <HoveredLink href="/team">Team</HoveredLink>
//             <HoveredLink href="/enterprise">Enterprise</HoveredLink>
//           </div>
//         </MenuItem>
//       </Menu>
//     </div>)
//   );
// }


import React, { useState } from "react";
import { cn } from "../libs/utils";

export default function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState(null);

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-7xl mx-auto z-50 px-4", className)}>
      <div className="flex justify-between items-center bg-black/30 border border-white/50 shadow-input px-8 py-4 rounded-full backdrop-blur-md w-full overflow-hidden">
        {/* Logo on the left */}
        <a href="/" className="text-2xl font-bold text-white whitespace-nowrap">
          JobFinder
        </a>

        {/* Center Menu */}
        <div className="flex justify-center space-x-8 text-white">
          <a href="/" className="cursor-pointer hover:opacity-[0.9]">Start A Search</a>
          <a href="/news" className="cursor-pointer hover:opacity-[0.9]">News</a>
          <a href="/my-job" className="cursor-pointer hover:opacity-[0.9]">My Job</a>
          <a href="/test" className="cursor-pointer hover:opacity-[0.9]">Test</a>
          <a href="/post-job" className="cursor-pointer hover:opacity-[0.9]">Post A Job</a>
        </div>

        {/* Login on the right */}
        <div className="flex items-center space-x-2">
        <a href="/login" className="whitespace-nowrap p-2 text-white rounded-2xl hover:bg-white hover:text-black cursor-pointer">
          Login
        </a>
        <a href="/signup" className="whitespace-nowrap p-2 text-white rounded-2xl hover:bg-white hover:text-black cursor-pointer">
          SignUp
        </a>
        </div>
        
      </div>
    </div>
  );
}


