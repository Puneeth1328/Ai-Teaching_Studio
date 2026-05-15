import { supabase } from "@/lib/supabase";

export async function testConnection() {
  const { data, error } = await supabase
    .from("lessons")
    .select("*");

  console.log(data, error);
}