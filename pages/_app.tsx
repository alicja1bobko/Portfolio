import '../styles/globals.css'
import type { AppProps } from 'next/app'
// @ts-ignore
import gsap from "gsap/dist/gsap";
// @ts-ignore
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}



function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp
