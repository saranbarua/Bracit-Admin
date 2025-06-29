const Payslip = () => {
  const payslipData = [
    {
      status: "Paid",
      number: "251056016",
      type: "Registration",
      issueDate: "23/02/2025",
      dueDate: "10/03/2025",
      amount: "67,100 BDT",
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold text-gray-800">Pay Slip View</h1>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm">
          Merge Pay Slip
        </button>
      </div>

      <div className="bg-white rounded shadow border border-gray-200 overflow-x-auto">
        <table className="min-w-full table-fixed text-sm text-left">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-3 font-semibold w-[15%]">
                PAYMENT STATUS <span className="ml-1">⇅</span>
              </th>
              <th className="p-3 font-semibold w-[20%]">
                PAY SLIP NUMBER <span className="ml-1">⇅</span>
              </th>
              <th className="p-3 font-semibold w-[20%]">
                FEES TYPE <span className="ml-1">⇅</span>
              </th>
              <th className="p-3 font-semibold w-[20%]">
                DATE OF ISSUING <span className="ml-1">⇅</span>
              </th>
              <th className="p-3 font-semibold w-[20%]">
                DUE DATE <span className="ml-1">⇅</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {payslipData.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center py-10 text-gray-500">
                  No Payslip Found
                </td>
              </tr>
            ) : (
              payslipData.map((item, index) => (
                <tr key={index} className="border-t">
                  <td className="p-3">{item.status}</td>
                  <td className="p-3">{item.number}</td>
                  <td className="p-3">{item.type}</td>
                  <td className="p-3">{item.issueDate}</td>
                  <td className="p-3">{item.dueDate}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payslip;
