import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function States() {
  const [states, setStates] = useState([]);
  const url = `http://towing-api.3utilities.com:786/service/state?_q1=towing`;
  // Fetching States
  useEffect(() => {
    axios.get(url).then((res) => {
      console.log(res.data);
      setStates(res.data);
    });
  }, []);

  return (
    <div className="w-full flex py-16 flex-col items-center">
      <h1 className="text-4xl font-bold">Areas We Serve</h1>
      <div className="w-10/12 ">
        <ul className="mt-10 columns-2 md:columns-4 lg:columns-6">
          {states.map((val, i) => {
            return (
              <li key={i} className="hover:text-blue-500">
                <Link href={val.route}>{val.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
