import Hero from "./hero";
import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";

const MovieView = () => {
  const {id} = useParams()
  const [movieDetails, setMovieDetails] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
      fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=87872052d5a1309cb9f01b635a167d6b&language=en-us`)
        .then(response => response.json())
        .then(data => {
            setTimeout(()=>{
                setIsLoading(false)
            }, 2000)
            setMovieDetails(data)
        })

  }, [id])

  function renderMovieDetails() {
    if (isLoading){
        return <Hero text="Loading..." />
    }
    if (movieDetails) {
        const poster = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
        const backdrop = `https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`
        return (
            <>
                <Hero text={movieDetails.original_title} backdrop={backdrop}></Hero>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-1 my-5">
                            <img
                                src={poster} className="img-fluid"
                                onError={({currentTarget})=>{
                                    currentTarget.onerror = null;
                                    currentTarget.src = "https://st4.depositphotos.com/14953852/22772/v/1600/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg"
                                }}
                            >
                                 
                            </img>
                        </div>
                        <div className="col-md-9 col-sm-1 my-lg-5 my-md-5 my-sm-1">
                            <h2>{movieDetails.original_title}</h2>
                            <p className="lead">
                                {movieDetails.overview}
                            </p>
                            <div>
                                <h2 style={{display: "inline"}}>REVIEWS: </h2>
                                <p style={{fontSize: "25px", display: "inline"}}>
                                    {movieDetails.vote_average}/10
                                </p>
                            </div>
                            <div className="my-md-3 my-sm-1">
                                <h2 style={{display: "inline"}}>GENRES </h2>
                                <p style={{fontSize: "25px", display: "inline"}}>
                                    {movieDetails.genres[0].name}
                                </p>
                            </div>
                        </div>
                    </div>    
                </div>
            </>
        )
    }
  }

  return (
    renderMovieDetails()
  );
};
export default MovieView;
