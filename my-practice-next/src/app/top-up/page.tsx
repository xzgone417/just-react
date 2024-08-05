import TopUpTemplate from "@/templates/TopUpTemplate";
import { Metadata } from "next/types";
import { Suspense, useState } from "react";
import Loading from "@/app/loading";
export const metadata: Metadata = {
  title: "SOFISH-TopUp",
  description: "SOFISH-TopUp",
};
async function getPageData() {
  const res = await fetch("https://fl.sogamecdn.com/officialweb/topup.json");
if (!res.ok) throw new Error();
  return res.json();
}

export default async function Games() {
  const data = await getPageData();
  return (
    <>
      <Suspense fallback={<Loading></Loading>}>
        <TopUpTemplate data={data}></TopUpTemplate>
      </Suspense>
    </>
  );
}
