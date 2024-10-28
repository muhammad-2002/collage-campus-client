import React, { useState } from "react";
import { Link } from "react-router-dom";

// Mock data for colleges
const collegesData = [
  {
    id: 1,
    name: "Harvard University",
    image:
      "https://media.tacdn.com/media/attractions-splice-spp-674x446/12/31/c0/58.jpg",
    rating: 4.9,
    admissionDate: "2024-09-15",
    researchCount: 250,
    events: ["Science Fair", "Career Expo", "Hackathon"],
    sports: ["Football", "Basketball", "Swimming"],
  },
  {
    id: 2,
    name: "Stanford University",
    image:
      "https://www.themaulerinstitute.com/wp-content/uploads/2019/01/stanford-campus.jpg",
    rating: 4.8,
    admissionDate: "2024-10-10",
    researchCount: 200,
    events: ["Tech Conference", "Alumni Meetup"],
    sports: ["Soccer", "Tennis"],
  },
  {
    id: 3,
    name: "Massachusetts Institute of Technology",
    image:
      "https://static.wixstatic.com/media/d5960e_3fc382b9d1074027b9d5e22788a4cb58~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
    rating: 4.7,
    admissionDate: "2024-08-20",
    researchCount: 300,
    events: ["Innovation Day", "Research Expo"],
    sports: ["Basketball", "Rowing", "Track & Field"],
  },
  {
    id: 4,
    name: "University of California, Berkeley",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKnM1r5MhacbOZHw1O5qOLAu_NQOor0riUWg&s",
    rating: 4.6,
    admissionDate: "2024-09-25",
    researchCount: 180,
    events: ["Entrepreneurship Summit", "Research Gala"],
    sports: ["Rugby", "Swimming", "Tennis"],
  },
  {
    id: 5,
    name: "Princeton University",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlVkw2EJtKWwAzKG2j4B5K6T4gwvmzLg-s7w&s",
    rating: 4.9,
    admissionDate: "2024-09-05",
    researchCount: 220,
    events: ["Tech Talk", "Open House"],
    sports: ["Lacrosse", "Rowing", "Basketball"],
  },
  {
    id: 6,
    name: "University of Oxford",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQi8FG0pD806M_bfSab7zNUrbPw1XRwMKpOw&s",
    rating: 4.8,
    admissionDate: "2024-10-01",
    researchCount: 275,
    events: ["Literary Festival", "Science Symposium"],
    sports: ["Cricket", "Rowing", "Soccer"],
  },
];

const CollegeDetails = () => {
  const [showDetails, setShowDetails] = useState(null);
  return (
    <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {collegesData.map((college) => (
        <div
          key={college.id}
          className="card bg-white rounded-lg shadow-md p-4"
        >
          <img
            src={college.image}
            alt={`${college.name}`}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{college.name}</h3>
            <p className="text-gray-600">Rating: {college.rating} ⭐</p>
            <p className="text-gray-600">
              Admission Date: {college.admissionDate}
            </p>
            <p className="text-gray-600">
              Research Projects: {college.researchCount}
            </p>
            <Link
              to={`/collage/${college.id}`}
              className="btn btn-primary mt-4"
            >
              Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CollegeDetails;
