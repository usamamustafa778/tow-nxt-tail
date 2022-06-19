import { useRouter } from "next/router";
import Head from "next/head";
import React from "react";
import Cities from "../../../../components/section1/Cities";
import Header from "../../../../components/section1/Header";
import Section from "../../../../components/section1/Section";
import Work from "../../../../components/section1/Work";
import Footer from "../../../../components/section1/Footer";
import ServicesSection from "../../../../components/section1/ServicesSection";

export default function Home() {

    const router = useRouter();
    let { county } = router.query;
  
  return (
    <div>
      <Head>
        <title>Towing Service | {county}</title>
        <meta name="description" content="Nation Wide USA Toing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
