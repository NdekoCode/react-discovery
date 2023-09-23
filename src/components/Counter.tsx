import { PropsWithChildren } from "react";
import { useCounterContext } from "../context/CounterContext";
import { useToggle } from "../hooks/useToggle";
import Button from "./Button";
export type CounterProps = PropsWithChildren<{
  start?: number;
}>;

type PropsTitle = PropsWithChildren<{ [key: string]: unknown }>;
export default function Counter({ children }: CounterProps) {
  const { counter, increment, decrement } = useCounterContext();
  const [isActive, toggle] = useToggle();
  return (
    <div>
      <Title style={{ color: "red" }}>Apprendre Quelque chose {counter}</Title>

      {children}
      <Button onClick={increment}>Increment</Button>
      {isActive && <Button onClick={decrement}>Decrement</Button>}
      <Button onClick={() => toggle()}>Active</Button>
    </div>
  );
}
const Title = (props: PropsTitle) => {
  return <h1 {...props}>{props.children}</h1>;
};
