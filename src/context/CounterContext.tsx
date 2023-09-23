import {
  FunctionComponent,
  PropsWithChildren,
  createContext,
  memo,
  useContext,
  useMemo,
} from "react";
import { useAutoIncrement } from "../hooks/useIncrement";

type CounterContextProps = {
  counter: number;
  increment: () => void;
  decrement: () => void;
};

type Props = PropsWithChildren<{ start?: number; step?: number }>;

const CounterContext = createContext<CounterContextProps | null>(null);

const CounterContextProvider: FunctionComponent<Props> = memo(
  ({ children, start = 0, step = 1 }) => {
    const [counter, increment, decrement] = useAutoIncrement(start, step);

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
export const useCounterContext = () => {
  const value = useContext(CounterContext);
  if (value === null) {
    throw Error(
      "Vous devez entourer ce composant d'un <CounterContextProvider />"
    );
  }
  return value;
};
export default CounterContextProvider;
