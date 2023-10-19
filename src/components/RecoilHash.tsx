import { FC } from "react";
import { useRecoilValue } from "recoil";
import { compterHash } from "../store/compter";

const RecoilHash:FC = ()=>{
    const hash = useRecoilValue(compterHash);
    return <div>
      <p >Apprendre Quelque chose {hash as string}</p>

    </div>
}

export default RecoilHash;