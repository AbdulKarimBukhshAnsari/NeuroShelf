import  supabase  from "../../lib/supabase";

// Function to log in a user
export const loginUserAccount = async (email, password) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return { error: error.message };
    }

    return { data };
  } catch (err) {
    return { error: err.message };
  }
};
