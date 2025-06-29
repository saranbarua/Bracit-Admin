import React from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from "react-icons/fa";

const WishListStatus = () => {
  return (
    <div className="min-h-[100px] bg-white rounded border border-gray-300 overflow-hidden">
      {/* Table Header */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-fixed border-collapse">
          <thead className="bg-gray-100">
            <tr className="text-sm text-gray-700">
              <th className="p-3 border-b border-gray-300 text-left font-semibold w-[20%]">
                COURSE CODE <span className="ml-1">⇅</span>
              </th>
              <th className="p-3 border-b border-gray-300 text-left font-semibold w-[20%]">
                SECTION <span className="ml-1">⇅</span>
              </th>
              <th className="p-3 border-b border-gray-300 text-left font-semibold w-[20%]">
                CREDIT <span className="ml-1">⇅</span>
              </th>
              <th className="p-3 border-b border-gray-300 text-left font-semibold w-[20%]">
                FACULTY <span className="ml-1">⇅</span>
              </th>
              <th className="p-3 border-b border-gray-300 text-left font-semibold w-[20%]">
                TOTAL SEAT
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={5} className="text-center py-16 text-gray-600">
                No Rows To Show
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between px-4 py-3 border-t border-gray-300 bg-white text-sm">
        {/* Left icon */}
        <div className="text-blue-500">
          <div className="w-6 h-6 border border-blue-400 rounded-sm flex items-center justify-center">
            <div className="grid grid-cols-2 gap-[2px] w-3 h-3">
              <div className="bg-blue-400" />
              <div className="bg-blue-400" />
              <div className="bg-blue-400" />
              <div className="bg-blue-400" />
            </div>
          </div>
        </div>

        {/* Page size & nav */}
        <div className="flex items-center gap-4">
          <span>
            Page Size:{" "}
            <select className="border rounded px-2 py-1 text-sm">
              <option>15</option>
              <option>30</option>
              <option>50</option>
            </select>
          </span>
          <span>0 to 0 of 0</span>
          <div className="flex items-center gap-2">
            <button className="text-gray-600">
              <FaAngleDoubleLeft />
            </button>
            <button className="text-gray-600">
              <FaChevronLeft />
            </button>
            <span>Page 0 of 0</span>
            <button className="text-gray-600">
              <FaChevronRight />
            </button>
            <button className="text-gray-600">
              <FaAngleDoubleRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishListStatus;
