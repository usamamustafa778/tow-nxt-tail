import { useRouter } from "next/router";
import React from "react";
import axios from "axios";
import Head from "next/head";
import Header from "../../../components/section1/Header";
import Section from "../../../components/section1/Section";
import Work from "../../../components/section1/Work";
import Counties from "../../../components/section1/Counties";
import ServicesSection from "../../../components/section1/ServicesSection";
import Footer from "../../../components/section1/Footer";

export default function Home() {

  const router = useRouter();
    let { state } = router.query;
  
  
  return (
    <div>
      <Head>
        <title>Towing Service | {state}</title>
        <meta name="description" content="Nation Wide USA Toing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* <Header /> */}
        {/* <Section /> */}
        {/* <Work /> */}
        {/* <ServicesSection /> */}
        <Counties />
        {/* <Footer /> */}
      </main>
    </div>
  );
}
