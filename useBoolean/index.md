# useBoolean

Esse é um hooks apenas para facilitar o uso de booleanos, útil quando deseja passar como callback de uma função

## Como usar

```tsx
const [value, toggleValue, toTrue, toFalse] = useBoolean();
```

## Parâmetros e Retorno

```tsx
/**
 * Simplify the way to use a boolean state
 * @param initial A boolen of a function that return a  boolean
 * @returns [value, toogleValue, toTrue, toFalse]
 */
export default function useBoolean(initial?: boolean | (() => boolean)): [boolean, () => void, () => void, () => void];
```
