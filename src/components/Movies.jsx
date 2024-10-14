import useFetch from "../useFetch";
const Movies = () => {
  const { data, loading, error } = useFetch(
    "https://backend-user2.vercel.app/movies"
  );

  console.log(data);

  return (
    <div>
      <h1>Movies:</h1>
      <ul>
        {data?.map((movie) => (
          <li key={movie._id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
