import { Suspense } from "react";
import UserDetails from "./UserDetails";
import UsersList from "./UsersList";

const UserItems = () => {
  return (
    <div className="grid grid-flow-col grid-rows-3 gap-4">
      <div className="row-span-3 ...">
        <Suspense fallback={<p>Loading...</p>}>
          <UserDetails />
        </Suspense>
      </div>
      <div className="col-span-2 row-span-2 prose lg:prose-md">
        <h2>Liste des utilisateur</h2>
        <UsersList />
      </div>
    </div>
  );
};

export default UserItems;
