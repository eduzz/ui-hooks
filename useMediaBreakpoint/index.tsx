import { useMemo } from 'react';

import tokens from '@eduzz/ui-tokens';

import useMediaQuery from '../useMediaQuery';

type MediaBreakpoint = keyof typeof tokens.breakpoints;
type MediaHandler = 'down' | 'up';

export default function useMediaBreakpoint(breakpoint: MediaBreakpoint, handler: MediaHandler = 'down') {
  const mediaQuery = useMemo(() => {
    const screen = tokens.breakpoints[breakpoint];
    return handler === 'down' ? `(max-width: ${screen}px)` : `(min-width: ${screen}px)`;
  }, [breakpoint, handler]);

  return useMediaQuery(mediaQuery);
}
