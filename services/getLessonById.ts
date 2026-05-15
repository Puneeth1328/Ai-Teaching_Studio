import { supabase } from "@/lib/supabase";

export async function getLessonById(
  lessonId: string
) {

  const { data, error } =
    await supabase
      .from("lessons")
      .select("*")
      .eq("id", lessonId)
      .single();

  if (error) {
    console.error(error);
    return null;
  }

  return data;
}