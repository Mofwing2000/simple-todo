/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0 2px 4px 0 rgb(0 0 0 / 20%), 0 25px 50px 0 rgb(0 0 0 / 10%)",
        customInner: "inset 0 -1px 5px 0 rgb(0 0 0 / 20%);",
      },
      width: {
        appWidth: "550px",
        7.5: "1.875rem",
      },
      height: {
        7.5: "1.875rem",
        15: "3.75rem",
      },
      fontSize: {
        inputHeader: ["24px", "1.4em"],
        taskItem: ["24px", "1.2"],
      },
      colors: {
        customPastel: "#cc9a9a",
      },
      margin: {
        18: "4.5rem",
      },
    },
  },
  plugins: [],
};
