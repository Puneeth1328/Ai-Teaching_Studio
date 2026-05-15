"use client";

import { useState } from "react";
import { saveLesson } from "@/services/saveLesson";

export default function LessonForm() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    subject: "",
    grade: "",
    topic: "",
    duration: "",
    objectives: "",
    language: "English",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setLoading(true);

    await saveLesson(formData);

setLoading(false);
  };

  return (
    <div className="mt-10 rounded-2xl bg-white p-8 shadow-lg">
      <h2 className="mb-6 text-3xl font-bold text-slate-900">
        Generate a Lesson Kit
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          onChange={handleChange}
          className="w-full rounded-lg border p-4"
          required
        />

        <input
          type="text"
          name="grade"
          placeholder="Grade"
          onChange={handleChange}
          className="w-full rounded-lg border p-4"
          required
        />

        <input
          type="text"
          name="topic"
          placeholder="Topic"
          onChange={handleChange}
          className="w-full rounded-lg border p-4"
          required
        />

        <input
          type="text"
          name="duration"
          placeholder="Duration (e.g. 45 mins)"
          onChange={handleChange}
          className="w-full rounded-lg border p-4"
          required
        />

        <textarea
          name="objectives"
          placeholder="Learning Objectives"
          onChange={handleChange}
          className="min-h-[120px] w-full rounded-lg border p-4"
          required
        />

        <select
          name="language"
          onChange={handleChange}
          className="w-full rounded-lg border p-4"
        >
          <option>English</option>
          <option>Hindi</option>
          <option>Kannada</option>
          <option>Marathi</option>
        </select>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-black py-4 text-lg font-semibold text-white hover:bg-slate-800 disabled:opacity-50"
        >
          {loading
            ? "Generating..."
            : "Generate Lesson"}
        </button>
      </form>
    </div>
  );
}