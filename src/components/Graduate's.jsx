import React from "react";

const Graduates = () => {
  return (
    <div>
      <div>
        <h1 className="text-center  text-2xl border-b-2 w-[10%] mx-auto font-bold">
          Graduate's
        </h1>
      </div>
      <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          <img
            src="https://img.freepik.com/free-photo/happy-caucasian-male-graduate-graduation-glow-with-diploma-looking-camera-campus_496169-1341.jpg?t=st=1729933743~exp=1729937343~hmac=505acf394ed5d7a79552f7d053d7b4a4ce43a9bf986a4991c25405160d3f1ffc&w=740"
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://img.freepik.com/premium-photo/portrait-smiling-young-woman-standing-outdoors_1048944-1633761.jpg?w=740"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://img.freepik.com/free-photo/three-graduate-friends-graduation-robes-looking-their-diploma-campus_496169-1352.jpg?t=st=1729934043~exp=1729937643~hmac=ba97f4c099ebcb42a630da7cc56dc6746598df3e645c6881114ac23c04152015&w=740"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://img.freepik.com/free-photo/young-girl-graduated_23-2148522224.jpg?t=st=1729933818~exp=1729937418~hmac=ccb7c2e3292787d1f13e54ce6c1d60e9dfd639e95223b99067dec504f4c7ed5d&w=740"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://img.freepik.com/free-photo/young-students-celebrating-their-graduation_23-2148201867.jpg?t=st=1729934082~exp=1729937682~hmac=d2207afe25769f45e057ce788e9625f5736afd648a72494504097098c1b21095&w=740"
          />
        </div>
      </section>
    </div>
  );
};

export default Graduates;
