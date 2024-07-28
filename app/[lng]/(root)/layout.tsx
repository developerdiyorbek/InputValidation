import Navbar from "@/components/shared/Navbar";
import { ChildProps } from "@/interfaces";
import React from "react";

function Layout({ children }: ChildProps) {
  return (
    <>
      <Navbar />
      <main className="mt-20 container mx-auto max-w-7xl">{children}</main>
    </>
  );
}

export default Layout;
