import Layout from "./Layout";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router.tsx";
function App() {
  return (
    <RouterProvider router={router} fallbackElement={ <Layout title={"Learn react ts"}/>
    }/>
  );
}

export default App;
