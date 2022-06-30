import styles from './MovieCard.module.css';
import { Link } from 'react-router-dom';

import { getMovieImg } from '../utils/getMovieImg';

export function MovieCard({ movie }) {
    const imgUrl = getMovieImg(movie.poster_path,300);
    return (
        <li className={styles.movieCard}>
            <Link to={"/movies/"+movie.id}>
            <img width={230} height={345} className={styles.movieImg} src={imgUrl} alt={movie.title} />
            <div className={styles.title} >{movie.title}</div>
            </Link>
        </li>
    )
}