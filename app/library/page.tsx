import Navbar from "@/components/Navbar";
import LessonCard from "@/components/LessonCard";

import { mockLibrary } from "@/lib/mockLibrary";

export default function LibraryPage() {
  return (
    <main className="min-h-screen bg-slate-100">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-12">

        <div className="mb-10 flex items-center justify-between">
          <div>
            <h1 className="text-5xl font-bold text-slate-900">
              Lesson Library
            </h1>

            <p className="mt-3 text-slate-600">
              Browse saved AI-generated lessons.
            </p>
          </div>

          <input
            type="text"
            placeholder="Search lessons..."
            className="rounded-xl border p-3"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockLibrary.map((lesson) => (
            <LessonCard
              key={lesson.id}
              lesson={lesson}
            />
          ))}
        </div>
      </section>
    </main>
  );
}