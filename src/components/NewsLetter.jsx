import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import axios from "axios";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [subscriptionStatus, setSubscriptionStatus] = useState(""); // Success or error message
  const [isSubscribing, setIsSubscribing] = useState(false);
  const token = localStorage.getItem('token')

  // Email subscription handler
  const handleSubscribe = async (e) => {
    e.preventDefault();
    setSubscriptionStatus("");

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setSubscriptionStatus("Please enter a valid email address.");
      return;
    }

    setIsSubscribing(true);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/subscribers/subscribe`,
        { email },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` // Include the token in the Authorization header
          }
        }
      );
      if (response.data.success) {
        setSubscriptionStatus("Subscription successful! You will receive daily updates.");
        setEmail(""); // Clear the email input
      } else {
        setSubscriptionStatus(response.data.message || "Subscription failed. Please try again.");
      }
    } catch (error) {
      console.error("Error subscribing:", error.response?.data || error.message);
      setSubscriptionStatus(
        error.response?.data?.message || "An error occurred. Please try again later."
      );
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-md mx-auto mt-10">
      {/* Email Subscription Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-2 flex items-center gap-2 text-gray-800">
          <FaEnvelope />
          Email for Jobs
        </h3>
        <p className="text-base text-gray-600">
          Get the latest jobs and news in your inbox daily.
        </p>
        <form onSubmit={handleSubscribe} className="w-full space-y-4 mt-4">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 block pl-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className={`w-full py-2 bg-specialtext hover:bg-yellow-500  text-black font-semibold rounded-md transition duration-300 ${
              isSubscribing ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isSubscribing}
          >
            {isSubscribing ? (
              <div className="flex items-center justify-center">
                <svg
                  className="animate-spin h-5 w-5 mr-3"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Subscribing...
              </div>
            ) : (
              "Subscribe"
            )}
          </button>
          {subscriptionStatus && (
            <p
              className={`text-sm text-center ${
                subscriptionStatus.includes("successful") ? "text-green-500" : "text-red-500"
              }`}
            >
              {subscriptionStatus}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;