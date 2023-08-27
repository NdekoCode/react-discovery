import { FunctionComponent, PropsWithChildren, createContext, memo, useCallback, useContext, useMemo, useState } from 'react';
const CounterContext = createContext({counter:0,increment:()=>{},decrement:()=>{}});
type Props =PropsWithChildren
export const CounterContextProvider:FunctionComponent<Props> = memo(({children})=>{
    const [counter,setCounter] = useState<number>(0);
    const increment =useCallback( ()=>setCounter(n=>n+1),[]);
    const decrement = useCallback(()=>setCounter(n=>n>1? n-1:0),[]);
    const value = useMemo(()=>({counter,increment,decrement}),[counter]);
    return <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
})
const useCounterContext = ()=>useContext(CounterContext);
export default useCounterContext;