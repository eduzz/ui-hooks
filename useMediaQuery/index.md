# useMediaQuery

É usado para lidar com dimensionamento das telas e responsividade em componentes React

## Como usar

```tsx
import useMediaQuery from '@eduzz/ui-hooks/useMediaQuery';

const Component = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  return <div>{isMobile ? 'Mobile' : 'Desktop'}</div>;
};
```