import { FunctionComponent, PropsWithChildren } from 'react';

type Props =PropsWithChildren<{text:string,onClick:()=>void}>;

const Button:FunctionComponent<Props> = ({text,onClick})=>{
    return <button className="btn m-1 btn-neutral" onClick={onClick}>{text}</button>
}
export default Button;