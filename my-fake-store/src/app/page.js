"use client";
import sticker from "assets/sticker.png";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const router = useRouter();
  const [message, setMessage] = useState("Loading");

  return (
    <main className={styles.main}>
      <h1>Welcome to the Fake Store Project</h1>
      <img
        className="Logo"
        src={sticker}
        alt="Cat and Mouse Collectibles"
        onClick={() => router.push("dashboard")}
      ></img>
      <h2>
        Mini Project 3 by C. Chamberlin for Institute of Data Software
        Engineering
      </h2>
    </main>
  );
}
