import { PropsWithChildren } from 'react';
import Button from './components/Button';
import useCounterContext from './context/CounterContext';
export type CounterProps =PropsWithChildren<{
    start?:number
}>
export default function Counter({children}:CounterProps) {
    const {counter,increment,decrement} = useCounterContext();
  
    return <div>
        <p>Compteur numero {counter}</p>
        {children}
        <Button onClick={increment} text="Increment"/>
        <Button onClick={decrement} text="Decrement"/>
    </div>

}