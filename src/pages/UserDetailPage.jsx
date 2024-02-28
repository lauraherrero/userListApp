import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getUserById, getAlbumList, getTODOList } from "../store/users/thunks";
import { AlbumList } from "../components/album/AlbumList";
import { TodoList } from "../components/todo/TodoList";
import { UserDetailItems } from "../components/user/UserDetailItems";
import { AddTodo } from "../components/todo/AddTodo";

export const UserDetailPage = () => {
  const { id } = useParams();

  const [userId, setUserId] = useState({
    id: 1,
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });
  //console.log(userId);

  const [albums, setAlbums] = useState([]);

  const [todos, setTodos] = useState([]);

  const getAlbums = async () => {
    const newAlbums = await getAlbumList(id);
    setAlbums(newAlbums);
  };

  const getTodos = async () => {
    const newTodos = await getTODOList(id);
    console.log(newTodos);
    setTodos(newTodos);
  };

  useEffect(() => {
    getUserById(id).then((userId) => setUserId(userId));
  }, []);

  useEffect(() => {
    getAlbums();
  }, []);

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="user_details">User Detail Page</h1>
        <div className="col animate__animated animate__fadeIn">
          <div className="card">
            <div className="row no-gutters">
              <UserDetailItems userId={userId} />
              <div className="col-4">
                <div className="card-body">
                  <h4>Álbums:</h4>
                  <AlbumList albums={albums} />
                </div>
              </div>
              <div className="col-4">
                <div className="card-body">
                  <h4>TODO's:</h4>
                  <AddTodo setTodos={setTodos} todos={todos} />
                  <TodoList todos={todos} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
