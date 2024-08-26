// import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";

export default function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // 试图在 effect 内部更新 count
    // setCount(count + 1);
    let active = true;
    const fet = async () => {
      const response = await fetch("./json/test.json");
      console.log("🚀XZG ~ fet ~ response:", response);
      if (response.ok) {
        // const result = await response.json();
        // console.log(result);
        if (active) {
          setCount(11);
        }
      }
    };
    fet();
    console.log(count,"cishu");
    return () => {
      active = false;
    };
  }, [count]); // count 是依赖项

  return <div>Count: {count}</div>;
}
