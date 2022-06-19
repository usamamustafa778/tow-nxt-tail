import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function States() {
  const router = useRouter();
  let { state } = router.query;

  const [counties, setCounties] = useState([]);
  const url = `http://towing-api.3utilities.com:786/service/state/county?_q1=towing&_q2=${state}`;
  console.log("01. Caught");
  console.log(state);
  console.log("02. Fetch URL");
  console.log(url);
  
  // Fetching States
  useEffect(() => {
    console.log("03. Now running use effect hook");
    const Api = () => {
      axios.get(url).then((res) => {
        console.log(res.data);
        setCounties(res.data);
      });
    };
    Api();
  }, [state]);

  return (
    <div className="w-full flex py-16 flex-col items-center">
      <h1 className="text-4xl font-bold capitalize">{state}</h1>
      <div className="w-10/12 ">
        <ul className="mt-10 columns-2 md:columns-4 lg:columns-6">
          {counties ? (
            counties.map((val, key) => {
              return (
                <li key={key}>
                  <Link  href={val.county_route}>{val.county_name}</Link>
                </li>
              );
            })
          ) : (
            <h1>There are no counties</h1>
          )}
        </ul>
      </div>
    </div>
  );
}
