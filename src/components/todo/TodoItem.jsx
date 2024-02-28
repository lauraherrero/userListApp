import { useDispatch } from "react-redux";
import { startDelete } from "../../store/users/thunks"; 

export const TodoItem = ({ id, title, userId }) => {
  const dispatch = useDispatch();
  

  return (
    <>
      <div className="d-flex flex-wrap">
        <li key={id}>
          {title}
          <button
            className="btn btn-danger fab-danger mx-2"
            style={{ fontSize: "10px" }}
            onClick={() => dispatch(startDelete(id))}
            key={userId}
          >
            <i className="fas fa-trash-alt m-0"></i>
          </button>
        </li>
      </div>
    </>
  );
};
