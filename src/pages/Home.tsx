import { FunctionComponent, useState } from "react";
import Counter from "../components/Counter";
import CounterContextProvider from "../context/CounterContext";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

const Home: FunctionComponent = () => {
  const [name] = useState('Ndekocode');
  useDocumentTitle('Editer '+name);
  return (
    <CounterContextProvider>
      <Counter>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem amet
          perferendis architecto? At molestiae modi, nisi nulla laborum sit
          error aliquid quae dolore, mollitia ratione molestias, aliquam
          voluptatum laboriosam quibusdam!
        </div>
      </Counter>
    </CounterContextProvider>
  );
};
export default Home;
