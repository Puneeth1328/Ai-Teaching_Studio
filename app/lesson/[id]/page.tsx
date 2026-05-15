"use client";

import { useEffect, useState } from "react";

import { useParams } from "next/navigation";

import Navbar from "@/components/Navbar";

import { getLessonById } from "@/services/getLessonById";

export default function LessonDetailsPage() {

  const params = useParams();

  const [lesson, setLesson] =
    useState<any>(null);

  useEffect(() => {

    async function loadLesson() {

      const data =
        await getLessonById(
          params.id as string
        );

      setLesson(data);
    }

    loadLesson();

  }, [params.id]);

  if (!lesson) {
    return (
      <main className="p-10">
        Loading...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100">

      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-12">

        <div className="rounded-2xl bg-white p-8 shadow">

          <div className="mb-8">

            <span className="rounded-full bg-slate-200 px-3 py-1 text-sm">
              Grade {lesson.grade}
            </span>

            <h1 className="mt-4 text-5xl font-bold text-slate-900">
              {lesson.topic}
            </h1>

            <p className="mt-2 text-lg text-slate-600">
              {lesson.subject}
            </p>

          </div>

          <div className="space-y-6">

            <div>
              <h2 className="text-2xl font-bold">
                Duration
              </h2>

              <p className="mt-2">
                {lesson.duration}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold">
                Objectives
              </h2>

              <p className="mt-2">
                {lesson.objectives}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold">
                Language
              </h2>

              <p className="mt-2">
                {lesson.language}
              </p>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}