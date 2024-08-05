import GamesTemplate from "@/templates/GamesTemplate";
import { Metadata } from "next/types";
import { Suspense, useState } from "react";
import Loading from "@/app/loading";
export const metadata: Metadata = {
  title: "SOFISH-Games",
  description: "SOFISH-Games",
};
async function getPageData() {
  const res = await fetch("https://fl.sogamecdn.com/officialweb/games.json");
if (!res.ok) throw new Error();
  return res.json();
}

export default async function Games() {
  const data = await getPageData();
  return (
    <>
      <Suspense fallback={<Loading></Loading>}>
        <GamesTemplate data={data}></GamesTemplate>
      </Suspense>
    </>
  );
}
