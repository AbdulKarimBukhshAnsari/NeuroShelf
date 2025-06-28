import supabase from "../../lib/supabase";

// Function to create a new user account
export const createUserAccount = async (email, password, username) => {
  try {
    // Step 1: Sign up user in auth
    const { data: signUpData, error: signUpError } = await supabase.auth.signUp(
      {
        email,
        password,
        options: {
          data: {
            full_name: username, // Goes to auth.users.user_metadata
          },
        },
      }
    );

    if (signUpError || !signUpData.user) {
      return { error: signUpError?.message || "Signup failed" };
    }

    // Step 2: Re-fetch user to ensure metadata is available
    const {
      data: { user },
      error: userFetchError,
    } = await supabase.auth.getUser();

    if (userFetchError || !user) {
      return { error: userFetchError?.message || "Failed to fetch user" };
    }

    // Step 3: Insert into custom users table
    const { error: insertError } = await supabase.from("users").insert([
      {
        id: user.id,
        full_name: username,
        email: user.email,
      },
    ]);

    if (insertError) {
      return { error: insertError.message };
    }

    return { data: signUpData };
  } catch (err) {
    return { error: err.message };
  }
};
