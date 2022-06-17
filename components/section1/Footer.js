import React from "react";
import CallButton from "./CallButton"

export default function Footer() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full bg-center bg-cover bg-gray-50 py-10 text-center flex items-center justify-center">
        <div className="w-10/12 py-10 md:w-8/12">
          <h1 className="text-4xl font-bold">Related Services</h1>
          <ul className="mt-4 columns-3">
            <li className="mt-2">Test Alturas, CA</li>
            <li className="mt-2">Test Alturas, CA</li>
            <li className="mt-2">Test Alturas, CA</li>
            <li className="mt-2">Test Alturas, CA</li>
            <li className="mt-2">Test Alturas, CA</li>
            <li className="mt-2">Test Alturas, CA</li>
          </ul>
          <br /><br />
          <CallButton phoneText="+1-810-594-5229" phoneNo="+18105945229" />
        </div>
      </div>
      <div className="w-full bg-center bg-cover bg-cta py-20 text-center flex items-center justify-center">
        <div className="bg-white w-10/12 py-10 rounded-3xl md:w-8/12">
          <h1 className="text-4xl font-bold">Related Tags</h1>
          <ul className="mt-4 columns-3">
            <li className="mt-2">Test Alturas, CA</li>
            <li className="mt-2">Test Alturas, CA</li>
            <li className="mt-2">Test Alturas, CA</li>
            <li className="mt-2">Test Alturas, CA</li>
            <li className="mt-2">Test Alturas, CA</li>
            <li className="mt-2">Test Alturas, CA</li>
          </ul>
        </div>
      </div>
      <div className="w-full py-20 bg-black flex justify-center text-white">
        <div className="w-10/12 grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <h1 className="text-4xl font-bold">5 Star Review!</h1>
            <img src="/images/icons/starY.png" className="my-5" alt="" />
            <p>
              Everyday Locksmith provides a 24/7 locksmith services. We are
              licensed and insured, and all of our locksmiths are up to date
              with the latest security technology.
            </p>
          </div>
          <div>
            <h1 className="text-4xl capitalize">We accept all Major credit Cards!</h1>
            <img src="/images/pay-cards.png" className="w-full mt-5" alt="" />
          </div>
          <div>
          <CallButton phoneText="+1-810-594-5229" phoneNo="+18105945229" />
          </div>
        </div>
      </div>
    </div>
  );
}