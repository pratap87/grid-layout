
import React, { useEffect, useState } from 'react';
import './styles.css';
import movies from '../mock_data.json'
import Header from '../components/Header';
import useDebounce from '../hooks/useDebounce';
export const Home = () => {

  const [data,setData]=useState(movies)
  const [searchTerm,setSearchTerm]=useState('');


  const onSearch=(searchTerm)=>{
    
setSearchTerm(searchTerm);

 
  }
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(()=>{
     if(debouncedSearchTerm){
    const parsedSearchTerm = parseSearchTerm(debouncedSearchTerm);
    const filteredMovies = filterMovies(parsedSearchTerm);
    
    setData(filteredMovies);
     }
     else{
      setData(movies)
     }
  },[debouncedSearchTerm])
  const onFilter=(filter)=>{
  
    
   setData([...movies.sort((a, b) => a[filter].localeCompare(b[filter]))])
 
  }
  const filterMovies = (terms) => {
    if (terms.length === 0) return data;
    return movies.filter(movie => {
      return terms.every(term => {
        if (term.startsWith('"') && term.endsWith('"')) {
          // Exact match for phrases within double quotes
          const phrase = term.substring(1, term.length - 1);
          return movie.name.toLowerCase() === phrase.toLowerCase();
        } else {
          // Normal case-insensitive match for single words
          return movie.name.toLowerCase().includes(term.toLowerCase());
        }
      });
    });
  };

  const parseSearchTerm = (term) => {
    const pattern = /"([^"]+)"|(\S+)/g;
    let match;
    const parsedTerm = [];
    while ((match = pattern.exec(term)) !== null) {
      const [, phrase, word] = match;
      parsedTerm.push(phrase || word);
    }
    return parsedTerm;
  };

    return (

      <>
    <div className="topnav">
    <a href='#'>Logo</a>
    </div>
      <Header onSearch={onSearch} onFilter={onFilter}/>
        <div className="grid-container">
        <div className="grid">
          {data.map(movie => (
            <div key={movie.name} className="grid-item">
              <img src={movie.image} alt={movie.name} />
              <h3>{movie.name}</h3>
              <p>{movie.description}</p>
              <p>{movie.dateLastEdited}</p>
            </div>
          ))}
        </div>
      </div>
      </>
    );
  };
  
  export default Home;
  