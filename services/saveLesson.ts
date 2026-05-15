import { supabase } from "@/lib/supabase";

interface LessonInput {
  subject: string;
  topic: string;
  grade: string;
  duration: string;
  objectives: string;
  language: string;
}

export async function saveLesson(
  lesson: LessonInput
) {

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    alert("Please login first");
    return;
  }

  const { error } = await supabase
    .from("lessons")
    .insert({
      ...lesson,
      user_id: user.id,
    });

  if (error) {
  console.error("SUPABASE ERROR:", error);

  alert(error.message);

  return;
} else {
    alert("Lesson saved successfully!");
  }
}