import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function States() {
  const router = useRouter();
  let { state } = router.query;

  const [counties, setCounties] = useState([]);

  // Fetching States

  useEffect(() => {
    //async call
    if (router.isReady) {
      // Code using query
      const fetchData = async () => {
        const result = await axios.get(
          `http://towing-api.3utilities.com:786/service/state/county?_q1=towing&_q2=${state}`
        );

        console.log(result.data);
        setCounties(result.data);
      };
      fetchData();
    }
  }, [state, router.isReady]);

  return (
    <div className="w-full flex py-16 flex-col items-center">
      <h1 className="text-4xl font-bold capitalize">{state}</h1>
      <div className="w-10/12 ">
        <ul className="mt-10 columns-2 md:columns-4 lg:columns-6">
          {counties ? (
            counties.map((val, key) => {
              return (
                <li key={key}>
                  <Link href={val.county_route}>{val.county_name}</Link>
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
