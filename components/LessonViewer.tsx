import { LessonData } from "@/types/lesson";

interface Props {
  lesson: LessonData;
}

export default function LessonViewer({
  lesson,
}: Props) {
  return (
    <div className="mt-10 space-y-8">

      {/* Lesson Plan */}
      <div className="rounded-2xl bg-white p-6 shadow">
        <h2 className="mb-4 text-2xl font-bold">
          Lesson Plan
        </h2>

        <p>
          <strong>Warmup:</strong>{" "}
          {lesson.lesson_plan.warmup}
        </p>

        <div className="mt-4">
          <strong>Concepts:</strong>

          <ul className="list-disc pl-6">
            {lesson.lesson_plan.concepts.map(
              (concept, index) => (
                <li key={index}>{concept}</li>
              )
            )}
          </ul>
        </div>

        <div className="mt-4">
          <strong>Activities:</strong>

          <ul className="list-disc pl-6">
            {lesson.lesson_plan.activities.map(
              (activity, index) => (
                <li key={index}>{activity}</li>
              )
            )}
          </ul>
        </div>

        <p className="mt-4">
          <strong>Recap:</strong>{" "}
          {lesson.lesson_plan.recap}
        </p>

        <p className="mt-4">
          <strong>Homework:</strong>{" "}
          {lesson.lesson_plan.homework}
        </p>
      </div>

      {/* Worksheet */}
      <div className="rounded-2xl bg-white p-6 shadow">
        <h2 className="mb-4 text-2xl font-bold">
          Worksheet
        </h2>

        <ul className="list-disc pl-6">
          {lesson.worksheet.map(
            (item, index) => (
              <li key={index}>{item}</li>
            )
          )}
        </ul>
      </div>

      {/* Quiz */}
      <div className="rounded-2xl bg-white p-6 shadow">
        <h2 className="mb-4 text-2xl font-bold">
          Quiz
        </h2>

        <ul className="space-y-4">
          {lesson.quiz.map((q, index) => (
            <li key={index}>
              <p>
                <strong>Q:</strong>{" "}
                {q.question}
              </p>

              <p>
                <strong>A:</strong>{" "}
                {q.answer}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}