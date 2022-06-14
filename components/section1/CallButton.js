import React from "react";
import { PhoneIcon } from "@heroicons/react/outline";

export default function CallButton({ phoneText, phoneNo }) {
  const data = {
    name: `${phoneText}`,
    href: `tel:${phoneNo}`,
    icon: PhoneIcon,
  };
  return (
    <div className="justify-center px-5 py-5 space-y-6 bg-inherit sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
      <div key={data.name} className="flow-root">
        {/* <span className="ml-0 font-serif font-medium">Call us</span> */}
        <a
          href={data.href}
          className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 bg-gray-100 rounded-md hover:bg-gray-300"
        >
          <data.icon
            className="flex-shrink-0 w-6 h-6 text-gray-400"
            aria-hidden="true"
          />
          <span className="ml-3">{data.name}</span>
        </a>
      </div>
    </div>
  );
}