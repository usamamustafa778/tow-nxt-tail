import Head from "next/head";
import Footer from "../components/section1/Footer";
import Header from "../components/section1/Header";
import Section from "../components/section1/Section";
import ServicesSection from "../components/section1/ServicesSection";
import States from "../components/section1/States";
import Work from "../components/section1/Work";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Towing Service | US</title>
        <meta name="description" content="Nation Wide USA Toing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Section />
        <Work />
        <ServicesSection />
        <States />
        <Footer />
      </main>
    </div>
  );
}
