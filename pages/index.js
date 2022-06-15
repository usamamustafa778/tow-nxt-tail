import Head from "next/head";
import Image from "next/image";
import Carousel from "../components/section1/Carousel";
import Footer from "../components/section1/Footer";
import Header from "../components/section1/Header";
import Section from "../components/section1/Section";
import ServicesSection from "../components/section1/ServicesSection";
import Work from "../components/section1/Work";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Towing Service</title>
        <meta name="description" content="Nation Wide USA Toing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Section />
        <Work />
        <ServicesSection/>
        <Carousel/>
        <Footer/>
      </main>
    </div>
  );
}
