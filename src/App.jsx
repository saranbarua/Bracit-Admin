import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Sidebar from "./Components/Sidebar";
import Topbar from "./Components/Topbar";
import Schedule from "./pages/Schedule";
import ScholarshipHistory from "./pages/ScholarshipHistory";
import CourseDrop from "./pages/CourseDrop";
import SemesterDrop from "./pages/SemesterDrop";
import DepartmentChange from "./pages/DepartmentChange";
import Grades from "./pages/Grades";
import Probation from "./pages/Probation";
import Payslip from "./pages/Payslip";
import Home from "./pages/Home";
import PhaseOne from "./pages/PhaseOne";
import PhaseTwo from "./pages/PhaseTwo";
import Self from "./pages/Self";
import WishListStatus from "./pages/WishListStatus";
import WishList from "./pages/WishList";

// Layout for authenticated routes
const DashboardLayout = ({ children }) => (
  <div className="flex flex-col md:flex-row">
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
            path="/advising/wishlist"
            element={
              <DashboardLayout>
                <WishList />
              </DashboardLayout>
            }
          />
          <Route
            path="/advising/phase-one"
            element={
              <DashboardLayout>
                <PhaseOne />
              </DashboardLayout>
            }
          />
          <Route
            path="/advising/phase-two"
            element={
              <DashboardLayout>
                <PhaseTwo />
              </DashboardLayout>
            }
          />
          <Route
            path="/advising/self"
            element={
              <DashboardLayout>
                <Self />
              </DashboardLayout>
            }
          />
          <Route
            path="/advising/status"
            element={
              <DashboardLayout>
                <WishListStatus />
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
