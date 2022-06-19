import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function Zips() {

  const router = useRouter();
  let { state } = router.query;
  let { county} = router.query;
  let { city} = router.query;

  const [cities, setCities] = useState([]);

  // Fetching States
  useEffect(() => {
    //async call
    if (router.isReady) {
      // Code using query
      const fetchData = async () => {
        const result = await axios.get(
          `http://towing-api.3utilities.com:786/service/state/county/city/zips?_q1=towing&_q2=${state}&_q3=${county}&_q4=${city}`
        );
        setCities(result.data);
      };
      fetchData();
    }
  }, [state, router.isReady]);

  return (
    <div className="w-full flex py-16 flex-col items-center">
      <h1 className="text-4xl font-bold capitalize">{city}</h1>
      <div className="w-10/12 ">
        <ul className="mt-10 columns-2 md:columns-4 lg:columns-6">
          {cities ? (
            cities.map((val, key) => {
              return (
                <li className="hover:text-blue-500" key={key}>
                  <Link href={val.zip_route}>{val.zip_name}</Link>
                </li>
              );
            })
          ) : (
            <h1>There are no cities</h1>
          )}
        </ul>
      </div>
    </div>
  );
}
