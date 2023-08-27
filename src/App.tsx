import Counter from "./Counter"
import Layout from "./Layout"
import { CounterContextProvider } from "./context/CounterContext"

function App() {

  return (

    <CounterContextProvider>
    <Layout title={"Learn react ts"}>
    <Counter>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem amet perferendis architecto? At molestiae modi, nisi nulla laborum sit error aliquid quae dolore, mollitia ratione molestias, aliquam voluptatum laboriosam quibusdam!
      </div>
    </Counter>
    </Layout>
    </CounterContextProvider>
  )
}

export default App
