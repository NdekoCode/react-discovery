import { FunctionComponent } from "react";
import { useRecoilValue } from "recoil";
import RecoilCompter from "../components/RecoilCompter";
import RecoilFamilyCompter from "../components/RecoilFamilyCompter";
import { compterDouble } from '../store/compter';

const About: FunctionComponent = () => {
  const compteur2N = useRecoilValue(compterDouble);
  return (
    <div>
      <h1>About page</h1>
      <RecoilFamilyCompter/>
      <RecoilFamilyCompter/>
      <RecoilCompter/>
      <RecoilFamilyCompter id="3"/>
      <p>
        <strong>{compteur2N}</strong> t amet consectetur adipisicing elit. Error nulla
        enim eius, adipisci fugiat libero eaque voluptatibus iure quod ad ut
        nihil repudiandae, quam praesentium delectus rerum saepe natus voluptas.
      </p>

    </div>
  );
};
export default About;
