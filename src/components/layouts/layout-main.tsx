import Head from "next/head";
import { Jost } from "next/font/google";
import Header from "../general/header";

const jost = Jost({ subsets: ["latin"] });

const LayoutMain = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>TEPI.MY | Makan Malam Tepi Jalan</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${jost.className} bg-zinc-100 text-zinc-700`}>
        <Header />
        <div className="min-h-screen w-screen pt-[70px]">{children}</div>
      </main>
    </>
  );
};

export default LayoutMain;
