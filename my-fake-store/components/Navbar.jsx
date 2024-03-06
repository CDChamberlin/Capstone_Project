"use client";
import { useUser } from "@/context/UserContext";
import { Button, ButtonGroup } from "@mui/material";
import Link from "next/link";

export default function Navbar({ children }) {
  const { user, logout } = useUser();

  return (
    <>
      <ButtonGroup size="medium" variant="contained">
        {/* Use Link component for client-side navigation */}
        <Link href="/">
          <Button>Home</Button>
        </Link>
        <Link href="/about">
          <Button>About</Button>
        </Link>
        <Link href="/shopping">
          <Button>Cart</Button>
        </Link> 
        </ButtonGroup>
        {user ? (
          <ButtonGroup>
          <Link href="/">
            <Button onClick={logout}>Log Out</Button>
          </Link>
          <Link href="/settings">
            <Button>Settings</Button>
          </Link>
          </ButtonGroup>
        ) : (
          <Link href="/login">
            <Button>Log In</Button>
          </Link>
        )}
      {children}
    </>
  );
}
