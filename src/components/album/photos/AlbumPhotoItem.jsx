export const AlbumPhotoItem = ({ id, thumbnailUrl }) => {
  return (
    <>
      <li style={{ listStyleType: "none" }} key={ id }>
        <img src={ thumbnailUrl } />
      </li>
    </>
  );
};
