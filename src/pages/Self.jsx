import chokkor from "../assets/lokkor.png";

export default function Self() {
  return (
    <div className="min-h-screen bg-white p-4 flex flex-col items-center justify-start">
      {/* Advising Message */}
      <div className="mt-10 text-center">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Self registration has not been scheduled or has been expired. Please
          try after scheduled.
        </h2>
        <img src={chokkor} alt="sync" className="w-24 h-24 mx-auto" />
      </div>
    </div>
  );
}
