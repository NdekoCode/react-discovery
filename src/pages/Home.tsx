import { FunctionComponent } from "react";
import Counter from "../components/Counter";
import CounterContextProvider from "../context/CounterContext";

const Home: FunctionComponent = () => {
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
