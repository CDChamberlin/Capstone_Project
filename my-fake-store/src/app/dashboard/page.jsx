"use client";

import ProductCards from "@/components/ProductCards";
import { Suspense } from "react";

export default function Dashboard() {
  return(<>
    <h1>Dashboard</h1>
    <Suspense fallback={<Loading />}>
      <ProductCards />
    </Suspense>
  </>);
}

function Loading(){
    return <h2>Loading Products</h2>
}
