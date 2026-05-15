"use client";

import Link from "next/link";

import { supabase } from "@/lib/supabase";

export default function Navbar() {

  const handleLogout = async () => {
    await supabase.auth.signOut();

    window.location.href = "/login";
  };

  return (
    <nav className="flex items-center justify-between border-b bg-white px-8 py-4 shadow-sm">

      <Link href="/">
        <h1 className="cursor-pointer text-2xl font-bold text-slate-900">
          AI Teaching Studio
        </h1>
      </Link>

      <div className="flex gap-4">

        <Link
          href="/"
          className="rounded-lg px-4 py-2 hover:bg-slate-100"
        >
          Home
        </Link>

        <Link
          href="/library"
          className="rounded-lg px-4 py-2 hover:bg-slate-100"
        >
          Library
        </Link>

        <Link
          href="/login"
          className="rounded-lg px-4 py-2 hover:bg-slate-100"
        >
          Login
        </Link>

        <Link
          href="/signup"
          className="rounded-lg px-4 py-2 hover:bg-slate-100"
        >
          Sign Up
        </Link>

        <button
          onClick={handleLogout}
          className="rounded-lg bg-red-500 px-4 py-2 text-white"
        >
          Logout
        </button>

      </div>
    </nav>
  );
}