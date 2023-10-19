import { FunctionComponent, Suspense, useState } from "react";
import { useRecoilValue } from "recoil";
import Counter from "../components/Counter";
import RecoilHash from "../components/RecoilHash";
import CounterContextProvider from "../context/CounterContext";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { compterState } from "../store/compter";

const Home: FunctionComponent = () => {
  const [name] = useState('Ndekocode');
  useDocumentTitle('Editer '+name);
  const counter = useRecoilValue(compterState);
  return (
    <CounterContextProvider>
      <Counter>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <strong>{counter}</strong> Dolorem amet
          perferendis architecto? At molestiae modi, nisi nulla laborum sit
          error aliquid quae dolore, mollitia ratione molestias, aliquam
          voluptatum laboriosam quibusdam!
        </div>
      </Counter>
      <Suspense fallback={<p>Loading...</p>}>
      <RecoilHash/>
      </Suspense>
    </CounterContextProvider>
  );
};
export default Home;
