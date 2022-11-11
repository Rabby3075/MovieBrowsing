import './App.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import About from './Component/About';
import MoviewView from './Component/MovieView';
import Searchview from './Component/Searchview';
import { Route, Routes } from 'react-router-dom';
import { useState,useEffect } from 'react';


function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, SetSearchText] = useState('');

  //api = cf1f8c81cf17ec00d655a24079ec8e07
  // https://api.themoviedb.org/3/search/movie?api_key=cf1f8c81cf17ec00d655a24079ec8e07&language=en-US&query=star%20wars&page=1&include_adult=false

  useEffect(()=>{
    if(searchText){
      console.log(searchText, "is the search text")
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=cf1f8c81cf17ec00d655a24079ec8e07&language=en-US&query=${searchText}&page=1&include_adult=false`)
      .then(response => response.json())
      .then(data=>{
        console.log(data)
        setSearchResults(data.results)
      })
    }
   

  },[searchText])

  return (
    <div>
      <Navbar searchText={searchText} SetSearchText={SetSearchText}/>   
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/about' element={<About/>}></Route>
        <Route exact path='/search' element={<Searchview keyword={searchText} searchResults={searchResults} />}></Route>
        <Route exact path='/movie/:id' element={<MoviewView/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
