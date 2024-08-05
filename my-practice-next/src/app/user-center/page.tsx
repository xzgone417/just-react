import UserCenterTemplate from "@/templates/UserCenterTemplate";
import { Metadata } from "next/types";
import { Suspense, useState } from "react";
import Loading from "@/app/loading";
export const metadata: Metadata = {
  title: "SOFISH-UserCenter",
  description: "SOFISH-UserCenter",
};
async function getPageData() {
  const res = await fetch(
    "https://fl.sogamecdn.com/officialweb/user-center.json"
  );
if (!res.ok) throw new Error();
  return res.json();
}

export default async function Games() {
  const data = await getPageData();
  return (
    <>
      <Suspense fallback={<Loading></Loading>}>
        <UserCenterTemplate data={data}></UserCenterTemplate>
      </Suspense>
    </>
  );
}
