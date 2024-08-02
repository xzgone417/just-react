import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoginDialog from "@/components/LoginDialog";
import HomePage from "@/views/HomePage";
import { Metadata } from "next/types";
import { Suspense, useState } from "react";
import "@/styles/index.scss";

export const metadata: Metadata = {
  title: "SOFISH-HOME",
  description: "SOFISH-HOME",
};
async function getData() {
  const res = await fetch(
    "https://fl.sogamecdn.com/officialweb/homepage/data.json"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  const data = await getData();
  return (
    <>
      <div className="responsive home-1" id="wrapper-container">
        <Header></Header>
        <Suspense fallback={<p>Loading...</p>}>
          <HomePage data={data}></HomePage>
        </Suspense>
        <Footer></Footer>
      </div>
      <LoginDialog></LoginDialog>
    </>
  );
}
