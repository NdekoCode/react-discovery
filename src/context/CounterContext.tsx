import {
  FunctionComponent,
  PropsWithChildren,
  createContext,
  memo,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

const CounterContext = createContext({
  counter: 0,
  increment: () => {},
  decrement: () => {},
});
type Props = PropsWithChildren<{ start?: number; step?: number }>;
const CounterContextProvider: FunctionComponent<Props> = memo(
  ({ children, start = 0, step = 1 }) => {
    const [counter, setCounter] = useState<number>(start);

    const increment = useCallback(() => setCounter((n) => n + step), [step]);
    const decrement = useCallback(
      () => setCounter((n) => (n > step ? n - step : 0)),
      [step]
    );

    const value = useMemo(
      () => ({ counter, increment, decrement }),
      [counter, increment, decrement]
    );

    return (
      <CounterContext.Provider value={value}>
        {children}
      </CounterContext.Provider>
    );
  }
);
export const useCounterContext = () => useContext(CounterContext);
export default CounterContextProvider;
