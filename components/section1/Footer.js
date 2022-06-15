import React from "react";

export default function Footer() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full bg-center bg-cover bg-cta py-20 text-center flex items-center justify-center">
        <div className="bg-white w-10/12 py-10 rounded-3xl md:w-8/12">
          <h1 className="text-3xl font-bold">Related Tags</h1>
          <ul className="mt-4">
            <li>Test Alturas, CA</li>
            <li>Test Alturas, CA</li>
            <li>Test Alturas, CA</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
