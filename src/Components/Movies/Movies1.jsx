
import React from 'react';

const Movies = () => {
  const movieList = ['Inception', 'Interstellar', 'Dune', 'Avengers', 'Joker'];

  return (
    <div>
      <h3>Movies Component</h3>
      <ul>
        {movieList.map((movie, index) => (
          <li key={index}>{movie}</li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
