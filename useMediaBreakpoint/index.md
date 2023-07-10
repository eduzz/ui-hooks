# useMediaBreakpoint

É usado para lidar com dimensionamento das telas e responsividade em componentes React com tamanhos pré-definidos do tema

## Como usar

```tsx
import useMediaBreakpoint from '@eduzz/ui-hooks/useMediaBreakpoint';

const Component = () => {
  const isMobile = useMediaBreakpoint('md');
  return <div>{isMobile ? 'Mobile' : 'Desktop'}</div>;
};
```