export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 p-10">
      <h1 className="text-5xl font-bold text-slate-900">
        AI Teaching Studio
      </h1>

      <p className="mt-4 text-lg text-slate-600">
        Generate AI-powered lesson plans, quizzes, worksheets, and answer keys instantly.
      </p>

      <button className="mt-8 rounded-xl bg-black px-6 py-3 text-white hover:bg-slate-800">
        Generate Lesson
      </button>
    </main>
  );
}