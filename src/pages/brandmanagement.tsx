import React, { useState } from "react";
import { Button } from "@/components/ui/button";

export default function BrandManagement() {
  // State for listing brands
  const [brands, setBrands] = useState([
    { id: 1, name: "Fashionista", description: "Premium fashion brand" },
    { id: 2, name: "TrendSetters", description: "Modern urban clothing" },
  ]);

  // State for new brand form
  const [newBrand, setNewBrand] = useState({
    name: "",
    description: "",
  });

  // Handle input changes for the new brand form
  const handleBrandInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewBrand((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission for adding a new brand
  const handleAddBrand = (e: React.FormEvent) => {
    e.preventDefault();
    if (newBrand.name && newBrand.description) {
      const newBrandData = { id: Date.now(), ...newBrand };
      setBrands((prev) => [...prev, newBrandData]);
      setNewBrand({ name: "", description: "" });
    } else {
      alert("Please fill in all fields to add a brand.");
    }
  };

  // Handle deleting a brand
  const handleDeleteBrand = (id: number) => {
    setBrands((prev) => prev.filter((brand) => brand.id !== id));
  };

  // State for defining voucher types and claim rules
  const [vouchers, setVouchers] = useState([
    { id: 1, name: "10% Discount", minPurchase: 100, expiration: "2025-12-31" },
  ]);
  const [newVoucher, setNewVoucher] = useState({
    name: "",
    minPurchase: 0,
    expiration: "",
  });

  // Handle voucher input changes
  const handleVoucherInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === "minPurchase") {
      setNewVoucher((prev) => ({ ...prev, [name]: Number(value) }));
    } else {
      setNewVoucher((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Handle submitting the new voucher form
  const handleAddVoucher = (e: React.FormEvent) => {
    e.preventDefault();
    if (newVoucher.name && newVoucher.minPurchase && newVoucher.expiration) {
      const newVoucherData = { id: Date.now(), ...newVoucher };
      setVouchers((prev) => [...prev, newVoucherData]);
      setNewVoucher({ name: "", minPurchase: 0, expiration: "" });
    } else {
      alert("Please fill in all fields to define a voucher.");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4 text-blue-600">Brand Management</h2>

      {/* Add a new brand */}
      <div className="mb-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
        <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">Add New Brand</h3>
        <form className="space-y-4" onSubmit={handleAddBrand}>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Brand Name</label>
            <input
              type="text"
              name="name"
              value={newBrand.name}
              onChange={handleBrandInputChange}
              placeholder="Enter Brand Name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm dark:bg-gray-700 dark:text-gray-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Description</label>
            <textarea
              name="description"
              value={newBrand.description}
              onChange={handleBrandInputChange}
              placeholder="Enter Brand Description"
              rows={3}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm dark:bg-gray-700 dark:text-gray-200"
            />
          </div>
          <Button type="submit" className="bg-blue-600 hover:bg-blue-700">Add Brand</Button>
        </form>
      </div>

      {/* List and Manage Brands */}
      <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
        <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">Manage Brands</h3>
        <table className="w-full text-sm text-left text-gray-600 dark:text-gray-300">
          <thead className="bg-gray-200 dark:bg-gray-700">
            <tr>
              <th className="px-4 py-2">Brand Name</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {brands.map((brand) => (
              <tr key={brand.id} className="border-b dark:border-gray-700">
                <td className="px-4 py-2">{brand.name}</td>
                <td className="px-4 py-2">{brand.description}</td>
                <td className="px-4 py-2 text-center">
                  <button
                    className="text-blue-600 hover:underline mx-1"
                    onClick={() => alert(`Editing ${brand.name}`)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-600 hover:underline mx-1"
                    onClick={() => handleDeleteBrand(brand.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {brands.length === 0 && (
          <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
            No brands available. Add some using the form above.
          </p>
        )}
      </div>
    </div>
  );
}
