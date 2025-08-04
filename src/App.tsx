import { Increment } from "./components/custom/increment";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
      <h1>Hello React</h1>
      <div className="flex flex-col gap-3">
        <Increment />
      </div>
    </div>
  );
}

export default App;
