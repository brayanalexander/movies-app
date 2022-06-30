import { MovieDetails } from "./pages/MovieDetails";
import { LandingPage } from "./pages/LandingPage";
import styles from './App.module.css';
import { BrowserRouter ,Route,Routes,Link } from "react-router-dom";

export function App(){
    return <BrowserRouter>
    <div>
        <header>
          <Link to="/"><h1 className={styles.title}>&#127871; Movies Brayan &#127871;</h1></Link>
          
        </header>
        <main>
            <Routes>
            <Route path="/movies/:movieid" element={<MovieDetails/>}/>
            <Route  path="/" element={<LandingPage/>} />
            <Route path="*" element={'ERROR 404'} />
            </Routes>
            
        </main>
    </div>
    </BrowserRouter>
}