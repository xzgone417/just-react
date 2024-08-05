import BlogsTemplate from "@/templates/BlogsTemplate";
import { Metadata } from "next/types";
import { Suspense, useState } from "react";
import Loading from "@/app/loading";
export const metadata: Metadata = {
  title: "SOFISH-Blogs",
  description: "SOFISH-Blogs",
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
        <BlogsTemplate data={data}></BlogsTemplate>
      </Suspense>
    </>
  );
}
