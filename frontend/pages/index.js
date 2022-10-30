import Head from "next/head";

import Banner from "../components/card/banner";
import ProductGrid from "../components/list/productGrid";
import SideCategories from "../components/common/sideCategories";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Rmg Stock</title>
        <meta
          name="rmgstock.com"
          content="rmgstock.com is a trademark website of NITB group and GG Fashion Sourcing and is a trading hub for RMG buyers and suppliers in Bangladesh"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full">
        <Banner>{<div>Welcome to a unique shopping experience</div>}</Banner>
        <div className="mx-4 flex">
          <div className="hidden lg:block">
            <SideCategories />
          </div>
          <ProductGrid />
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <span>Footer</span> */}
        </a>
      </footer>
    </div>
  );
}
