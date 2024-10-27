import React, { useState } from "react";
import { useAuth } from "./hook/useAuth";

const UserProfile = () => {
  const { user } = useAuth();
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    displayName: user.displayName,
    email: user.email,
    university: user.university || "",
    address: user.address || "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Toggle edit mode and save changes
  const handleSave = () => {
    // Update user data in your app’s backend here
    setEditMode(false);
  };

  return (
    <div className="flex flex-col mx-auto my-20 justify-center max-w-xl p-6 shadow-md rounded-xl sm:px-12 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800">
      <img
        src={user.photoURL}
        alt=""
        className="w-32 h-32 mx-auto rounded-full bg-gray-500 dark:bg-gray-500 aspect-square"
      />
      <div className="space-y-4 text-center divide-y divide-gray-700 dark:divide-gray-300">
        <div className="my-2 space-y-1">
          <h2 className="text-xl font-semibold sm:text-2xl">
            {formData.displayName}
          </h2>
          <p className="px-5 text-xs sm:text-base text-gray-400 dark:text-gray-600">
            Full-stack developer
          </p>
        </div>

        <div className="space-y-4 pt-4">
          {editMode ? (
            <>
              <input
                type="text"
                name="displayName"
                value={formData.displayName}
                onChange={handleChange}
                placeholder="Name"
                className="input input-bordered w-full"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="input input-bordered w-full"
              />
              <input
                type="text"
                name="university"
                value={formData.university}
                onChange={handleChange}
                placeholder="University"
                className="input input-bordered w-full"
              />
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Address"
                className="input input-bordered w-full"
              />
              <button
                onClick={handleSave}
                className="btn btn-primary mt-4 w-full"
              >
                Save
              </button>
            </>
          ) : (
            <>
              <p>Email: {formData.email}</p>
              <p>University: {formData.university}</p>
              <p>Address: {formData.address}</p>
              <button
                onClick={() => setEditMode(true)}
                className="btn btn-secondary mt-4 w-full"
              >
                Edit
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
