import { Navbar } from "./components/navbar";
import { ThemeContextProvider } from "./context/theme-context";
import { useRenderPage } from "./hooks/use-render-page";

function App() {
  const page = useRenderPage();
  return (
    <ThemeContextProvider>
      <Navbar />
      {page}
    </ThemeContextProvider>
  );
}

export default App;
