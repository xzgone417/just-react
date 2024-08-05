import GiftCenterTemplate from "@/templates/GiftCenterTemplate";
import { Metadata } from "next/types";
import { Suspense, useState } from "react";
import Loading from "@/app/loading";
export const metadata: Metadata = {
  title: "SOFISH-GiftCenter",
  description: "SOFISH-GiftCenter",
};
async function getPageData() {
  const res = await fetch(
    "https://fl.sogamecdn.com/officialweb/gift-center.json"
  );
  if (!res.ok) throw new Error();
  return res.json();
}

export default async function Games() {
  const data = await getPageData();
  return (
    <>
      <Suspense fallback={<Loading></Loading>}>
        <GiftCenterTemplate data={data}></GiftCenterTemplate>
      </Suspense>
    </>
  );
}
