import { useCallback, useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { currentUserId, userState } from "../store/user";
import { User } from "../utils/types";

const UsersList = ()=>{
    const [users,setUsers] = useState<User[]|null>(null);
    const setUserState = useSetRecoilState(userState);
    const selectedUserId = useRecoilValue(currentUserId);
    const setCurrentUser =useCallback((userId:number|string)=>setUserState(u=>({...u,currentUser:userId})),[]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users').then(d=>d.json()).then(d=>setUsers(d))
    })
    if(users===null){
        return "Chargement...";
    }
    return (<ul className="flex flex-col max-w-xs">
        {users.map(user=>(
    <li className={`inline-flex items-center px-4 py-3 -mt-px text-sm font-medium text-gray-800 bg-white border cursor-pointer gap-x-2 first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white ${selectedUserId===user.id  ? 'list-active' : ''}`} key={user.id} onClick={()=>setCurrentUser(user.id)}>
      <svg
        className="flex-shrink-0 w-6 h-6 m-0 text-blue-600"
        width={16}
        height={16}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z"
          fill="currentColor"
        />
      </svg>
      <span className="m-0 text-gray-800 dark:text-gray-400">{user.name}</span>
    </li>))}
  </ul>
  )
}

export default UsersList;