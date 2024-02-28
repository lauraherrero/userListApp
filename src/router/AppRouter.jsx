import { Route, Routes } from "react-router";
import { UserList } from "../components/user/UserList";
import { UserDetailPage } from "../pages/UserDetailPage";
import { AlbumPhotoList } from "../components/album/photos/AlbumPhotoList";



export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={ <UserList /> } />
        <Route path="users/:id" element={ <UserDetailPage /> } />
        <Route path="photos" element={ <AlbumPhotoList /> } />
      </Routes>
    </>
  );
};
