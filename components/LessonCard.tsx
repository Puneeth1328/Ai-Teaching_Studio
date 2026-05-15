import Link from "next/link";
interface Props {
  lesson: {
    id: string;
    subject: string;
    topic: string;
    grade: string;
    created_at: string;
  };

  onDelete: (id: string) => void;
}

export default function LessonCard({
  lesson,
  onDelete,
}: Props) {

  return (
    <div className="rounded-2xl bg-white p-6 shadow transition hover:shadow-lg">

      <div className="flex items-center justify-between">

        <span className="rounded-full bg-slate-200 px-3 py-1 text-sm">
          Grade {lesson.grade}
        </span>

        <span className="text-sm text-slate-500">
          {new Date(
            lesson.created_at
          ).toLocaleDateString()}
        </span>

      </div>

      <h2 className="mt-4 text-2xl font-bold text-slate-900">
        {lesson.topic}
      </h2>

      <p className="mt-2 text-slate-600">
        {lesson.subject}
      </p>

      <div className="mt-6 flex gap-3">

        <Link
            href={`/lesson/${lesson.id}`}
            className="rounded-xl bg-black px-4 py-2 text-white hover:bg-slate-800"
        >
            View
        </Link>

        <button
          onClick={() =>
            onDelete(lesson.id)
          }
          className="rounded-xl bg-red-500 px-4 py-2 text-white hover:bg-red-600"
        >
          Delete
        </button>

      </div>

    </div>
  );
}