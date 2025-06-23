/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // Primary brand colors with shades
        primary: {
          DEFAULT: "#3B5B5B", // Deep Slate Green – main brand color
          light: "#5A7A7A",   // lighter shade for hover/focus
          dark: "#2B4242",    // darker shade for pressed/active
        },

        // Secondary brand colors with shades
        secondary: {
          DEFAULT: "#6A8D92", // Soft Teal – calm and modern
          light: "#8BAAAA",   // lighter shade for hover/focus
          dark: "#4E686B",    // darker shade for pressed/active
        },

        // Accent colors with shades
        accent: {
          DEFAULT: "#A2B9BC", // Muted Aqua – subtle highlights/buttons
          light: "#C4D3D5",
          dark: "#7B8D8F",
        },

        // Background colors
        backgroundLight: {
          DEFAULT: "#F4F6F6", // Soft off-white background
          dark: "#E1E6E6",    // Slightly darker for cards or sections
        },
        backgroundDark: {
          DEFAULT: "#2F3E46", // Charcoal gray – headers, navbars, dark mode base
          light: "#4A5A62",   // lighter charcoal for borders or secondary backgrounds
          dark: "#1F2A2F",    // darker charcoal for pressed states or shadows
        },

        // Text colors
        textPrimary: {
          DEFAULT: "#1C1C1C", // Almost black for main text
          light: "#3A3A3A",   // secondary text or subtitles
        },
        textSecondary: {
          DEFAULT: "#536870", // Slate gray for less prominent text
          light: "#7B8A97",
          dark: "#3C4A56",
        },

        // Neutral grays for borders, dividers, disabled states
        neutral: {
          100: "#F5F7F7",  // Very light gray – backgrounds
          200: "#E1E6E6",  // Light gray – cards, inputs background
          300: "#B7BCBC",  // Medium gray – borders, dividers
          400: "#8F9696",  // Dark gray – disabled text/buttons
          500: "#6B7373",  // Darker gray – secondary borders/text
          600: "#4B5151",  // Dark gray – active states, placeholder text
        },

        // Status colors
        error: {
          DEFAULT: "#D64545", // Soft red for errors/warnings
          light: "#E88787",
          dark: "#9B2F2F",
        },
        success: {
          DEFAULT: "#4CAF50", // Calm green for success messages
          light: "#80C57A",
          dark: "#357A38",
        },

        // Interaction states for buttons/inputs
        interaction: {
          hover: "#CED9DA",  // subtle hover background
          focus: "#A2B9BC",  // accent color for focused inputs/buttons
          disabledBg: "#E1E6E6", // disabled button background
          disabledText: "#8F9696", // disabled button text
        },

        // Shadows (using RGBA for subtle effects)
        shadowLight: "rgba(0, 0, 0, 0.05)",  // very subtle shadow for cards
        shadowMedium: "rgba(0, 0, 0, 0.1)",  // medium shadow for elevated elements
        shadowDark: "rgba(0, 0, 0, 0.15)",   // stronger shadow for modals/popups
      },
      fontFamily : {
        pbold  : ["Poppins-Bold" , "sens-serif"],
        pregular : ["Poppins-Regular" , "sens-serif"],
        pmedium : ["Poppins-Medium" , "sens-serif"]
      }
    },
  },
  plugins: [],
};
