import logo from "../assets/logo.svg";

const Sidebar = () => {
  const menuItems = [
    { name: "Advising", link: "/advising" },
    { name: "Class and Exam Schedule", link: "/schedule" },
    { name: "Scholarship & Waiver History", link: "/scholarship-history" },
    { name: "Course Drop Application", link: "/course-drop" },
    { name: "Semester Drop Application", link: "/semester-drop" },
    { name: "Department Change", link: "/department-change" },
    { name: "Grade Sheet", link: "/grades" },
    { name: "Probation", link: "/probation" },
    { name: "Payslip", link: "/payslip" },
  ];
  return (
    <div className="  p-4 space-y-4 w-74  h-screen shadow ">
      {/* Profile Section */}
      <div className="flex items-center space-x-4">
        <img src={logo} alt="Logo" className="w-24 h-24" />
        <div>
          <h2 className=" font-semibold">
            <span className="font-extrabold">S</span>tudent{" "}
            <span className="font-extrabold">L</span>ifecycle{" "}
            <span className="font-extrabold">M</span>anagement
          </h2>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="min-h-screen bg-white p-4 text-gray-700 font-medium">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                className="flex items-center gap-3 py-2 px-3 hover:bg-gray-100 rounded-md transition"
              >
                <span className="w-6 h-6 flex items-center justify-center text-xl font-semibold  ">
                  {item.name[0]}
                </span>
                <span className="text-sm truncate">{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
