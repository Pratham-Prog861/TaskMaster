import React from "react";
import { ModeToggle } from "./mode-toggle";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
      <Link href='/'>
        <h1 className="text-2xl font-bold">TaskMaster</h1>
      </Link>
      <div className="flex items-center gap-4">
        <ModeToggle />
        <SignedOut>
          <SignInButton mode="modal">
            <Button>Get Started</Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <Link href="/dashboard">
            <Button>Dashboard</Button>
          </Link>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
