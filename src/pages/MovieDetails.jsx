import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { get } from '../utils/httpClient';
import { Spinner } from '../components/Spinner';

import styles from './MovieDetails.module.css';
import { getMovieImg } from '../utils/getMovieImg';



export function MovieDetails(){
    const useparams=useParams();
    const movieId=useparams.movieid;
    
    const [movie,setMovie]=useState(null);
    const [isLoading,setIsLoading]=useState(true);



    useEffect(() =>{
        setIsLoading(true);
     get('/movie/'+movieId).then((data) =>{
        setMovie(data);
        setIsLoading(false);
        
     })
    },[movieId]);
   
    if(isLoading){
      return <Spinner/>
    }

   /* if(!movie){
        return null; 
          } */

          const imgUrl = getMovieImg(movie.poster_path,300);
 
    return(
        <div className={styles.detailContainer}>
            <img className={`${styles.col} ${styles.movieImage}`} src={imgUrl} alt={movie.title}/>
            <div className={`${styles.col} ${styles.movieDetails}`}>
                <p className={styles.firstItem}><strong>Title: </strong> {movie.title}</p>
                <p><strong>Genres: </strong> {movie.genres.map(genre => genre.name).join(", ")}</p>
                <p><strong>Description: </strong> {movie.overview}</p>
            </div>
        </div>
    )
}