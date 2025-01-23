import React from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "./theme-btn";

// components/Navbar.tsx
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="p-4 bg-background/50 sticky top-0 backdrop-blur border-b z-50">
      <div className="container mx-auto flex justify-between items-center">
      <div className="text-2xl font-bold ">
          <Link href="/">
            <span className="text-blue-600">Cloth</span>Cycle
          </Link>
        </div>
        <div className="hidden md:flex space-x-4 items-center">
          <Link href="/" className="hover:text-blue-600 hover:scale-105 hover:font-semibold transition-transform duration-300">
            Home
          </Link>
          <Link href="/Clothes Donation" className="hover:text-blue-600 hover:scale-105 hover:font-semibold transition-transform duration-300">
            Clothes Donation
          </Link>
          <Link href="/Clothes Disposal" className="hover:text-blue-600 hover:scale-105 hover:font-semibold transition-transform duration-300">
            Clothes Disposal
          </Link>
          <Link href="/Donation Tracking" className="hover:text-blue-600 hover:scale-105 hover:font-semibold transition-transform duration-300">
            Donation Tracking
          </Link>

          <div className="flex items-center">
            <Link href="/auth/login">
              <Button className="mx-1 bg-blue-600 dark:text-white">Login</Button>
            </Link>
            <Link href="/auth/login">
              <Button className="mx-1 bg-blue-600 dark:text-white">Logout</Button>
            </Link>
            <ModeToggle />
            
          </div>
        </div>
        <div className="md:hidden">
          <Sheet>
            <span className="mx-2">
              <ModeToggle />
            </span>
            <SheetTrigger className="focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-76h7"
                ></path>
              </svg>
            </SheetTrigger>
             
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="font-bold">ClothCycle</SheetTitle>
                <SheetDescription>
                  <div className="flex flex-col gap-6">
                    <Link href="/">Home</Link>
                    <Link href="/Clothes Donation">Clothes Donation</Link>
                    <Link href="/Clothes Disposal">Clothes Disposal</Link>
                    <Link href="/Donation Tracking">Donation Tracking</Link>
                    <div className="flex flex-col gap-6">
                      <Link href="/auth/login">
                        <Button className=" bg-blue-600 dark:text-white mx-1 text-xs">Login</Button>
                      </Link>
                      <Link href="/auth/login">
                        <Button className=" bg-blue-600 dark:text-white mx-1 text-xs">Logout</Button>
                      </Link>
                    </div>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
