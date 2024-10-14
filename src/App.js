import Movies from "./components/Movies";
import MovieByTitle from "./components/MovieByTitle";
import AddMovieForm from "./components/AddMovieForm";

export default function App() {
  return (
    <div>
      <AddMovieForm />
      <Movies />
      <MovieByTitle title="Gully Boy" />
    </div>
  );
}
