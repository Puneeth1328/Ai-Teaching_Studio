export default function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b bg-white px-8 py-4 shadow-sm">
      <h1 className="text-2xl font-bold text-slate-900">
        AI Teaching Studio
      </h1>

      <button className="rounded-lg bg-black px-4 py-2 text-white hover:bg-slate-800">
        Dashboard
      </button>
    </nav>
  );
}