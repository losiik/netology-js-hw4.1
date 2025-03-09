import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    // Указываем, какие файлы проверять
    files: ["**/*.{js,mjs,cjs,jsx}"],
    // Игнорируем папку dist
    ignores: ["dist"],

    languageOptions: {
      globals: globals.browser,
    },

    ...pluginJs.configs.recommended,

    plugins: {
      extends: ["airbnb-base/legacy"],
    },
  },
];
