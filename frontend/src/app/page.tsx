"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const getMessage = async () => {
    const res = await axios.get("http://localhost:8000/");
    setMessage(res.data);
    console.log(res);
  }

  useEffect (() => {
    getMessage();  
    },[]);

  return (
  <div>
    <p> hello </p>
    <p>{message}</p>
  </div>
  );
}
