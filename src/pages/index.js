/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import President from "@/components/home/president/President";
import useFetch from "@/hooks/useFetch";
import HomeAdvisor from "@/components/home/homeAdvisor/HomeAdvisor";
import HomeCountUp from "@/components/home/homeCountUp/HomeCountUp";
import CarouselBanner from "@/components/home/carouselBanner/CarouselBanner";
import LoadingSpinner from "@/components/loadingSpinner/LoadingSpinner";
import { TITLE } from "@/utils/api";

export default function Home() {
  const { data, loading } = useFetch("/home");
  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./shreepur.jpeg" />
      </Head>
      <main>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            <CarouselBanner data={data} loading={loading} />
            <President data={data} loading={loading} />
            <HomeCountUp data={data} loading={loading} />
          </>
        )}
      </main>
    </>
  );
}
