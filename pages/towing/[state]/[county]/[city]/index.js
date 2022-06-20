import { useRouter } from "next/router";
import Head from "next/head";
import Zips from "../../../../../components/section1/Zips";

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
        <Zips />
        {/* <Footer /> */}
      </main>
    </div>
  );
}
