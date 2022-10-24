import type { NextPage } from 'next'
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Aliz stuff</title>
        <meta name="description" content="Portfolio" />
        <meta
          name="keyword"
          content="portfolio, javascript, typescript, nextjs, tailwind, developer"
        />
        <link rel="icon" href="/rainbow.ico" />
      </Head>
      <h1 className="text-red-500">hello</h1>
    </div>
  );
}

export default Home
