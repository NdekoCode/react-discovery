import { PropsWithChildren } from "react";
import Button from "./components/Button";
import { useCounterContext } from "./context/CounterContext";
export type CounterProps = PropsWithChildren<{
  start?: number;
}>;

type PropsTitle = PropsWithChildren<{ [key: string]: unknown }>;
export default function Counter({ children }: CounterProps) {
  const { counter, increment, decrement } = useCounterContext();
  return (
    <div>
      <Title style={{ color: "red" }}>Apprendre Quelque chose {counter}</Title>

      {children}
      <Button onClick={increment} text="Increment" />
      <Button onClick={decrement} text="Decrement" />
    </div>
  );
}
const Title = (props: PropsTitle) => {
  return <h1 {...props}>{props.children}</h1>;
};
