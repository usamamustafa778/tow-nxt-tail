import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function States() {
  
  const router = useRouter();
  let { state} = router.query;

  const [counties, setCounties] = useState([]);

  // Fetching States
  useEffect(() => {
    axios.get(`http://towing-api.3utilities.com:786/service/state/county?_q1=towing&_q2=${state}`)
    .then((res) => {
      setCounties(res.data);
    });
  }, []);

  return (
    <div className="w-full flex py-16 flex-col items-center">
      <h1 className="text-4xl font-bold capitalize">{state}</h1>
      <div className="w-10/12 ">
      <ul className="mt-10 columns-2 md:columns-4 lg:columns-6">
        {counties ?
         counties.map((val, key) => {
          return (
            <li className="">
              <Link href={val.county_route}>{val.county_name}</Link>
            </li>
          );
        }):(
          "There are no counties"
        )}
        </ul>
      </div>
    </div>
  );
}
