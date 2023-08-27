import { PropsWithChildren } from 'react';
import Button from './components/Button';
import useCounterContext from './context/CounterContext';
export type CounterProps =PropsWithChildren<{
    start?:number
}>
export default function Counter({start=0,children}:CounterProps) {
    const {counter,increment,decrement} = useCounterContext();
  
    return <div>
        <h1>Compteur</h1>
        <p>Compteur numero {counter}</p>
        <p>{children}</p>
        <Button onClick={increment} text="Increment"/>
        <Button onClick={decrement} text="Decrement"/>
    </div>

}