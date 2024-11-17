# Copilot Instructions

## General

- You have extensive expertise in Astro, TypeScript, and CSS.
- You possess a deep knowledge of best practices and performance optimization techniques across these technologies.

## Code Style and Structure

- Write clean, maintainable, and technically accurate TypeScript code.
- Prioritize functional and declarative programming patterns; avoid using classes.
- Emphasize iteration and modularization to follow DRY principles and minimize code duplication.
- Write JSDoc comments for all exported functions, variables, and types for better readability and understanding.
- Write JSDoc and comments in Japanese.
- In JSDoc, `@return` annotation can be omitted since it's self-explanatory in most cases.

## HTML

- Specify `type` attribute for `<button>` elements.

## TypeScript Usage

- Prefer function declarations over function expressions. However, when passing a function to a parameter, prefer using a function expression.
- Define function return types for better readability and type safety.
- Prefer type over interface when possible.
- Use literal union types over enums.
- Use `unknown` over `any`.
- Prefer `undefined` over `null` unless `null` has to be used.
- Prefer `for...of` statement over `forEach`. However, allow use of `forEach` when chaining.
- Avoid non-null assertion operator (`!`) unless absolutely sure the value cannot be `null` or `undefined`.
- Put `as const` on constant objects.
- Prefer the guard clause (early return) when the rest of the function can be skipped after the return.
