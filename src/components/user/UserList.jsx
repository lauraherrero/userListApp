import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserList } from "../../store/users/thunks";
import { UserItem } from "./UserItem";

export const UserList = () => {
  const dispatch = useDispatch();

  const { isLoading, users = [] } = useSelector((state) => state.users);
  console.log(users);
  useEffect(() => {
    dispatch(getUserList());
  }, []);

  return (
    <>
      <div className="container">
        <div>
          <h1 className="user_list">User List</h1>

          {isLoading ? <h3>Cargando...</h3> : <span></span>}

          <div className="row rows-cols-1 row-cols-lg-2 g-4">
            {users.map((user) => {
              return <UserItem key={user.id} {...user} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};
