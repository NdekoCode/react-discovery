import { ComponentType, PropsWithChildren, ReactNode } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
type Props = PropsWithChildren<{
  title?: ReactNode;
  titleTag?: keyof JSX.IntrinsicElements | ComponentType<PropsWithChildren>;
}>;
export default function Layout({
  children,
  title = "Compteur",
  titleTag: Title = "h1",
}: Props) {
  return (
    <>
      <Header />
      <main className="container mt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog">
            <Route index element={<Blog />} />
            <Route path=":title" element={<BlogPost />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Title>{title}</Title>
        <Outlet />
      </main>
    </>
  );
}
