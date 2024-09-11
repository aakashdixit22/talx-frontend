import React from "react";
import { FaEnvelope, FaEnvelopeOpenText, FaRocket } from "react-icons/fa6";

const NewsLetter = () => {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-bold mb-2 items-center gap-2">
          <FaEnvelope />
          Email for jobs
        </h3>
        <p className="text-base text-primary">
          Get the latest jobs in your inbox
        </p>
        <div className="w-full space-y-4">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="w-full border block pl-3 py-2"
          />
          <input
            type="submit"
            value={"Subscribe"}
            className="w-full border block pl-3 py-2 bg-blue rounded-sm text-white font-semibold"
          />
        </div>
      </div>




      <div >
        <h3 className="text-lg font-bold mb-2 items-center gap-2">
          <FaRocket />
          Get Noticed Faster
        </h3>
        <p className="text-base text-primary">
          Get the latest jobs in your inbox
        </p>
        <div className="w-full space-y-4">
          <input
            type="submit"
            value={"Upload Your Resume"}
            className="w-full border block pl-3 py-2 bg-blue rounded-sm text-white font-semibold"
          />
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
