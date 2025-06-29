import chokkor from "../assets/no-data-found.svg";

export default function ScholarshipHistory() {
  return (
    <div className="min-h-screen bg-white p-4 flex flex-col items-center justify-start">
      {/* Advising Message */}
      <div className="mt-10 text-center">
        <img src={chokkor} alt="sync" className="w-24 h-24 mx-auto" />
        <h2 className=" text-gray-700 text-xs mb-4">
          Sorry, No scholarship & waiver data found!
        </h2>
      </div>
    </div>
  );
}
