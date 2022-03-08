import Hero from "./hero";
import { Link } from "react-router-dom";

const MovieCard = ({movie}) => {
  const posterUrl =  `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
  const detailUrl = `/movies/${movie.id}`
  return (
    <>
      <div className="col-lg-3 col-md-4 col-xs-6 col-sm-2 my-4">
        <div className="card">
          <img src={posterUrl} className ="card-img-top" alt={movie.original_title} />
          <div className="card-body">
            <h5 className="card-title">{movie.original_title}</h5>
            <Link to={detailUrl} className="btn btn-primary">Show details</Link>
          </div>
        </div>
      </div>
    </>
  )
}
const Home = ({searchResults}) => {
  const resultsHtml = searchResults.map((obj, i) => {
    return <MovieCard movie={obj} key={i}/>;
  });
  return (
    <>
      <Hero text="Trending" />
      <div className="container">
        <div className="row">
          {resultsHtml}
        </div>
      </div>
    </>
  );
};
export default Home;
