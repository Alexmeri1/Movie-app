import { createContext, useState, useContext, useEffect } from "react";
import type { ReactNode } from "react";
import type { Movie } from "../pages/Home";

const MovieContext = createContext({
  favorites: [] as Movie[],
  addToFavorites: (movie: Movie) => {},
  removeFromFavorites: (movieID: number) => {},
  isFavorite: (movieId: number) => false as boolean,
});

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<Movie[]>([]);

  useEffect(() => {
    const storedFavs = localStorage.getItem("favorites");
    if (storedFavs) {
      setFavorites(JSON.parse(storedFavs));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (movie: Movie) => {
    setFavorites((prev) => [...prev, movie]);
  };

  const removeFromFavorites = (movieID: number) => {
    setFavorites((prev) => prev.filter((movie) => movie.id !== movieID));
  };

  const isFavorite = (movieId: number) => {
    return favorites.some((movie) => movie.id === movieId);
  };

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  };

  return <MovieContext.Provider value={value}>
    {children}
    </MovieContext.Provider>;
};