"use client";

import { SessionProvider } from "next-auth/react";
import HomePage from "./Homepage/page";
export default function Home() {
  return (
    <SessionProvider>
      <HomePage />
    </SessionProvider>
  );
}
