import Favorites from "./pages/Favorites.tsx";
import Home from "./pages/Home.tsx";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.tsx";
import "./css/App.css";
import { MovieProvider } from "./contexts/MovieContext.tsx";


function App() {
  return (
    <>
      <MovieProvider>
        <NavBar/>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </main>
      </MovieProvider>
    </>
  );
}

export default App;
