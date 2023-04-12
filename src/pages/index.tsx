import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>TEPI.MY | Makan Malam Tepi Jalan</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen w-screen items-center justify-center bg-gradient-to-b from-outrageous-orange-100 to-outrageous-orange-50">
        <div className="flex flex-col items-center justify-center gap-2 text-2xl font-bold uppercase text-outrageous-orange-950">
          <p className="tracking-widest">Tepi.my</p>
          <p>Coming Soon</p>
        </div>
      </main>
    </>
  );
};

export default Home;
