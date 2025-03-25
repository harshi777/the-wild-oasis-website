import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

if (typeof window === "undefined") {
  console.log("Supabase URL:", process.env.SUPABASE_URL);
  console.log(
    "Supabase Key:",
    process.env.SUPABASE_KEY ? "Loaded" : "Not Loaded"
  );
}

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase environment variables.");
}

// Create the Supabase client
export const supabase = createClient(supabaseUrl, supabaseKey);

// export const supabase = createClient(
//   process.env.SUPABASE_URL,
//   process.env.SUPABASE_KEY
// );
