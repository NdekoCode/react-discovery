import { Navbar } from "./components/navbar";
import { useRenderPage } from "./hooks/use-render-page";

function App() {
  const page = useRenderPage();
  return (
    <>
      <Navbar />
      {page}
    </>
  );
}

export default App;
