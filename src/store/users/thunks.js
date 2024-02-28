import { onDeleteTodo, setUsers, startLoadingUsers } from "./userSlice";

export const getUserList = () => {
  return async (dispatch) => {
    dispatch(startLoadingUsers());

    const resp = await fetch("https://jsonplaceholder.typicode.com/users/");
    const data = await resp.json();

    dispatch(setUsers({ users: data }));
  };
};

export const getUserById = async (id) => {
  const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await resp.json();
  return data;
};

export const getAlbumList = async (id) => {
  const resp = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}/albums`
  );
  const data = await resp.json();
  return data;
};

export const getPhotoList = async (id) => {
  const resp = await fetch(
    `https://jsonplaceholder.typicode.com/photos?albumId=${id}`
  );
  const data = await resp.json();
  return data;
};

export const getTODOList = async (id) => {
  const resp = await fetch(
    `https://jsonplaceholder.typicode.com/todos?userId=${id}`
  );
  const data = await resp.json();
  
  console.log(data);
  return data;
};


export const startDelete = () => {
  return async( dispatch ) => {
    
    dispatch( onDeleteTodo());
  }
}


