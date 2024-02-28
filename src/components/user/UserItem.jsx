import { Link } from "react-router-dom";

export const UserItem = ({ name, id }) => {
  return (
    <>
      <div className="col animate__animated animate__fadeIn">
        <div className="card">
          <div className="col-8">
            <div className="card-body">
              <h2>{name}</h2>
              <Link to={`/users/${id}`}>Más info</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
