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

const SearchView = ({ keyword, searchResults }) => {
  

  const resultsHtml = searchResults.map((obj, i) => {
    return(
        <div className="col-lg-3 col-md-3 col-2 my-4">
            <MovieCard movie={obj} key={i} />
        </div>
    )
  })

  return (
    <>
      
      {
      resultsHtml &&
      <div className="container">
        <div className="row">
            {resultsHtml}
        </div>
      </div>
      }  
    </>
  );
};

export default SearchView;
