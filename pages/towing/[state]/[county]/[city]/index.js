import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Cities from "../../../../../components/section1/Cities";

export default function Home() {
  
  return (
    <div>
      {/* <Head>
        <title>Towing Service</title>
        <meta name="description" content="Nation Wide USA Toing" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <main>
        {/* <Header /> */}
        {/* <Section /> */}
        {/* <Work /> */}
        {/* <ServicesSection /> */}
        <Cities />
        {/* <Footer /> */}
      </main>
    </div>
  );
}
