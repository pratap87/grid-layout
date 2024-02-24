
import React from 'react';
import './styles.css';
import movies from '../mock_data.json'
import Header from '../components/Header';
export const Home = () => {

  const onSearch=(searh)=>{
console.log('onSearch')
  }
  const onFilter=(filter)=>{
console.log('onFilter')
  }

    return (

      <>
      <Header onSearch={onSearch} onFilter={onFilter}/>
        <div className="grid-container">
        <div className="grid">
          {movies.map(movie => (
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
  