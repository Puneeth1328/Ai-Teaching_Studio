import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b bg-white px-8 py-4 shadow-sm">
      <Link href="/">
        <h1 className="text-2xl font-bold text-slate-900">
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
          className="rounded-lg bg-black px-4 py-2 text-white hover:bg-slate-800"
        >
          Library
        </Link>
      </div>
    </nav>
  );
}