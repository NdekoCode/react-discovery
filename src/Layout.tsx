import { ComponentType, FC, PropsWithChildren, ReactNode } from "react";
import { Outlet } from "react-router-dom";
import "./app.scss";
import Header from "./components/Header";
type Props = PropsWithChildren<{
  title?: ReactNode;
  titleTag?: keyof JSX.IntrinsicElements | ComponentType<PropsWithChildren>;
}>;

export const Layout:FC<Props> = () =>{
  return (
    <>
      <Header />
      <main className="container mt-5">
        <Outlet/>
      </main>
    </>
  );
}
export default Layout;