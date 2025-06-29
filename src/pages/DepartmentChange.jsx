import React from "react";
import { FaTimesCircle } from "react-icons/fa"; // Optional: for the red X icon

const DepartmentChange = () => {
  return (
    <div className="min-h-screen flex  justify-center bg-gray-50 p-4">
      <div className="w-full max-w-4xl">
        <div className="bg-red-50 border border-red-400 text-red-600 px-6 py-4 rounded-lg flex items-start gap-3">
          <div className="text-red-500 mt-1">
            <FaTimesCircle size={20} />
          </div>
          <p className="font-semibold">
            Access to this page is currently disabled; please reach out to the
            authority for further guidance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DepartmentChange;
