import React from "react";
import CallButton from "./CallButton";
import SearchBar from "./SearchBar";
const Section = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full h-screen px-4 bg-center bg-cover bg-hero-image">
        <div className="font-extrabold text-center text-white uppercase lg:w-4/12">
          <CallButton phoneText="+1-810-594-5229" phoneNo="+18105945229" />
          <br />
          <h1 className="text-3xl ">Nation Wide</h1>
          <h1 className="text-7xl ">USA TOWING</h1>
          <br />
          <SearchBar />
        </div>
      </div>
    </>
  );
};

export default Section;
