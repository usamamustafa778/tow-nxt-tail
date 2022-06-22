import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function Cities() {

  const router = useRouter();
  const { service} = router.query;
  const { state } = router.query;
  const { county} = router.query;
  const url = `http://towing-api.3utilities.com:786/service/state/county/city?_q1=towing&_q2=${state}&_q3=${county}`;

  const [cities, setCities] = useState([]);

  // Fetching States
  useEffect(() => {
    //async call
    if (router.isReady) {
      // Code using query
      const fetchData = async () => {
        const result = await axios.get(url);
        setCities(result.data);
      };
      fetchData();
    }
  }, [url, router.isReady]);

  return (
    <div className="w-full flex py-16 flex-col items-center">
      <h1 className="text-4xl font-bold capitalize">{county}</h1>
      <div className="w-10/12 ">
        <ul className="mt-10 columns-2 md:columns-4 lg:columns-6">
          {cities ? (
            cities.map((val, key) => {
              return (
                <li className="hover:text-blue-500" key={key}>
                  <Link href={val.city_route}>{val.city_name}</Link>
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
