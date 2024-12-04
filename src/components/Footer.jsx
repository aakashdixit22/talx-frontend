// import React from "react";
// import { Link } from "react-router-dom";
// import { FloatingDock } from "./ui/floating-dock";
// import {
//   IconBrandGithub,
//   IconBrandX,
//   IconExchange,
//   IconHome,
//   IconNewSection,
//   IconTerminal2,
// } from "@tabler/icons-react";

// const Footer = () => {
//   const links = [
//     {
//       title: "Home",
//       icon: <IconHome className="h-full w-full text-white" />,
//       href: "#",
//     },
//     {
//       title: "Products",
//       icon: <IconTerminal2 className="h-full w-full text-white" />,
//       href: "#",
//     },
//     {
//       title: "Components",
//       icon: <IconNewSection className="h-full w-full text-white" />,
//       href: "#",
//     },
//     {
//       title: "Changelog",
//       icon: <IconExchange className="h-full w-full text-white" />,
//       href: "#",
//     },
//     {
//       title: "Twitter",
//       icon: <IconBrandX className="h-full w-full text-white" />,
//       href: "#",
//     },
//     {
//       title: "GitHub",
//       icon: <IconBrandGithub className="h-full w-full text-neutral-100" />,
//       href: "#",
//     },
//   ];

//   return (
//     <footer className="bg-transparent ">
//       <div className="container px-6 py-8 mx-auto ">
//         <div className="flex flex-col items-center text-center border-gray-700 border-t-2">
//           <Link
//             to="/"
//             className="flex flex-row items-center mt-5 gap-2 text-2xl text-white font-bold"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="29"
//               height="30"
//               viewBox="0 0 33 34"
//               fill="none"
//             >
//               {/* SVG content */}
//             </svg>
//             TALX{" "}
//           </Link>

//           <p className="max-w-md mx-auto mt-4 text-white">
//             Empowering your career journey-Connect with us!
//           </p>

//           <div className="flex flex-col mt-4 sm:flex-row sm:items-center sm:justify-center">
//             <FloatingDock items={links} />
//           </div>
//         </div>

//         <div className="flex flex-col items-center sm:flex-row sm:justify-between">
//           <p className="text-sm text-center text-gray-500">
//             © Copyright {new Date().getFullYear()}. All Rights Reserved.
//           </p>

          
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
// import React from "react";
// import { Link } from "react-router-dom";
// import { FloatingDock } from "./ui/floating-dock";
// import {
//   IconBrandGithub,
//   IconBrandX,
//   IconExchange,
//   IconHome,
//   IconNewSection,
//   IconTerminal2,
// } from "@tabler/icons-react";

// const Footer = () => {
//   const links = [
//     {
//       title: "Home",
//       icon: <IconHome className="h-full w-full text-white" />,
//       href: "/",
//     },
//     {
//       title: "Explore Jobs", //search jobs
//       icon: <IconBrandX className="h-full w-full text-white" />,
//       href: "/search",
//     },
//     {
//       title: "Post A Job",
//       icon: <IconTerminal2 className="h-full w-full text-white" />,
//       href: "/post-job",
//     },
//     {
//       title: "BulletinBuzz", // this is news platform
//       icon: <IconNewSection className="h-full w-full text-white" />,
//       href: "/news",
//     },
//     {
//       title: "ResumeAI", // resume ai analysis
//       icon: <IconExchange className="h-full w-full text-white" />,
//       href: "/resume",
//     },
//   ];

//   return (
//     <footer className="bg-transparent">
//       <div className="container px-6 py-8 mx-auto">
//         <div className="flex flex-col items-center text-center border-gray-700 border-t-2">
//           <Link
//             to="/"
//             className="flex flex-row items-center mt-5 gap-2 text-2xl text-white font-bold"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="29"
//               height="30"
//               viewBox="0 0 33 34"
//               fill="none"
//             >
//               {/* SVG content */}
//             </svg>
//             TALX{" "}
//           </Link>

//           <p className="max-w-md mx-auto mt-4 text-white">
//             Empowering your career journey - Connect with us!
//           </p>

//           <div className="flex flex-col mt-4 sm:flex-row sm:items-center sm:justify-center">
//             <FloatingDock items={links} />
//           </div>

//           {/* Centered copyright text below the icons */}
//           <p className="mt-6 text-sm text-center text-gray-500">
//             © Copyright {new Date().getFullYear()}. All Rights Reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import { Link } from "react-router-dom";
import { FloatingDock } from "./ui/floating-dock";
import Logo from "../assets/talx.png"
import {
  Search,
  FileText, 
  Home, 
  Newspaper, 
  PlusCircle
} from "lucide-react";

const Footer = () => {
  const links = [
    {
      title: "Home",
      icon: <Home className="h-full w-full text-white" />,
      href: "/",
    },
    {
      title: "Find Jobs",
      icon: <Search className="h-full w-full text-white" />,
      href: "/search",
    },
    {
      title: "Post A Job",
      icon: <PlusCircle className="h-full w-full text-white" />,
      href: "/post-job",
    },
    {
      title: "News",
      icon: <Newspaper className="h-full w-full text-white" />,
      href: "/news",
    },
    {
      title: "ResumeAI",
      icon: <FileText className="h-full w-full text-white" />,
      href: "/resume",
    },
  ];

  return (
    <footer className="bg-transparent">
      <div className="container px-6 py-8 mx-auto">
        <div className="flex flex-col items-center text-center border-gray-700 border-t-2">
          <Link
            to="/"
            className="flex flex-row items-center mt-5 gap-2 text-3xl text-white font-bold tracking-tight"
          >
            TALX
          </Link>

          <p className="max-w-md mx-auto mt-4 text-gray-300 text-lg">
            Empowering your career journey - Connect, Grow, Succeed!
          </p>

          <div className="flex flex-col mt-6 mb-4 sm:flex-row sm:items-center sm:justify-center">
            <FloatingDock items={links} />
          </div>

          

          <p className="mt-4 text-sm text-gray-300">
            © Copyright {new Date().getFullYear()} TALX. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


