import { supabase } from "@/lib/supabase";

export async function deleteLesson(
  lessonId: string
) {

  const { error } = await supabase
    .from("lessons")
    .delete()
    .eq("id", lessonId);

  if (error) {
    console.error(error);

    alert("Failed to delete lesson");

    return false;
  }

  return true;
}