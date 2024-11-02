import { useState } from "react";

const Admission = () => {
  const colleges = [
    {
      id: 1,
      name: "Harvard University",
      image:
        "https://www.themaulerinstitute.com/wp-content/uploads/2019/01/stanford-campus.jpg",
    },
    {
      id: 2,
      name: "Stanford University",
      image:
        "https://media.tacdn.com/media/attractions-splice-spp-674x446/12/31/c0/58.jpg",
    },
    {
      id: 3,
      name: "MIT",
      image:
        "https://static.wixstatic.com/media/d5960e_3fc382b9d1074027b9d5e22788a4cb58~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
    },
  ];

  const [selectedCollege, setSelectedCollege] = useState(null);
  const [formData, setFormData] = useState({
    candidateName: "",
    subject: "",
    email: "",
    phone: "",
    address: "",
    dob: "",
    image: null,
  });

  const handleCollegeClick = (college) => {
    setSelectedCollege(college);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      image: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const collegeInfo = {
      college: selectedCollege,
      formData,
    };

    // Save the admission info to local storage (or global state)
    localStorage.setItem("admissionInfo", JSON.stringify(collegeInfo));
    // const res = await axios.post(
    //   "http://localhost:5000/admission",
    //   collegeInfo
    // );

    // Reset form after submission
    setFormData({
      candidateName: "",
      subject: "",
      email: "",
      phone: "",
      address: "",
      dob: "",
      image: null,
    });
    setSelectedCollege(null);

    // Redirect or show a success message
    alert("Admission form submitted successfully!");
  };
  return (
    <div className="container mx-auto p-4 my-10">
      <h1 className="text-3xl font-bold text-center mb-6">College Admission</h1>

      {/* College Cards */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {colleges.map((college) => (
          <div
            key={college.id}
            className="border border-gray-300 rounded-lg shadow-md p-4 text-center cursor-pointer transform hover:scale-105 transition duration-300"
            onClick={() => handleCollegeClick(college)}
          >
            <img
              src={college.image}
              alt={college.name}
              className="w-full h-32 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold">{college.name}</h3>
          </div>
        ))}
      </div>

      {/* Admission Form */}
      {selectedCollege && (
        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">
            Admission Form for {selectedCollege.name}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="candidateName"
              placeholder="Candidate Name"
              value={formData.candidateName}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Candidate Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Candidate Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
            <input
              type="file"
              name="image"
              onChange={handleFileChange}
              required
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded font-semibold hover:bg-blue-600 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Admission;
