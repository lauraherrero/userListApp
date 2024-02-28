
export const SearchTodo = ({ setSearch }) => {

  return (
    <>
      <input
        type="text"
        placeholder="Buscar TODO"
        onChange={(e) => setSearch(e.target.value)}
      />
    </>
  );
};
