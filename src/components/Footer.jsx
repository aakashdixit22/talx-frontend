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
import React from "react";
import { Link } from "react-router-dom";
import { FloatingDock } from "./ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";

const Footer = () => {
  const links = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full text-white" />,
      href: "#",
    },
    {
      title: "Products",
      icon: <IconTerminal2 className="h-full w-full text-white" />,
      href: "#",
    },
    {
      title: "Components",
      icon: <IconNewSection className="h-full w-full text-white" />,
      href: "#",
    },
    {
      title: "Changelog",
      icon: <IconExchange className="h-full w-full text-white" />,
      href: "#",
    },
    {
      title: "Twitter",
      icon: <IconBrandX className="h-full w-full text-white" />,
      href: "#",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-full w-full text-neutral-100" />,
      href: "#",
    },
  ];

  return (
    <footer className="bg-transparent">
      <div className="container px-6 py-8 mx-auto">
        <div className="flex flex-col items-center text-center border-gray-700 border-t-2">
          <Link
            to="/"
            className="flex flex-row items-center mt-5 gap-2 text-2xl text-white font-bold"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="30"
              viewBox="0 0 33 34"
              fill="none"
            >
              {/* SVG content */}
            </svg>
            TALX{" "}
          </Link>

          <p className="max-w-md mx-auto mt-4 text-white">
            Empowering your career journey - Connect with us!
          </p>

          <div className="flex flex-col mt-4 sm:flex-row sm:items-center sm:justify-center">
            <FloatingDock items={links} />
          </div>

          {/* Centered copyright text below the icons */}
          <p className="mt-6 text-sm text-center text-gray-500">
            © Copyright {new Date().getFullYear()}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


