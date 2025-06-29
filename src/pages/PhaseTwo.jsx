import img from "../assets/profile.jpeg";
import chokkor from "../assets/lokkor.png";

export default function PhaseTwo() {
  return (
    <div className="min-h-screen bg-white p-4 flex flex-col items-center justify-start">
      {/* Top Section */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between">
        {/* Profile + Info */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <img
            src={img} // replace with actual image
            alt="profile"
            className="w-24 h-24 rounded-md object-cover"
          />
          <div className="text-center md:text-left">
            <h1 className="text-xl font-bold">MAHRAF TAHMIN CHOWDHURY</h1>
            <div className="text-sm text-gray-600 flex flex-wrap gap-2 justify-center md:justify-start mt-1">
              <span>🎓 BBA</span>
              <span>🆔 23104129</span>
              <span>📅 SUMMER 2025</span>
              <span>🔢 CGPA: 3.71</span>
            </div>
          </div>
        </div>

        {/* Grade Sheet Button */}
        {/* <button className="mt-4 md:mt-0 bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded flex items-center gap-1">
          👁️ View Grade Sheet
        </button> */}
      </div>

      {/* Credit Info */}
      <div className="w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 text-center">
        <div className="border rounded p-4">
          <div className="text-xl font-semibold">130</div>
          <div className="text-gray-500 text-sm">Total Credit</div>
        </div>
        <div className="border rounded p-4">
          <div className="text-xl font-semibold">110</div>
          <div className="text-gray-500 text-sm">Completed Credit</div>
        </div>
        <div className="border rounded p-4">
          <div className="text-xl font-semibold">0 - 0</div>
          <div className="text-gray-500 text-sm">Credit Limit</div>
        </div>
        <div className="border rounded p-4">
          <div className="text-xl font-semibold text-green-600">9</div>
          <div className="text-gray-500 text-sm">Credit Taken</div>
        </div>
      </div>

      {/* Advising Message */}
      <div className="mt-10 text-center">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Advising has not been scheduled or has been expired. Please try after
          scheduled.
        </h2>
        <img src={chokkor} alt="sync" className="w-24 h-24 mx-auto" />
      </div>
    </div>
  );
}
