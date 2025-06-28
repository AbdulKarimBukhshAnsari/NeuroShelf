import { createClient } from "@supabase/supabase-js";

// Load environment variables
const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

// Create Supabase client
const supabase = createClient(supabaseUrl, supabaseAnonKey);
export default supabase;
