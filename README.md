# Dribble Design Implementation

The project implements the following dribble design in React.

#### [Ramos - Website Design for Digital Business Analytic Platform](https://dribbble.com/shots/23402072-Ramos-Website-design-for-digital-business-analytic-platform)

## Technologies Used
- React V18 (Typescript with Vite)
- TailwindCSS

## Running Dev Server

```bash
pnpm i
pnpm run dev
```

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
