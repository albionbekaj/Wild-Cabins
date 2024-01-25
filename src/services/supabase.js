import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://gmvtqfbnwufllyxuqoeq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdtdnRxZmJud3VmbGx5eHVxb2VxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ5MTQwMTksImV4cCI6MjAyMDQ5MDAxOX0.p0EOrucEbwkjHJ5IA0vhtS4z2YQ9a9aw1vuqsYV6rNA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
