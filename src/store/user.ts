import { atom, selector } from "recoil";

export const userState = atom<{
    currentUser:null|string|number
}>({
    key:'user-state',
    default:{
        currentUser:null
    }
})

export const currentUserState = selector({
    key:'current-user',
    get:({get})=>{
        const {currentUser} = get(userState);
        if(currentUser===null){
            return null
        }
        
        return fetch(`https://jsonplaceholder.typicode.com/users/${currentUser}`).then(user=>user.json());
    }
})

export const currentUserId = selector({
    key:'current-user-id',
    get:({get})=>{
        const {currentUser} = get(userState);
        if(currentUser===null){
            return null;
        }
        return currentUser
    }
})