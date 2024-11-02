import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuth } from "./hook/useAuth";

const MyCollege = () => {
  const [collegeInfo, setCollegeInfo] = useState(null);
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const { user } = useAuth();

  useEffect(() => {
    // Fetch admission info from local storage (or global state)
    const storedCollegeInfo = JSON.parse(localStorage.getItem("admissionInfo"));
    setCollegeInfo(storedCollegeInfo);
  }, []);

  const handleReviewSubmit = async () => {
    const newReview = {
      review,
      rating,
      date: new Date().toLocaleDateString(),
      email: user.email,
      collageName: collegeInfo.college.name,
      collageImage: collegeInfo.college.image,
    };

    const res = await axios.post(
      `http://localhost:5000/review/${user?.email}`,
      {
        ...newReview,
      }
    );
    console.log(res.data);

    alert("Review added successfully!");
  };

  if (!collegeInfo) return <p>Please Select a Collage...</p>;

  return (
    <div className="container mx-auto p-4 my-10">
      <h1 className="text-3xl font-bold mb-4">My College Details</h1>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-2xl font-semibold">{collegeInfo.college.name}</h2>
        <img
          src={collegeInfo.college.image}
          alt={collegeInfo.college.name}
          className="w-full h-40 object-cover rounded my-4"
        />
        <p>
          <strong>Candidate Name:</strong> {collegeInfo.formData.candidateName}
        </p>
        <p>
          <strong>Subject:</strong> {collegeInfo.formData.subject}
        </p>
        <p>
          <strong>Email:</strong> {collegeInfo.formData.email}
        </p>
        <p>
          <strong>Phone:</strong> {collegeInfo.formData.phone}
        </p>
        <p>
          <strong>Address:</strong> {collegeInfo.formData.address}
        </p>
        <p>
          <strong>Date of Birth:</strong> {collegeInfo.formData.dob}
        </p>
      </div>

      {/* Review Section */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Add a Review</h3>
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Write your review here"
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />
        <div className="mb-2">
          <label className="mr-2">Rating:</label>
          <select
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="border p-1 rounded"
          >
            <option value={0}>Select Rating</option>
            {[1, 2, 3, 4, 5].map((star) => (
              <option key={star} value={star}>
                {star} Star
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={handleReviewSubmit}
          className="bg-blue-500 text-white p-2 rounded font-semibold hover:bg-blue-600 transition duration-300"
        >
          Submit Review
        </button>
      </div>
    </div>
  );
};

export default MyCollege;
