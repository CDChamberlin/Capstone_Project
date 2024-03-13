"use client";
import sticker from "assets/sticker.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const router = useRouter();
  const [message, setMessage] = useState("Loading");

  return (
    <main className={styles.main}>
      <h1>Welcome to Cat and Mouse Collectibles</h1>
      <Image
        className="logo"
        src={sticker}
        alt="Cat and Mouse Collectibles"
        onClick={() => router.push("dashboard")}
      />
      <h2>
         C. Chamberlin
      </h2>
    </main>
  );
}
