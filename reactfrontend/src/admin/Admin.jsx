import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const AdminDashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const data = [
    {
      username: "John Doe",
      email: "john@example.com",
      course_opting_date: "2024-08-01",
      contact_no: "123-456-7890",
      country: "USA",
      job_profile: "Software Engineer",
      course: "data Analytics",
    },
    {
      username: "Jane Smith",
      email: "jane@example.com",
      course_opting_date: "2024-08-05",
      contact_no: "987-654-3210",
      country: "Canada",
      job_profile: "Data Analyst",
      course: "digital marketing",
    },
    // Add more data as needed
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Tabs className="flex w-full">
        <div
          className={`fixed md:static top-0 left-0 h-full w-64 bg-indigo-800 text-white transition-transform transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0`}
        >
          <div className="flex items-center justify-center h-20 shadow-md">
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          </div>
          <TabList className="flex flex-col p-4 space-y-2">
            <Tab
              className="cursor-pointer p-2 rounded-md hover:bg-indigo-600"
              selectedClassName="bg-indigo-600"
            >
              Dashboard
            </Tab>
            <Tab
              className="cursor-pointer p-2 rounded-md hover:bg-indigo-600"
              selectedClassName="bg-indigo-600"
            >
              Users
            </Tab>
            {/* <Tab className="cursor-pointer p-2 rounded-md hover:bg-indigo-600" selectedClassName="bg-indigo-600">
              Settings
            </Tab> */}

            <Tab
              className="cursor-pointer p-2 rounded-md hover:bg-indigo-600"
              selectedClassName="bg-indigo-600"
            >
              Logout
            </Tab>
          </TabList>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Top Navbar bg-white  */}
          <header className=" bg-indigo-600 text-white flex justify-between items-center shadow-md px-6 py-4 md:hidden">
            <div className="text-2xl font-semibold">Dashboard</div>
            <button
              onClick={toggleSidebar}
              className="text- focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </header>

          {/* Main Content */}
          <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-50">
            <TabPanel>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                <div className="bg-white shadow rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2">Total Users</h3>
                  <p className="text-2xl">1,234</p>
                </div>
                {/* <div className="bg-white shadow rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2">Active Users</h3>
                  <p className="text-2xl">567</p>
                </div>
                <div className="bg-white shadow rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2">New Signups</h3>
                  <p className="text-2xl">45</p>
                </div> */}
              </div>
            </TabPanel>

            {/* user table */}
            <TabPanel>
              <div className="bg-white shadow rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2">Users List</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white shadow-md rounded-lg">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs font-semibold text-gray-600  tracking-wider">
                          Sr. No
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs font-semibold text-gray-600  tracking-wider">
                          Username
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs font-semibold text-gray-600  tracking-wider">
                          Email
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs font-semibold text-gray-600  tracking-wider">
                          Course Opting Date
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs font-semibold text-gray-600  tracking-wider">
                          Course name
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs font-semibold text-gray-600  tracking-wider">
                          Contact No
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs font-semibold text-gray-600  tracking-wider">
                          job profile
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs font-semibold text-gray-600  tracking-wider">
                          Country
                        </th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs font-semibold text-gray-600  tracking-wider">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((item, index) => (
                        <tr key={index} className="hover:bg-gray-100">
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            {index + 1}
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            {item.username}
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            {item.email}
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            {item.course_opting_date}
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            {item.course}
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            {item.contact_no}
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            {item.job_profile}
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            {item.country}
                          </td>
                          <div className="text-center ">
                            <button className="bg-red-500 p-1 rounded px-3 mt-10 lg:mt-3 font- text-white">
                              Delete{" "}
                            </button>
                          </div>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="bg-white shadow rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2">Settings</h3>
                <p>System settings...</p>
              </div>
            </TabPanel>

            <TabPanel>
              <h2 className="text-xl font-bold  ml-2 mb-2">logout</h2>
              <div className="bg-white shadow rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2">Logout</h3>
                <p>Logout content...</p>
              </div>
            </TabPanel>
          </main>
        </div>
      </Tabs>
    </div>
  );
};

export default AdminDashboard;
