import { createContext,useState, useContext, useEffect }from "react";
import type { ReactNode }from "react";
import type {Movie} from "../pages/Home"

const MovieContext = createContext("");

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = () => ({ children}: { children: ReactNode } ) =>{
    const [favorites,setFavorites] = useState<Movie[]>([]);

    useEffect( () => {
        const storedFavs = localStorage.getItem("favorites");
        if (storedFavs) {
            setFavorites(JSON.parse(storedFavs))
        }
    },[]);

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));

    }
    );

    const addToFavorites = (movie: Movie) => {
        setFavorites(prev => [...prev,movie])
    }


    const removeFromFavorites = (movieID: number) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieID))
    }

    const isFavorite = (movieId: number) => {
        return favorites.some(movie => movie.id === movieId)

    }
    
    //@ts-ignore
    return <MovieContext.Provider >
        {children}
    </MovieContext.Provider>

};