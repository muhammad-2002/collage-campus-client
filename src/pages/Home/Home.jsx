import React from "react";
import CollageCard from "../../components/CollageCard";
import Graduates from "../../components/Graduate's";
import RecharcePaper from "../../components/RecharcePaper";
import Reviews from "../../components/Reviews";
import { useAuth } from "../../components/hook/useAuth";

const Home = () => {
  const { user } = useAuth();
  return (
    <div>
      <div>
        <div className="px-10 py-5 ">
          <div className="flex ">
            <input
              type="text"
              className="border-none outline-none   placeholder-gray-500 text-black bg-[#F2F2F2] px-5 py-2"
              placeholder="find your collage"
            />
            <button className="font-bold bg-[var(--primary-color)] px-3 text-white">
              Search
            </button>
          </div>
          <CollageCard></CollageCard>
        </div>
        <Graduates></Graduates>
        <RecharcePaper></RecharcePaper>
        {user && <Reviews></Reviews>}
      </div>
    </div>
  );
};

export default Home;
