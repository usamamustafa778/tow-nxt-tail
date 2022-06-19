import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function Cities() {
  
  const router = useRouter();
  let { state} = router.query;
  let { county } = router.query;

  const [cities, setCities] = useState([]);
  const url = `http://towing-api.3utilities.com:786/service/state/county/city?_q1=towing&_q2=${state}&_q3=${county}`

  // Fetching States
  useEffect(() => {
    axios.get(url)
    .then((res) => {
        console.log("Cities")
        console.log(res.data)
      setCities(res.data);
    });
  }, []);

  return (
    <div className="w-full flex py-16 flex-col items-center">
      <h1 className="text-4xl font-bold capitalize">{state}</h1>
      <div className="w-10/12 ">
      <ul className="mt-10 columns-2 md:columns-4 lg:columns-6">
        {cities.map((val, key) => {
          return (
            <li className="">
              <Link href={val.city_route}>{val.city_name}</Link>
            </li>
          );
        })}
        </ul>
      </div>
    </div>
  );
}
