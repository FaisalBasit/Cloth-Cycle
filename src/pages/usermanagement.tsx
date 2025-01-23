import React, { useState } from "react";
import { Button } from "@/components/ui/button";

export default function UserManagement() {
  // State for listing users
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", issue: "Account locked" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", issue: "Unable to log in" },
  ]);

  // State for new user form
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    issue: "",
  });

  // Handle input changes for the new user form
  const handleUserInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission for adding a new user
  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault();
    if (newUser.name && newUser.email && newUser.issue) {
      const newUserData = { id: Date.now(), ...newUser };
      setUsers((prev) => [...prev, newUserData]);
      setNewUser({ name: "", email: "", issue: "" });
    } else {
      alert("Please fill in all fields to add a user.");
    }
  };

  // Handle deleting a user
  const handleDeleteUser = (id: number) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  // Handle resolving issues
  const handleResolveIssue = (id: number) => {
    setUsers((prev) => {
      const updatedUsers = prev.map((user) =>
        user.id === id ? { ...user, issue: "Resolved" } : user
      );
      return updatedUsers;
    });
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4 text-blue-600">User Management</h2>

      {/* Add a new user */}
      <div className="mb-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
        <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">Add New User</h3>
        <form className="space-y-4" onSubmit={handleAddUser}>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">User Name</label>
            <input
              type="text"
              name="name"
              value={newUser.name}
              onChange={handleUserInputChange}
              placeholder="Enter User Name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm dark:bg-gray-700 dark:text-gray-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              value={newUser.email}
              onChange={handleUserInputChange}
              placeholder="Enter User Email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm dark:bg-gray-700 dark:text-gray-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Issue</label>
            <textarea
              name="issue"
              value={newUser.issue}
              onChange={handleUserInputChange}
              placeholder="Enter User Issue"
              rows={3}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm dark:bg-gray-700 dark:text-gray-200"
            />
          </div>
          <Button type="submit" className="bg-blue-600 hover:bg-blue-700">Add User</Button>
        </form>
      </div>

      {/* List and Manage Users */}
      <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
        <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">Manage Users</h3>
        <table className="w-full text-sm text-left text-gray-600 dark:text-gray-300">
          <thead className="bg-gray-200 dark:bg-gray-700">
            <tr>
              <th className="px-4 py-2">User Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Issue</th>
              <th className="px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b dark:border-gray-700">
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.issue}</td>
                <td className="px-4 py-2 text-center">
                  <button
                    className="text-blue-600 hover:underline mx-1"
                    onClick={() => alert(`Editing ${user.name}`)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-green-600 hover:underline mx-1"
                    onClick={() => handleResolveIssue(user.id)}
                  >
                    Resolve Issue
                  </button>
                  <button
                    className="text-red-600 hover:underline mx-1"
                    onClick={() => handleDeleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {users.length === 0 && (
          <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
            No users available. Add some using the form above.
          </p>
        )}
      </div>
    </div>
  );
}
