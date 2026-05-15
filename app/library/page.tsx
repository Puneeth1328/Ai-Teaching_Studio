"use client";

import { useEffect, useState } from "react";

import Navbar from "@/components/Navbar";
import LessonCard from "@/components/LessonCard";

import { getLessons } from "@/services/getLessons";
import { deleteLesson } from "@/services/deleteLesson";

export default function LibraryPage() {

  const [lessons, setLessons] =
    useState<any[]>([]);

  const handleDelete = async (
  lessonId: string
) => {

  const success =
    await deleteLesson(lessonId);

  if (success) {

    setLessons((prev) =>
      prev.filter(
        (lesson) =>
          lesson.id !== lessonId
      )
    );

  }
};

  useEffect(() => {

    async function loadLessons() {

      const data = await getLessons();

      setLessons(data);
    }

    loadLessons();

  }, []);

  return (
    <main className="min-h-screen bg-slate-100">

      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-12">

        <div className="mb-10">

          <h1 className="text-5xl font-bold text-slate-900">
            Lesson Library
          </h1>

          <p className="mt-3 text-slate-600">
            Your saved lessons.
          </p>

        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {lessons.map((lesson) => (
            <LessonCard
              key={lesson.id}
              lesson={lesson}
              onDelete={handleDelete}
            />
          ))}

        </div>

      </section>

    </main>
  );
}