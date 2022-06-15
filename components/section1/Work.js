import React from "react";

export default function Work() {
  return (
    <div className="bg-gray-100 w-full py-20 flex flex-col items-center justify-center text-center">
      <h1 className="text-3xl font-bold">HOW TOWING SERVICE WORK</h1>
      <div className="w-10/12 mt-5 flex flex-col items-center md:flex-row">
        <WorkComponent
          img="./images/icons/ph-icn.png"
          title="1. Request Help"
          des="It is a long established fact that a reader will be distracted by the
                        readable content"
        />
        <WorkComponent
          img="./images/icons/truck-icn.png"
          title="2. Truck Show Up"
          des="It is a long established fact that a reader will be distracted by the
                        readable content"
        />
        <WorkComponent
          img="./images/icons/tow-icn.png"
          title="3. Off You Go"
          des="It is a long established fact that a reader will be distracted by the
                        readable content"
        />
      </div>
    </div>
  );
}

function WorkComponent({ img, title, des }) {
  return (
    <div className="flex flex-col items-center p-5 justify-center">
      <div
        className="flex h-40 w-40 rounded-full items-center justify-center bg-white"
      >
        <img src={img} alt="" />
      </div>
      <h1 className="font-semibold text-2xl mt-5" variant="h5">
        {title}
      </h1>
      <h1>{des}</h1>
    </div>
  );
}
