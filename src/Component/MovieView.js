import Hero from "./Hero";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const MoviewView = () =>{
    const {id} = useParams();
    const [movieDetails, setMovieDetails] = useState({})
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        console.log(`Movie Request for ${id}`)
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=cf1f8c81cf17ec00d655a24079ec8e07&language=en-US`)
        .then(response => response.json())
        .then(data=>{
            setMovieDetails(data)
            setLoading(false)
        })
    },[id]);
    function renderMovieDetails(){
        const posterUrl = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
        const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`
        if (loading) {
            return(
                <>
                <Hero text="Loading...."/> 
                <div className="container my-5">
                <div className="row">
                    <div className="col-md-3">
                        <img src={posterUrl} className="img-fluid shadow rounded" alt={movieDetails.original_title}/>
                    </div>
                    <div className="col-md-9">
                        <h1>Loading...</h1>
                        <p className="text-muted mt-2">{movieDetails.overview}</p>
                    </div>
                </div>
            </div>
                </>
            )  
        }
        if(movieDetails){
            let year = movieDetails.release_date.substr(0,4);
            return(
            <>
            <Hero text={movieDetails.original_title} backdrop={backdropUrl} /> 
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-3">
                        <img src={posterUrl} className="img-fluid shadow rounded" alt={movieDetails.original_title}/>
                    </div>
                    <div className="col-md-9">
                        <h1 className="text-primary">{movieDetails.original_title} ({year})</h1>
                        <h5 className="text-dark">
                            {
                            movieDetails.genres.map((obj, i) => {
                                return(
                                    <span key={i}>{obj.name}||</span>
                                )
                              })
                            }
                            </h5>
                        <p className="text-muted mt-2">{movieDetails.overview}</p>
                    </div>
                </div>
            </div>
            </>
            )
        }
    }
    return renderMovieDetails();
}
export default MoviewView;