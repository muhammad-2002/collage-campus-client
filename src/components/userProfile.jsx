import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuth } from "./hook/useAuth";

const UserProfile = () => {
  const { user } = useAuth();
  const [editMode, setEditMode] = useState(false);
  const [userData, setUserData] = useState({});
  console.log(userData);

  const [formData, setFormData] = useState({
    displayName: "",
    email: "",
    university: "",
    address: "",
  });

  // Fetch user data on component load
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/user/${user.email}`
        );
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, [user.email]);

  // Update formData whenever userData changes
  useEffect(() => {
    setFormData({
      displayName: userData.displayName || "",
      email: userData.email || "",
      university: userData.university || "",
      address: userData.address || "",
    });
  }, [userData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const handleSave = async () => {
    try {
      await axios.patch(
        `https://connect-campus-server.vercel.app
/user/${user?.email}`,
        {
          displayName: formData.displayName,
          email: formData.email,
          university: formData.university,
          address: formData.address,
        }
      );
      setEditMode(false);
      setUserData(formData);
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };
  return (
    <div className="flex flex-col mx-auto my-20 justify-center max-w-xl p-6 shadow-md rounded-xl sm:px-12 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800">
      <img
        src={`${userData?.photoURL}`}
        alt="no image"
        className="w-32 h-32 mx-auto rounded-full bg-gray-500 dark:bg-gray-500 aspect-square"
      />
      <div className="space-y-4 text-center divide-y divide-gray-700 dark:divide-gray-300">
        <div className="my-2 space-y-1">
          <h2 className="text-xl font-semibold sm:text-2xl">
            {userData?.displayName}
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
                defaultValue={userData.displayName}
                onChange={handleChange}
                placeholder="Name"
                className="input input-bordered text-black w-full placeholder-gray-700"
              />
              <input
                type="email"
                name="email"
                defaultValue={userData.email}
                onChange={handleChange}
                placeholder="Email"
                className="input input-bordered w-full text-black placeholder-gray-700"
              />
              <input
                type="text"
                name="university"
                defaultValue={userData.university}
                onChange={handleChange}
                placeholder="University"
                className="input input-bordered w-full text-black  placeholder-gray-700"
              />
              <input
                type="text"
                name="address"
                defaultValue={userData.address}
                onChange={handleChange}
                placeholder="Address"
                className="input input-bordered w-full text-black  placeholder-gray-700"
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
              <p>Email: {userData?.email}</p>
              <p>University: {userData?.university}</p>
              <p>Address: {userData?.address}</p>
              <button
                onClick={() => setEditMode(true)}
                className="btn btn-secondary mt-4 w-full placeholder-gray-700"
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
