import { Link } from "react-router-dom";
import nodata from "../assets/no-data-found.svg";

const Home = () => {
  return (
    <div className="px-4 py-6 md:px-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl md:text-2xl font-bold text-gray-800">
          Dashboard
        </h1>
        <button className="bg-blue-50 hover:bg-blue-100 text-blue-600 text-sm font-semibold px-4 py-2 rounded-md">
          Configure Dashboard ▼
        </button>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Scholarship Card */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-md font-semibold mb-4 text-gray-800">
            Scholarship
          </h2>
          <div className="flex justify-center items-center h-40">
            <img
              src={nodata}
              alt="clipboard"
              className="w-24 h-24 opacity-60"
            />
          </div>
        </div>

        {/* Activity Card */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-md font-semibold mb-4 text-gray-800">Activity</h2>
          {/* <div className="border-l-4 border-blue-500 pl-4">
            <p className="text-base font-semibold text-gray-800 mb-1">
              First Time Probation Other
            </p>
            <p className="text-sm text-gray-500 mb-1">
              Current Step:{" "}
              <span className="text-green-600 font-medium">
                Department Head
              </span>
            </p>
            <p className="text-sm text-gray-400 mb-4">
              Started at - 2025-06-17 10:08 PM
            </p>
            <Link
              to="#"
              className="inline-block text-sm px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-md"
            >
              View
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
