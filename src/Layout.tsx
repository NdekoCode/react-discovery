import { ComponentType, PropsWithChildren, ReactNode } from "react";
type Props = PropsWithChildren<{
    title?:ReactNode,
    titleTag?:keyof JSX.IntrinsicElements | ComponentType<PropsWithChildren>
}>
export default function Layout({children,title='Compteur',titleTag:Title='h1'}:Props) {
    return <main>
        <Title>{title}</Title>
        {children}
    </main>

}