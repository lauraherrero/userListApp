
export const UserDetailItems = ({ userId }) => {

  return (
    <>
      <div className="col-4">
        <div className="card-body">
          <h1 className="card-title">Nombre: </h1><p className="username_title">{userId.name}</p>
          <h4 className="card-text"><strong>Username:</strong> </h4><p>{userId.username}</p>
          <h4 className="card-text"><strong>Email:</strong></h4><p>{userId.email}</p>
          <h4 className="card-text"><strong>City:</strong> </h4><p>{userId.address.city}</p>
          <h4 className="card-text"><strong>Website:</strong></h4><p>{userId.website}</p>
          <h4 className="card-text"><strong>Company:</strong></h4><p>{userId.company.name}</p>
        </div>
      </div>
    </>
  );
};
