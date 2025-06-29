const Schedule = () => {
  return (
    <div className="px-4 py-6 md:px-8">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl md:text-2xl font-bold text-gray-800">
          Class and Exam Schedule
        </h1>
        {/* <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium">
          Change Semester ▼
        </button> */}
      </div>

      {/* Class Schedule */}
      <div className="bg-white p-4 md:p-6 rounded-lg shadow mb-8 overflow-x-auto">
        <h2 className="text-lg font-semibold mb-4">Class Schedule</h2>
        <table className="min-w-[900px] w-full text-sm border border-gray-200">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="border px-3 py-2 text-left">TIME/DAY</th>
              {[
                "SUNDAY",
                "MONDAY",
                "TUESDAY",
                "WEDNESDAY",
                "THURSDAY",
                "FRIDAY",
                "SATURDAY",
              ].map((day) => (
                <th key={day} className="border px-3 py-2">
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-gray-800">
            <tr>
              <td className="border px-3 py-2 font-medium">
                9:30 AM – 10:50 AM
              </td>
              <td className="border"></td>
              <td className="border"></td>
              <td className="border"></td>
              <td className="border"></td>

              <td className="border px-3 py-2 font-semibold">
                {" "}
                MKT301 -05 -NAR-07A-08C
              </td>
              <td className="border"></td>

              <td className="border px-3 py-2 font-semibold">
                MKT422 -05 -NAR-07A-08C
              </td>
            </tr>
            <tr>
              <td className="border px-3 py-2 font-medium">
                11:00 AM – 12:20 PM
              </td>
              <td className="border"></td>
              <td className="border"></td>
              <td className="border"></td>
              <td className="border"></td>

              <td className="border px-3 py-2 font-semibold">
                MKT423-01 -NAR-07A-08C
              </td>
              <td className="border"></td>

              <td className="border px-3 py-2 font-semibold">
                MKT423-01 -NAR-07A-08C
              </td>
            </tr>
            <tr>
              <td className="border px-3 py-2 font-medium">
                12:30 PM – 1:50 PM
              </td>
              <td className="border"></td>
              <td className="border"></td>
              <td className="border"></td>
              <td className="border"></td>

              <td className="border px-3 py-2 font-semibold">
                ACT421 -04 -TSK-07B-17C
              </td>
              <td className="border"></td>

              <td className="border px-3 py-2 font-semibold">
                ACT421 -04 -TSK-07B-17C
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Exam Schedule */}
      <div className="bg-white p-4 md:p-6 rounded-lg shadow overflow-x-auto">
        <h2 className="text-lg font-semibold mb-4">Exam Schedule</h2>
        <table className="min-w-[600px] w-full text-sm border border-gray-200">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="border px-3 py-2 text-left">DAY</th>
              <th className="border px-3 py-2">TIME</th>
              <th className="border px-3 py-2">EXAM</th>
              <th className="border px-3 py-2">COURSE</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            <tr>
              <td className="border px-3 py-2">SATURDAY (2025-07-26)</td>
              <td className="border px-3 py-2">8:30 AM – 10:30 AM</td>
              <td className="border px-3 py-2">MID</td>
              <td className="border px-3 py-2">mkt422</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">SUNDAY (2025-07-27)</td>
              <td className="border px-3 py-2">4:30 PM – 6:30 PM</td>
              <td className="border px-3 py-2">MID</td>
              <td className="border px-3 py-2">ACT421</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">MONDAY (2025-07-28)</td>
              <td className="border px-3 py-2">4:30 PM – 6:30 PM</td>
              <td className="border px-3 py-2">MID</td>
              <td className="border px-3 py-2">MKT423</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">SUNDAY (2025-09-14)</td>
              <td className="border px-3 py-2">8:30 AM – 10:30 AM</td>
              <td className="border px-3 py-2">FINAL</td>
              <td className="border px-3 py-2">ACT421</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">TUESDAY (2025-09-16)</td>
              <td className="border px-3 py-2">2:30 PM – 4:30 AM</td>
              <td className="border px-3 py-2">FINAL</td>
              <td className="border px-3 py-2">MKT423</td>
            </tr>
            <tr>
              <td className="border px-3 py-2">THURSDAY (2025-09-18)</td>
              <td className="border px-3 py-2">12:30 PM – 2:30 PM</td>
              <td className="border px-3 py-2">FINAL</td>
              <td className="border px-3 py-2">MKT422</td>
            </tr>
            {/* Add more exams as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Schedule;
