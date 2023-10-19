import Calculator from "@/components/Calculators";
import Head from "next/head";

export default function Home() {
  return (
    <div className="h-full">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Calculator />
    </div>
  );
}
