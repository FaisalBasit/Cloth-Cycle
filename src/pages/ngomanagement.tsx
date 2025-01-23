import React, { useState } from "react";
import { Button } from "@/components/ui/button";

export default function NGOManagement() {
  // State to manage NGOs
  const [ngos, setNgos] = useState([
    { id: 1, name: "Helping Hands", email: "helping@ngo.org", address: "123 Main St" },
    { id: 2, name: "Cloth for Care", email: "care@ngo.org", address: "456 Oak St" },
  ]);

  // State for new NGO form
  const [newNgo, setNewNgo] = useState({
    name: "",
    email: "",
    address: "",
  });

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewNgo((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission to add a new NGO
  const handleAddNgo = (e: React.FormEvent) => {
    e.preventDefault();
    if (newNgo.name && newNgo.email && newNgo.address) {
      const newNgoData = { id: Date.now(), ...newNgo }; // Create a new NGO with a unique ID
      setNgos((prev) => [...prev, newNgoData]); // Update the NGO list
      setNewNgo({ name: "", email: "", address: "" }); // Reset the form
    } else {
      alert("Please fill out all fields before adding a new NGO.");
    }
  };

  // Handle NGO deletion
  const handleDeleteNgo = (id: number) => {
    setNgos((prev) => prev.filter((ngo) => ngo.id !== id));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4 text-blue-600">NGO Management</h2>

      {/* Add NGO Form */}
      <div className="mb-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
        <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">Add New NGO</h3>
        <form className="space-y-4" onSubmit={handleAddNgo}>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              NGO Name
            </label>
            <input
              type="text"
              name="name"
              value={newNgo.name}
              onChange={handleInputChange}
              placeholder="Enter NGO Name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm dark:bg-gray-700 dark:text-gray-200 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Contact Email
            </label>
            <input
              type="email"
              name="email"
              value={newNgo.email}
              onChange={handleInputChange}
              placeholder="Enter Contact Email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm dark:bg-gray-700 dark:text-gray-200 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Address
            </label>
            <textarea
              name="address"
              value={newNgo.address}
              onChange={handleInputChange}
              placeholder="Enter Address"
              rows={3}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm dark:bg-gray-700 dark:text-gray-200 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
            Add NGO
          </Button>
        </form>
      </div>

      {/* List and Manage NGOs */}
      <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
        <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">Manage NGOs</h3>
        <table className="w-full text-sm text-left text-gray-600 dark:text-gray-300">
          <thead className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
            <tr>
              <th className="px-4 py-2">NGO Name</th>
              <th className="px-4 py-2">Contact Email</th>
              <th className="px-4 py-2">Address</th>
              <th className="px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {ngos.map((ngo) => (
              <tr key={ngo.id} className="border-b dark:border-gray-700">
                <td className="px-4 py-2">{ngo.name}</td>
                <td className="px-4 py-2">{ngo.email}</td>
                <td className="px-4 py-2">{ngo.address}</td>
                <td className="px-4 py-2 text-center">
                  <button
                    className="text-red-600 hover:underline mx-1"
                    onClick={() => handleDeleteNgo(ngo.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {ngos.length === 0 && (
          <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
            No NGOs available. Add some using the form above.
          </p>
        )}
      </div>
    </div>
  );
}


