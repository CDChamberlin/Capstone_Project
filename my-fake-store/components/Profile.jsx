import { useUser } from "@/context/UserContext";
import { Button } from "@mui/material";
import { useState } from "react";

export default function Profile(user) {
const { currentUser } = useUser()
return (
    <>
      <h1>{currentUser.name}</h1>
      <Button onClick='#'>Cart</Button>
    </>
  );
}