import React, { useState } from "react";

const ApplicationForm = () => {
  const [level, setLevel] = useState("");

  const requirements = {
    nursery: [
      "Birth certificate (copy)",
      "2 passport-size photos",
      "Medical record (immunization card)",
      "Parent/guardian ID copy",
    ],
    primary: [
      "Birth certificate (copy)",
      "Last report card or transcript",
      "2 passport-size photos",
      "Transfer letter (if applicable)",
    ],
    highschool: [
      "Birth certificate (copy)",
      "Recent report card or transcript",
      "Recommendation letter from previous school",
      "4 passport-size photos",
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-lg p-8">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          School Application Form
        </h1>

        {/* Level Selection */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Select Level
          </label>
          <select
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">-- Choose Level --</option>
            <option value="nursery">Nursery</option>
            <option value="primary">Primary</option>
            <option value="highschool">High School</option>
          </select>
        </div>

        {/* Requirements */}
        {level && (
          <div className="mt-4">
            <h2 className="text-xl font-semibold text-blue-600 mb-3">
              Requirements for {level.charAt(0).toUpperCase() + level.slice(1)}
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              {requirements[level].map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Submit Button */}
        <div className="mt-8 text-center">
          <button
            disabled={!level}
            className={`px-6 py-2 rounded-md text-white font-medium ${
              level
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Proceed to Application
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;
