import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Login";
import Sidebar from "./Components/Sidebar";
import Topbar from "./Components/Topbar";
import Advising from "./Pages/Advising";
import Schedule from "./Pages/Schedule";
import ScholarshipHistory from "./Pages/ScholarshipHistory";
import CourseDrop from "./Pages/CourseDrop";
import SemesterDrop from "./Pages/SemesterDrop";
import DepartmentChange from "./Pages/DepartmentChange";
import Grades from "./Pages/Grades";
import Probation from "./Pages/Probation";
import Payslip from "./Pages/Payslip";
import Home from "./pages/Home";

// Layout for authenticated routes
const DashboardLayout = ({ children }) => (
  <div className="flex flex-col md:flex-row min-h-screen">
    {/* Sidebar */}
    <div className="w-full md:w-64 shadow-md">
      <Sidebar />
    </div>

    {/* Main Content */}
    <div className="flex-1 flex flex-col">
      <Topbar />
      <main className="flex-1 overflow-y-auto p-4 bg-gray-50">{children}</main>
    </div>
  </div>
);

const App = () => {
  const [login, setLogin] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });

  return (
    <Routes>
      <Route path="/" element={<Login setLogin={setLogin} />} />

      {login ? (
        <>
          <Route
            path="/home"
            element={
              <DashboardLayout>
                <Home />
              </DashboardLayout>
            }
          />
          <Route
            path="/advising"
            element={
              <DashboardLayout>
                <Advising />
              </DashboardLayout>
            }
          />
          <Route
            path="/schedule"
            element={
              <DashboardLayout>
                <Schedule />
              </DashboardLayout>
            }
          />
          <Route
            path="/scholarship-history"
            element={
              <DashboardLayout>
                <ScholarshipHistory />
              </DashboardLayout>
            }
          />
          <Route
            path="/course-drop"
            element={
              <DashboardLayout>
                <CourseDrop />
              </DashboardLayout>
            }
          />
          <Route
            path="/semester-drop"
            element={
              <DashboardLayout>
                <SemesterDrop />
              </DashboardLayout>
            }
          />
          <Route
            path="/department-change"
            element={
              <DashboardLayout>
                <DepartmentChange />
              </DashboardLayout>
            }
          />
          <Route
            path="/grades"
            element={
              <DashboardLayout>
                <Grades />
              </DashboardLayout>
            }
          />
          <Route
            path="/probation"
            element={
              <DashboardLayout>
                <Probation />
              </DashboardLayout>
            }
          />
          <Route
            path="/payslip"
            element={
              <DashboardLayout>
                <Payslip />
              </DashboardLayout>
            }
          />
        </>
      ) : (
        <Route path="*" element={<Navigate to="/" />} />
      )}
    </Routes>
  );
};

export default App;
