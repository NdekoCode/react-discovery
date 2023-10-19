import { FC } from "react";
import { useRecoilState } from "recoil";
import { compterStateFamily } from "../store/compter";
import Button from "./Button";
type CompterRecoilProps ={
    id?:string | number
}
const RecoilFamilyCompter:FC<CompterRecoilProps> = ({id=1})=>{
    const [counter,setCounter] = useRecoilState(compterStateFamily(id));
    const increment = ()=>setCounter(n=>n+1);
    const decrement = ()=>setCounter(n=>n-1);
    return <div>
      <p >Apprendre Quelque chose {counter}</p>

<Button onClick={increment}>Increment</Button>
<Button onClick={decrement}>Decrement</Button>
    </div>
}

export default RecoilFamilyCompter;