import { FC } from "react";
import { useRecoilState } from "recoil";
import { compterState } from "../store/compter";
import Button from "./Button";

const RecoilCompter:FC = ()=>{
    const [counter,setCounter] = useRecoilState(compterState);
    const increment = ()=>setCounter(n=>n+1);
    const decrement = ()=>setCounter(n=>n-1);
    return <div>
      <p >Apprendre Quelque chose {counter}</p>

<Button onClick={increment}>Increment</Button>
<Button onClick={decrement}>Decrement</Button>
    </div>
}

export default RecoilCompter;