# useCallbackGenerator

Um gerador de callbacks que faz [Currying](https://rodrigorgs.github.io/aulas/mata56/aula14-currying)(apenas um nível)
dos argumentos passados, útil quando temos que uma mesma função mudando apenas alguns parâmetros. É necessário uma key,
para poder criar cache (useCallback padrão) dessa função.

## Como usar

```tsx
const navigateTo = useCallbackGenerator(
  (screen: string) => navigation.navigate(screen, { invoice }),
  [invoice, navigation]
);

//...
<button onClick={navigateTo('details-key', 'details')}>Detalhes<button>
<button onClick={navigateTo('payment-key', 'payment')}>Pagamento<button>
```

## Mais Parâmetros

É possível passar mais de um valor, como podem ver no exemplo a seguir, passo 2 parâmetros o 3 virá do
onClick, ou seja, ele irá gerar um callback com a assinatura assim: **(e: : SyntheticEvent) => void**.

```tsx
const navigateTo = useCallbackGenerator(
  (screen: string, value: number, e: SyntheticEvent) => navigation.navigate(screen, { invoice }),
  [invoice, navigation]
);

//...
<button onClick={navigateTo('details-key', 'details', 1)}>Detalhes<button>
<button onClick={navigateTo('payment-key', 'payment', 2)}>Pagamento<button>
```

## Parâmetros e Retorno

```tsx
/**
 * Função geradora de funções com parametros cascateados
 * @param generator função que será executada com o parametros passados
 * @param deps
 * @returns Função geradora:
 *   @param key: unique key usado para cache
 *   @param args: argumentos que serão pré-definidos
 */
export default function useCallbackGenerator<F extends (...args: any[]) => any>(
  generator: F,
  deps: React.DependencyList
): (key: string, ...args: ParametersOptional<F>) => (...callArgs: any) => ReturnType<F>;
```
