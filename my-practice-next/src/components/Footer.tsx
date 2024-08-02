"use client";

import Link from "next/link";
import { useState } from "react";

function Footer(params: any) {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>{count}</h1>
      <p>{JSON.stringify(params.data)}</p>
      <h2>3333333</h2>
    </>
  );
}

export default Footer;
