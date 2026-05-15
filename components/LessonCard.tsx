interface Props {
  lesson: {
    id: number;
    subject: string;
    topic: string;
    grade: string;
    created_at: string;
  };
}

export default function LessonCard({
  lesson,
}: Props) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow transition hover:shadow-lg">
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-slate-200 px-3 py-1 text-sm">
          Grade {lesson.grade}
        </span>

        <span className="text-sm text-slate-500">
          {lesson.created_at}
        </span>
      </div>

      <h2 className="mt-4 text-2xl font-bold text-slate-900">
        {lesson.topic}
      </h2>

      <p className="mt-2 text-slate-600">
        {lesson.subject}
      </p>

      <button className="mt-6 rounded-xl bg-black px-4 py-2 text-white hover:bg-slate-800">
        View Lesson
      </button>
    </div>
  );
}