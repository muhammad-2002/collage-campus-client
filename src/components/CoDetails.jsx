import React from "react";
import { useParams } from "react-router-dom";

const CoDetails = () => {
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
  const { id } = useParams();
  const college = collegesData.find((collage) => collage?.id == id);

  return (
    <div className="container mx-auto p-6 max-w-2xl bg-white rounded-lg shadow-lg my-10">
      <img
        src={college.image}
        alt={`${college.name}`}
        className="w-full h-64 object-cover rounded-lg"
      />
      <h2 className="text-3xl font-semibold mt-4">{college.name}</h2>
      <p className="text-gray-600 mt-2">Rating: {college.rating} ⭐</p>
      <p className="text-gray-600">Admission Date: {college.admissionDate}</p>
      <p className="text-gray-600">
        Research Projects: {college.researchCount}
      </p>

      <div className="mt-6">
        <h3 className="text-2xl font-semibold">Events</h3>
        <ul className="list-disc ml-5 mt-2">
          {college.events.map((event, index) => (
            <li key={index}>{event}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h3 className="text-2xl font-semibold">Sports Facilities</h3>
        <ul className="list-disc ml-5 mt-2">
          {college.sports.map((sport, index) => (
            <li key={index}>{sport}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CoDetails;
