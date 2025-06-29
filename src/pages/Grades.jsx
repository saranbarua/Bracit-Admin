import { FaCloudDownloadAlt } from "react-icons/fa";

const GradeS = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Breadcrumb and Page Title */}
      <div className="p-4 md:p-6 border-b bg-white">
        <h2 className="text-gray-600 text-sm mb-1">
          <span className="text-gray-400">Student</span> /{" "}
          <span className="font-medium">Grade Sheet</span>
        </h2>
        <h1 className="text-xl font-semibold text-gray-800">
          Download Grade Sheet
        </h1>
      </div>

      {/* Main content */}
      <div className="flex-1 p-4 md:p-8 bg-gray-50 flex flex-col lg:flex-row justify-between items-start gap-6">
        {/* Download Button */}
        <div className="flex-1 flex justify-center items-center">
          {/* <button className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-md shadow">
            <FaCloudDownloadAlt className="text-lg" />
            Download
          </button> */}
          <a
            href="/public/gradesheet-web.pdf"
            download
            className="flex cursor-pointer items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-md shadow"
          >
            <FaCloudDownloadAlt className="text-lg" />
            Download
          </a>
        </div>

        {/* Student Info Card */}
        <div className="bg-white border rounded-md p-4 w-full max-w-sm shadow-sm text-sm text-gray-700">
          <div className="mb-2">
            <span className="font-medium">Student ID:</span>{" "}
            <span className="float-right text-black font-bold">23104129</span>
          </div>
          <div className="mb-2">
            <span className="font-medium">Name:</span>{" "}
            <span className="float-right text-black font-bold text-right">
              MAHRAF TAHMIN CHOWDHURY
            </span>
          </div>
          <div className="mb-2">
            <span className="font-medium">Department:</span>{" "}
            <span className="float-right text-right font-semibold">
              BRAC BUSINESS SCHOOL
            </span>
          </div>
          <div className="mb-2">
            <span className="font-medium">Program:</span>{" "}
            <span className="float-right text-right font-semibold">
              BACHELOR OF BUSINESS ADMINISTRATION
            </span>
          </div>
          <div>
            <span className="font-medium">Current Semester:</span>{" "}
            <span className="float-right font-semibold">Spring 2025</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t py-3 px-4 text-xs text-gray-500 flex justify-between items-center">
        <span>
          2025© <span className="text-blue-500">BRAC University</span>. All
          rights reserved.
        </span>
        <span>
          Developed by:{" "}
          <span className="font-semibold text-gray-700">
            brac<sup>IT</sup>
          </span>
        </span>
      </footer>
    </div>
  );
};

export default GradeS;
