import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CollageCard = () => {
  const [collage, setCollage] = useState([]);
  useEffect(() => {
    fetch("collage.json")
      .then((res) => res.json())
      .then((data) => {
        setCollage(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  console.log(collage);
  return (
    <div className="grid grid-cols-3 mt-10 gap-5 mx-auto">
      {collage.map((item) => (
        <div className="card bg-base-100   shadow-xl relative" key={item._id}>
          <figure className="max-h-[220px]">
            <img src={item.collegeImage} alt="collage" />
          </figure>
          <div className="card-body relative " style={{ padding: "1.5rem" }}>
            <h2 className="card-title">{item.collegeName}</h2>
            <h2 className="font-bold border-b-2 border-[var(--primary-color)] w-[25%]">
              Admission
            </h2>
            <div className="card-actions justify-between">
              <div className="bg-[var(--primary-color)] text-white px-2 font-bold rounded-md p-1">
                START: {item.admissionDates.start}
              </div>
              <div className="bg-[var(--primary-color)] text-white px-2 font-bold rounded-md p-1">
                END:
                {item.admissionDates?.end}
              </div>
            </div>
            <h2 className="font-bold border-b-2 border-[var(--primary-color)] w-[15%]">
              Events
            </h2>
            <div className="flex gap-2 flex-wrap">
              {item?.events.map((i) => (
                <h1 className="">{i.title} ||</h1>
              ))}
            </div>
            <h2 className="font-bold border-b-2 border-[var(--primary-color)] w-[40%]">
              Research History
            </h2>
            <div className="flex gap-2 flex-wrap">
              {item?.researchHistory.map((i) => (
                <h1 className="">{i.title} ||</h1>
              ))}
            </div>
            <h2 className="font-bold border-b-2 border-[var(--primary-color)] w-[15%]">
              Sports
            </h2>
            <div className="flex gap-2 flex-wrap">
              {item?.sports.map((i) => (
                <h1 className="">{i} ||</h1>
              ))}
            </div>
            <div className="h-8 w-full"></div>
            <Link
              to={`/${item._id}`}
              className="absolute bottom-[10px] w-[370px] "
            >
              <button className="btn btn-active btn-neutral w-full">
                Details
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CollageCard;
