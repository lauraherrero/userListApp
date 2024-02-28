import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import queryString from "query-string";
import { getPhotoList } from "../../../store/users/thunks";
import { AlbumPhotoItem } from "./AlbumPhotoItem";

export const AlbumPhotoList = () => {
  const location = useLocation();

  const query = queryString.parse(location.search);
  const id = query.albumId;


  const [photos, setPhotos] = useState(JSON.parse(localStorage.getItem('photos')) || []);


  const getPhotos = async () => {
    const newPhotos = await getPhotoList(id);
    setPhotos(newPhotos);
    console.log(newPhotos);
    localStorage.setItem('photos', JSON.stringify(newPhotos));
  };


  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <>
      <div>
        <h1 className="text-center my-4">Álbum nº: {id}</h1>
        <div className="w-50 mx-auto d-flex flex-wrap p-2 justify-content-center">
          {photos.map(photo => (
            <AlbumPhotoItem key={ photo.id } { ...photo }/>
          ))}
        </div>
      </div>
    </>
  );
};
