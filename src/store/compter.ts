import { atom, atomFamily, selector } from "recoil";

export const compterState = atom({
    key:'compter-state',
    default:0
});

export const compterDouble = selector({
    key:'compter-double',
    get:({get})=>{
        const compter = get(compterState);
        return compter * 2;
    }
})

export const compterStateFamily  = atomFamily({
    key:'compter-state-family',
    default:0
})

export const compterHash = selector({
    key:'compter-hash',
    get:({get})=>{
        const n = get(compterState);
        return new Promise(resolve=>{
            window.setTimeout(()=>{
                console.log("Lol");
                resolve(n+' hashed');

            },1000);
        })
    }
})