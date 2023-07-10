import { useState, useCallback } from 'react';

/**
 * Simplify the way to use a boolean state
 * @param initial A boolen of a function that return a  boolean
 * @returns [value, toogleValue, toTrue, toFalse]
 */
export default function useBoolean(initial?: boolean | (() => boolean)): [boolean, () => void, () => void, () => void] {
  const [value, setValue] = useState(initial ?? false);
  const toogleValue = useCallback(() => setValue(value => !value), []);
  const toTrue = useCallback(() => setValue(() => true), []);
  const toFalse = useCallback(() => setValue(() => false), []);

  return [value, toogleValue, toTrue, toFalse];
}
