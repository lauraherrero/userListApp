import { AlbumItem } from "./AlbumItem";

export const AlbumList = ({ albums }) => {
  return (
    <>
      <ol>
        <p>
          { albums.map((album) => {
            return <AlbumItem key={album.id} {...album} />;
          })}
        </p>
      </ol>
    </>
  );
};
