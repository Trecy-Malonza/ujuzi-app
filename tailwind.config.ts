import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#1B315B',
        'custom-amber': '#EAB707',
      },
    },
  },
  plugins: [],
};
export default config;
// import type { Config } from "tailwindcss";
// const config: Config = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         'custom-blue': '#1B315B',
//         'custom-amber': '#EAB707',
//       },
//       fontFamily: {
//         poppins: ['Poppins'],
//       },
//     },
//   },
//   plugins: [],
// };
// export default config;











