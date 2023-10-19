import { FC } from "react";
import { useRecoilValue } from "recoil";
import { currentUserState } from "../store/user";

const UserDetails:FC = ()=>{
    const user = useRecoilValue(currentUserState);
    if(user===null){
        return null
    }
    return <div className="prose">
        <h2>Profile Utilisateur</h2>
    <p>Nom complet: {user.name}</p>
    <p>Username: {user.username}</p>
    <p>Email: {user.email}</p>
    </div>
}
export default UserDetails;