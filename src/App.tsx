import { Encode } from "./components/custom/block-render";
import { ControlledInput } from "./components/custom/controlled-input";
import { CustomForm } from "./components/custom/custom-form";
import { Increment } from "./components/custom/increment";
import { MemoData } from "./components/custom/memo-data";
import RefDiscovery from "./components/custom/ref-discovery";
import DecrementValue from "./components/products/decrement-value";
import Products from "./components/products/products";
import { useTheme } from "./stores/contexts/theme-context";

function App() {
  console.log("App render");
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="max-w-7xl flex flex-col gap-5 mx-auto px-4 sm:px-6 lg:px-8 mt-10">
      <h1>Hello React</h1>
      <p>THEME {theme}</p>

      <button
        onClick={toggleTheme}
        className="px-4 w-fit py-2 rounded bg-blue-500 text-white transition-all duration-300 hover:bg-blue-600"
      >
        Handle theme
      </button>
      <div className="flex flex-col gap-3">
        <Increment />
        <Encode />
        <ControlledInput />
        {/* <MemoData /> */}
        <Products />
        <RefDiscovery />
      </div>
    </div>
  );
}

export default App;
