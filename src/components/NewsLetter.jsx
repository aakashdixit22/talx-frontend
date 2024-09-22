// src/components/NewsLetter.jsx

import React, { useState } from "react";
import { FaEnvelope, FaRocket } from "react-icons/fa6";
import axios from "axios";

const NewsLetter = () => {
  // State for Email Subscription
  const [email, setEmail] = useState("");
  const [subscriptionStatus, setSubscriptionStatus] = useState(""); // Success or error message
  const [isSubscribing, setIsSubscribing] = useState(false); // Loading state

  // Backend URL (Hardcoded)
  const BACKEND_URL = "http://localhost:5000";

  // Handler for Email Subscription
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
      const response = await axios.post(`${BACKEND_URL}/subscribe`, { email });

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
    <div className="space-y-8 p-6 max-w-md mx-auto">
      {/* Email Subscription Section */}
      <div>
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
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
            className={`w-full border border-blue-600 block pl-3 py-2 bg-blue rounded-md text-white font-semibold hover:bg-blue-700 transition cursor-pointer ${
              isSubscribing ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isSubscribing}
          >
            {isSubscribing ? "Subscribing..." : "Subscribe"}
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

      {/* Resume Upload Section (Placeholder) */}
      <div>
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          <FaRocket />
          Get Noticed Faster
        </h3>
        <p className="text-base text-gray-600">
          Upload your resume to get the latest jobs in your inbox.
        </p>
        <div className="w-full space-y-4 mt-4">
          <input
            type="submit"
            value={"Upload Your Resume"}
            className="w-full border border-gray-300 block pl-3 py-2 bg-blue rounded-md text-white font-semibold hover:bg-blue-700 transition cursor-not-allowed"
            disabled
            title="Resume upload functionality is not implemented."
          />
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
