import { Link } from "react-router-dom";


export const AlbumItem = ({ title, id }) => {
  return (
    <>
    <li key={ id }>{ title }</li>
    <Link to={`/photos?albumId=${ id }`} >
      Ver fotos
    </Link>
    </>
  )
}
