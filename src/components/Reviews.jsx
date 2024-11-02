import axios from "axios";
import React, { useEffect, useState } from "react";

const Reviews = () => {
  const [review, setReview] = useState([]);
  console.log(review);
  useEffect(() => {
    try {
      const GetData = async () => {
        const res = await axios.get("http://localhost:5000/review");
        setReview(res.data);
      };
      GetData();
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <div className="grid grid-cols-3 gap-3 my-10">
      {review.map((r) => (
        <div
          key={r._id}
          className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800"
        >
          <div className="flex justify-between p-4">
            <div className="flex space-x-4">
              <div className="relative">
                <img
                  src={r.collageImage}
                  alt="College logo"
                  className="object-cover w-12 h-12 rounded-full ring-2 ring-blue-400 dark:ring-yellow-400 transition-transform duration-300 transform hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h4 className="font-bold text-lg text-gray-800 dark:text-gray-900">
                  {r.collageName}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-500">
                  {r.email}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-yellow-500 dark:text-yellow-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 h-5 fill-current"
              >
                <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
              </svg>
              <span className="text-xl font-bold">{r.rating}</span>
            </div>
          </div>
          <div className="p-4 space-y-2 text-sm text-gray-700 dark:text-gray-600">
            <p>
              sit amet consectetur adipisicing elit. Quod unde dignissimos
              distinctio vero delectus quibusdam nihil voluptatum totam earum
              tempore.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
