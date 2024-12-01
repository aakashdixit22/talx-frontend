
// "use client";

// import React, { useEffect, useState } from "react";
// import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
// import axios from "axios";
// import newsImg from "../assets/news.png";
// import { ClipLoader } from "react-spinners";

// export default function News() {
//   const [articles, setArticles] = useState([]);
//   const [query, setQuery] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [selectedCategory, setSelectedCategory] = useState("business");
//   const [loading, setLoading] = useState(false);
//   const articlesPerPage = 9;
//   const placeholderImage = newsImg;

//   // Fetch news from the backend
//   const fetchNews = async (query, category) => {
//     setLoading(true);
//     try {
//       const response = await axios.get(`https://job-portal-backend-nm6k.onrender.com/api/news/news`, {
//         params: { query, category },
//       });
//       setArticles(response.data);
//       console.log(response.data);

//     } catch (error) {
//       console.error("Error fetching the news data", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchNews("", selectedCategory);
//   }, [selectedCategory]);

//   const handleSearch = async (e) => {
//     e.preventDefault();
//     fetchNews(query, selectedCategory);
//     setCurrentPage(1);
//   };

//   const indexOfLastArticle = currentPage * articlesPerPage;
//   const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
//   const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

//   const nextPage = () => {
//     if (currentPage < Math.ceil(articles.length / articlesPerPage)) {
//       setCurrentPage((prevPage) => prevPage + 1);
//     }
//   };

//   const prevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage((prevPage) => prevPage - 1);
//     }
//   };

//   const categories = ["business", "entertainment", "general", "health", "science", "sports", "technology"];

//   const selectCategory = (category) => {
//     setSelectedCategory(category);
//     setCurrentPage(1);
//   };

//   return (
//     <div className="mx-auto px-4 min-h-screen bg-navy py-8">
//       {/* Header */}
//       <header className="text-center py-10 mt-10">
//         <h1 className="text-5xl font-bold text-white">BulletinBuzz</h1>
//         <p className="text-lg text-specialtext mt-2">"Your Shortcut to Today's News"</p>
//       </header>

//       {/* Search Bar */}
//       <div className="flex flex-col items-center py-5">
//         <form
//           onSubmit={handleSearch}
//           className="flex w-full max-w-lg shadow-md rounded-full overflow-hidden mb-4"
//         >
//           <input
//             type="text"
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             placeholder="Search for news..."
//             className="w-full px-4 py-2 border-0 focus:outline-none focus:ring-0 text-gray-300"
//           />
//           <button
//             type="submit"
//             className="px-6 py-2 bg-specialtext hover:bg-yellow-500  text-black font-semibold  transition"
//           >
//             Search
//           </button>
//         </form>

//         {/* Category Tabs */}
//         <div className="flex space-x-4 mb-4 flex-wrap justify-center">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => selectCategory(cat)}
//               className={`px-4 py-2 m-1 rounded-md font-semibold ${
//                 selectedCategory === cat
//                   ? "bg-specialtext  text-black"
//                   : "bg-gray-200 text-black hover:bg-gray-300"
//               } transition`}
//             >
//               {cat.charAt(0).toUpperCase() + cat.slice(1)}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Loader */}
//       {loading ? (
//         <div className="flex justify-center py-10">
//           <ClipLoader color={"#3498db"} loading={loading} size={50} />
//         </div>
//       ) : (
//         <>
//           {/* News Cards */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {currentArticles.length === 0 ? (
//               <p className="text-center">No news found</p>
//             ) : (
//               currentArticles.map((article, index) => (
//                 <div key={index} className="flex justify-center">
//                   <CardContainer className="inter-var">
//                     <a
//                       href={article.url}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="w-full h-full"
//                     >
//                       <CardBody
//                         className="bg-gray-50 dark:bg-black dark:border-white/[0.2] border border-black/[0.1] w-full h-full rounded-xl p-6 flex flex-col relative"
//                         style={{ minHeight: "400px" }}
//                       >
//                         <CardItem
//                           translateZ={50}
//                           className="text-lg font-bold text-neutral-600 dark:text-white mb-2"
//                         >
//                           {article.title}
//                         </CardItem>
//                         <CardItem
//                           as="p"
//                           translateZ={60}
//                           className="text-neutral-500 text-sm flex-grow dark:text-neutral-300 mb-4"
//                         >
//                           {article.description}
//                         </CardItem>
//                         <CardItem translateZ={100} className="w-full mb-4">
//                           <img
//                             src={article.urlToImage || placeholderImage}
//                             alt={article.title}
//                             className="h-40 w-full object-cover rounded-xl"
//                             onError={(e) => {
//                               e.target.onerror = null;
//                               e.target.src = placeholderImage;
//                             }}
//                             loading="lazy"
//                           />
//                         </CardItem>
//                         <div className="flex justify-between items-center mt-auto">
//                           {article.source && (
//                             <div className="text-lg font-semibold text-neutral-600 dark:text-neutral-300">
//                               {article.source.name}
//                             </div>
//                           )}
//                           <span className="px-4 py-2 rounded-xl text-sm font-normal bg-black text-white hover:bg-blue-600 transition">
//                             Read more →
//                           </span>
//                         </div>
//                       </CardBody>
//                     </a>
//                   </CardContainer>
//                 </div>
//               ))
//             )}
//           </div>

