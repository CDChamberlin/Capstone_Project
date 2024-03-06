"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const router = useRouter();
  const [message, setMessage] = useState("Loading");

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8081/api/home")
  //     .then(function (response) {
  //       console.log(response);
  //       setMessage(response.data.message);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     })
  //     .finally();
  // });

  return (
    <main className={styles.main}>
      <h1>Welcome to the Fake Store Project</h1>
      <img
        className="Logo"
        src="https://placehold.co/250/blue/white?text=My+Fake+Store\nLogo&font=roboto"
        alt="My Fake Store Logo"
        onClick={() => router.push("dashboard")}
      ></img>
      <h2>
        Mini Project 3 by C. Chamberlin for Institute of Data Software
        Engineering
      </h2>
    </main>
  );
}
