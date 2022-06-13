import Head from "next/head";
import Image from "next/image";
import Header from "../components/section1/Header";
import Section from "../components/section1/Section";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Towing Service</title>
        <meta name="description" content="Nation Wide USA Toing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Section />
      
    </div>
  );
}