//           {/* Pagination */}
//           {articles.length > articlesPerPage && (
//             <div className="flex justify-center items-center py-8">
//               <button
//                 onClick={prevPage}
//                 className="px-4 py-2 mx-2 bg-gray-200 text-black font-semibold rounded-lg hover:bg-gray-300 transition"
//                 disabled={currentPage === 1}
//               >
//                 Previous
//               </button>
//               <button
//                 onClick={nextPage}
//                 className="px-4 py-2 mx-2 bg-gray-200 text-black font-semibold rounded-lg hover:bg-gray-300 transition"
//                 disabled={currentPage === Math.ceil(articles.length / articlesPerPage)}
//               >
//                 Next
//               </button>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// }

           

"use client";

import React, { useEffect, useState } from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import axios from "axios";
import newsImg from "../assets/news.png";
import { ClipLoader } from "react-spinners";

export default function News() {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("business");
  const [loading, setLoading] = useState(false);
  const articlesPerPage = 9;
  const placeholderImage = newsImg;

  // Fetch news from the backend
  const fetchNews = async (query, category) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://job-portal-backend-nm6k.onrender.com/api/news/news`, {
        params: { query, category },
      });
      setArticles(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching the news data", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews("", selectedCategory);
  }, [selectedCategory]);

  const handleSearch = async (e) => {
    e.preventDefault();
    fetchNews(query, selectedCategory);
    setCurrentPage(1);
  };

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  const nextPage = () => {
    if (currentPage < Math.ceil(articles.length / articlesPerPage)) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const categories = ["business", "entertainment", "general", "health", "science", "sports", "technology"];

  const selectCategory = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-navy py-8 px-4 md:px-8 lg:px-16 xl:px-24">
      {/* Header with improved typography and spacing */}
      <header className="text-center py-12 space-y-4">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight">
          BulletinBuzz
        </h1>
        <p className="text-lg text-specialtext opacity-90 max-w-xl mx-auto">
          "Your Shortcut to Today's News"
        </p>
      </header>

      {/* Search and Category Section */}
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Search Bar with enhanced design */}
        <form
          onSubmit={handleSearch}
          className="flex w-full shadow-lg rounded-full overflow-hidden ring-2 ring-specialtext/20 focus-within:ring-specialtext/50 transition-all duration-300"
        >
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for news..."
            className="flex-grow px-6 py-3 bg-white/10 text-white placeholder-gray-400 focus:outline-none"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-specialtext text-black font-semibold hover:bg-yellow-500 transition-colors"
          >
            Search
          </button>
        </form>

        {/* Category Tabs with improved responsiveness */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => selectCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-specialtext text-black scale-105"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Loader with centered positioning */}
      {loading ? (
        <div className="flex justify-center items-center min-h-[50vh]">
          <ClipLoader color={"#FFC107"} loading={loading} size={60} />
        </div>
      ) : (
        <>
          {/* News Cards Grid with improved responsiveness */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 my-12">
            {currentArticles.length === 0 ? (
              <div className="col-span-full text-center text-white py-12">
                No news found
              </div>
            ) : (
              currentArticles.map((article, index) => (
                <div key={index} className="flex justify-center">
                  <CardContainer className="w-full">
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block h-full"
                    >
                      <CardBody
                        className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 flex flex-col h-full transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                      >
                        <CardItem
                          translateZ={50}
                          className="text-xl font-bold text-white mb-3 line-clamp-2"
                        >
                          {article.title}
                        </CardItem>
                        <CardItem
                          as="p"
                          translateZ={60}
                          className="text-gray-300 text-sm flex-grow line-clamp-3 mb-4"
                        >
                          {article.description}
                        </CardItem>
                        <CardItem translateZ={100} className="w-full mb-4">
                          <img
                            src={article.urlToImage || placeholderImage}
                            alt={article.title}
                            className="h-48 w-full object-cover rounded-xl"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = placeholderImage;
                            }}
                            loading="lazy"
                          />
                        </CardItem>
                        <div className="flex justify-between items-center mt-auto">
                          {article.source && (
                            <div className="text-sm font-medium text-gray-300">
                              {article.source.name}
                            </div>
                          )}
                          <span className="px-4 py-2 rounded-full text-sm bg-specialtext text-black hover:bg-yellow-500 transition-colors">
                            Read more →
                          </span>
                        </div>
                      </CardBody>
                    </a>
                  </CardContainer>
                </div>
              ))
            )}
          </div>

          {/* Pagination with improved design */}
          {articles.length > articlesPerPage && (
            <div className="flex justify-center items-center space-x-4 py-8">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className="px-6 py-2 bg-white/10 text-white rounded-full disabled:opacity-50 hover:bg-white/20 transition-all"
              >
                Previous
              </button>
              <span className="text-white">
                Page {currentPage} of {Math.ceil(articles.length / articlesPerPage)}
              </span>
              <button
                onClick={nextPage}
                disabled={currentPage === Math.ceil(articles.length / articlesPerPage)}
                className="px-6 py-2 bg-white/10 text-white rounded-full disabled:opacity-50 hover:bg-white/20 transition-all"
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}