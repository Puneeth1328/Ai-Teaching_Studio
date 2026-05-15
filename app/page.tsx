import Navbar from "@/components/Navbar";
import LessonForm from "@/components/LessonForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="mb-10">
          <h1 className="text-5xl font-bold text-slate-900">
            AI Teaching Studio
          </h1>

          <p className="mt-4 text-lg text-slate-600">
            Generate AI-powered lesson plans,
            worksheets, quizzes, and answer
            keys in seconds.
          </p>
        </div>

        <LessonForm />
      </section>
    </main>
  );
}