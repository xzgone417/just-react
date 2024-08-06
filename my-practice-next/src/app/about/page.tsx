import AboutTemplate from "@/templates/AboutTemplate";
import { Metadata } from "next/types";
import { Suspense, useState } from "react";
import Loading from "@/app/loading";
export const metadata: Metadata = {
  title: "SOFISH-About",
  description: "SOFISH-About",
};
async function getPageData() {
  const res = await fetch("https://fl.sogamecdn.com/officialweb/blogs.json");
  if (!res.ok) throw new Error();
  return res.json();
}

export default async function Blogs() {
  const data = await getPageData();
  return (
    <>
      <Suspense fallback={<Loading></Loading>}>
        <AboutTemplate data={data}></AboutTemplate>
      </Suspense>
    </>
  );
}
