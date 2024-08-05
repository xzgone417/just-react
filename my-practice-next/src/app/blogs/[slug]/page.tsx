import SingleBlogTemplate from "@/templates/SingleBlogTemplate";
import { Metadata } from "next/types";
import { Suspense, useState } from "react";
import Loading from "@/app/loading";
export const metadata: Metadata = {
  title: "SOFISH-Blogs",
  description: "SOFISH-Blogs",
};
async function getPageData(_slug: string) {
  const res = await fetch(`https://fl.sogamecdn.com/officialweb/${_slug}.json`);
if (!res.ok) throw new Error();
  return res.json();
}

export default async function SingleBlog({
  params,
}: {
  params: { slug: string };
}) {
  const data = await getPageData(params.slug);
  return (
    <>
      <Suspense fallback={<Loading></Loading>}>
        <SingleBlogTemplate data={data}></SingleBlogTemplate>
      </Suspense>
    </>
  );
}
