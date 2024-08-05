import HomeTemplate from "@/templates/HomeTemplate";
import { Metadata } from "next/types";
import { Suspense, useState } from "react";
import Loading from "@/app/loading";
export const metadata: Metadata = {
  title: "SOFISH-HOME",
  description: "SOFISH-HOME",
};
async function getData() {
  const res = await fetch(
    "https://fl.sogamecdn.com/officialweb/homepage/data.json"
  );
  if (!res.ok) {
    throw new Error();
  }
  return res.json();
}

export default async function Home() {
  const data = await getData();
  return (
    <>
      <Suspense fallback={<Loading></Loading>}>
        <HomeTemplate data={data}></HomeTemplate>
      </Suspense>
    </>
  );
}
