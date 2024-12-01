// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "https://job-portal-backend-nm6k.onrender.com/api/auth/signin",
//         {
//           email,
//           password,
//         }
//       );

//       localStorage.setItem("token", response.data.token);
//       navigate("/dashboard");
//     } catch (err) {
//       setError("Invalid email or password");
//     }
//   };

//   return (
//     <div className="flex h-screen bg-gray-50">
//       {/* Left Section with Landscape Image */}
//       <div className="hidden md:flex w-1/2 items-center justify-center relative">
//         <img
//           src="https://images.unsplash.com/photo-1502318217862-aa4e294ba657?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3BhY2V8ZW58MHx8MHx8fDA%3D"
//           alt="Landscape"
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//         <div className="relative p-12 text-center text-white space-y-6 bg-black bg-opacity-40">
//           <h1 className="text-4xl font-extrabold">Welcome Back!</h1>
//           <p className="text-lg">
//             Discover opportunities, collaborate with others, and achieve your goals.
//           </p>
//           <ul className="space-y-2 text-left">
//             <li className="flex items-center gap-3">
//               <span className="text-lg">🚀</span> Build your profile effortlessly
//             </li>
//             <li className="flex items-center gap-3">
//               <span className="text-lg">🤝</span> Collaborate with teams globally
//             </li>
//             <li className="flex items-center gap-3">
//               <span className="text-lg">🔒</span> Secure and private
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Right Section */}
//       <div className="w-full md:w-1/2 flex items-center justify-center p-6">
//         <div className="w-full max-w-md">
//           <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">
//             Log in to your account
//           </h2>
//           {error && (
//             <div className="text-red-500 bg-red-100 border border-red-300 text-center py-2 px-4 rounded-lg mb-4">
//               {error}
//             </div>
//           )}
//           <form onSubmit={handleLogin} className="space-y-6">
//             <div className="flex flex-col">
//               <label htmlFor="email" className="text-sm font-semibold text-gray-600">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                 required
//               />
//             </div>
//             <div className="flex flex-col">
//               <label htmlFor="password" className="text-sm font-semibold text-gray-600">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 placeholder="Enter your password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                 required
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full py-2 text-lg font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition duration-300"
//             >
//               Log In
//             </button>
//           </form>
//           <div className="text-center mt-6">
//             <p className="text-sm text-gray-500">
//               Don't have an account?{" "}
//               <button
//                 onClick={() => navigate("/signup")}
//                 className="text-indigo-600 font-medium hover:underline"
//               >
//                 Sign Up
//               </button>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import NavBar from "../components/Navbar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://job-portal-backend-nm6k.onrender.com/api/auth/signin",
        {
          email,
          password,
        }
      );

      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <>
    <div className="lg:hidden md:hidden"><NavBar/></div>
    <div className="flex h-screen bg-navy">
      {/* Left Section */}
      <div className="hidden md:flex w-1/2 items-center justify-center relative">
        <img
          src="https://images.unsplash.com/photo-1502318217862-aa4e294ba657?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3BhY2V8ZW58MHx8MHx8fDA%3D"
          alt="Landscape"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative p-10 text-center text-white bg-black bg-opacity-40 rounded-xl shadow-lg space-y-6">
  <h1 className="text-4xl font-bold tracking-tight">Welcome Back!</h1>
  <p className="text-lg text-gray-300">
    Unlock endless opportunities and achieve your career goals with Talx.
  </p>
  <ul className="space-y-4 text-left">
    <li className="flex items-center gap-3">
      <span className="text-2xl text-yellow-400">✨</span>
      <span>Effortlessly manage your job applications</span>
    </li>
    <li className="flex items-center gap-3">
      <span className="text-2xl text-green-400">🌍</span>
      <span>Connect with global teams</span>
    </li>
    <li className="flex items-center gap-3">
      <span className="text-2xl text-red-400">🔒</span>
      <span>Enjoy secure and private access</span>
    </li>
    <li className="flex items-center gap-3">
      <span className="text-2xl text-blue-400">🤖</span>
      <span>Get career guidance with our AI Assistant</span>
    </li>
    <li className="flex items-center gap-3">
      <span className="text-2xl text-purple-400">📄</span>
      <span>Analyze resumes for optimization and insights</span>
    </li>
  </ul>
</div>

      </div>
      
      {/* Right Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-6">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
            Log in to your account
          </h2>
          {error && (
            <div className="text-red-600 bg-red-100 border border-red-200 text-center py-2 px-4 rounded-lg mb-4">
              {error}
            </div>
          )}
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="email" className="text-sm font-semibold text-gray-600">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 mt-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="text-sm font-semibold text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 mt-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 text-lg font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition duration-300"
            >
              Log In
            </button>
          </form>
          <div className="text-center mt-6">
            <p className="text-sm text-gray-500">
              Don't have an account?{" "}
              <button
                onClick={() => navigate("/signup")}
                className="text-indigo-600 font-medium hover:underline"
              >
                Sign Up
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
