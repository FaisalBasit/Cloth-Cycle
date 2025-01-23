import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";  // Import useRouter from next/router
import NGOManagement from "./ngomanagement";
import BrandManagement from "./brandmanagement";
import UserManagement from "./usermanagement";

const AdminPage = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const router = useRouter();  // Instantiate the useRouter hook

  const renderSection = () => {
    switch (activeSection) {
      case "dashboard":
        return (
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-4 text-blue-600">Admin Dashboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">Donations</h3>
                <p className="text-2xl font-bold text-blue-600">1,234</p>
              </div>
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">Disposals</h3>
                <p className="text-2xl font-bold text-blue-600">567</p>
              </div>
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">User Engagement</h3>
                <p className="text-2xl font-bold text-blue-600">89%</p>
              </div>
            </div>
          </div>
        );
      case "ngo":
        return <NGOManagement />;
      case "brand":
        return <BrandManagement />;
      case "user":
        return <UserManagement />;
      default:
        return <div className="text-gray-700 dark:text-gray-300">Select a section from the sidebar.</div>;
    }
  };

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-blue-600 text-white flex flex-col">
        <div className="p-4 text-lg font-bold text-center border-b border-blue-700">
          Admin Panel
        </div>
        <nav className="flex-1 mt-4">
          <ul>
            <li>
              <button
                className={`w-full text-left px-4 py-2 hover:bg-blue-700 ${
                  activeSection === "dashboard" ? "bg-blue-700" : ""
                }`}
                onClick={() => setActiveSection("dashboard")}
              >
                Dashboard
              </button>
            </li>
            <li>
              <button
                className={`w-full text-left px-4 py-2 hover:bg-blue-700 ${
                  activeSection === "ngo" ? "bg-blue-700" : ""
                }`}
                onClick={() => setActiveSection("ngo")}
              >
                NGO Management
              </button>
            </li>
            <li>
              <button
                className={`w-full text-left px-4 py-2 hover:bg-blue-700 ${
                  activeSection === "brand" ? "bg-blue-700" : ""
                }`}
                onClick={() => setActiveSection("brand")}
              >
                Brand Management
              </button>
            </li>
            <li>
              <button
                className={`w-full text-left px-4 py-2 hover:bg-blue-700 ${
                  activeSection === "user" ? "bg-blue-700" : ""
                }`}
                onClick={() => setActiveSection("user")}
              >
                User Management
              </button>
            </li>
          </ul>
        </nav>
        <div className="p-4">
          <Button
            className="w-full bg-red-600 hover:bg-red-700"
            onClick={() => router.push("/auth/login")}  // Use router.push for navigation
          >
            Logout
          </Button>
        </div>
      </aside>

      <main className="flex-1 bg-gray-100 dark:bg-gray-900 p-6">{renderSection()}</main>
    </div>
  );
};

export default AdminPage;
