import Hero from "./Hero";
import { useState,useEffect } from 'react';
import { Link } from "react-router-dom";

const MovieCard = ({movie}) =>{
    const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    const detailUrl = `/movie/${movie.id}`
    
    return(
        <>
        <div className="card" style={{width: '18rem'}}>
            <img src={posterUrl} className="card-img-top" alt={movie.original_title} />
            <div className="card-body">
                <h5 className="card-title">{movie.original_title}</h5>
                <Link to={detailUrl} className="btn btn-primary">Show details</Link>
            </div>
        </div>
       
        </>
    )

}

const Home = () =>{
    const [movies, setMovies] = useState([]);
    useEffect(()=>{
          fetch(`https://api.themoviedb.org/3/discover/movie?api_key=cf1f8c81cf17ec00d655a24079ec8e07&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)
          .then(response => response.json())
          .then(data=>{
            console.log(data)
            setMovies(data.results)
          })     
    
      })
      const resultsHtml = movies.map((obj, i) => {
        return(
            <div className="col-lg-3 col-md-3 col-2 my-4">
                <MovieCard movie={obj} key={i} />
            </div>
        )
      })
    return(
    <>
    <Hero text="Welcome to Netlify"/>
    {
      resultsHtml &&
      <div className="container">
        <div className="row">
            {resultsHtml}
        </div>
      </div>
      } 
    </>
    )
}
export default Home;