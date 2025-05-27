/** @type {import("prettier").Config} */
module.exports = {
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindConfig: "./tailwind.config.js", // (Không bắt buộc, nhưng tốt khi bạn customize theme)
};
