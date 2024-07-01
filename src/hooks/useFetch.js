import { useState, useEffect } from 'react';
import axios from 'axios';

const searchTerms = ['action', 'comedy', 'drama', 'horror', 'romance'];

const useFetchMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setError(null);
      try {
        const moviePromises = searchTerms.map(term =>
          axios.get('http://www.omdbapi.com/', {
            params: {
              apikey: '97d579a2', 
              s: term,
            }
          })
        );
        const responses = await Promise.all(moviePromises);
        const allMovies = responses.flatMap(response => response.data.Search || []);
        setMovies(allMovies);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return { movies, loading, error };
};

export default useFetchMovies;
