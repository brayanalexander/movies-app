import { useState } from 'react';
import { useEffect } from 'react';
import { MovieCard } from './MovieCard';
import { get } from '../utils/httpClient.jsx';
import { Spinner } from './Spinner.jsx';
//import { useQuery } from '../hooks/useQuery';
import InfiniteScroll from 'react-infinite-scroll-component';

import styleGrid from './MoviesGrid.module.css';
import { Empty } from './Empty.jsx';



export function MoviesGrid({search}) {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [hasMore,setHasMore]=useState(true);

   
    console.log(search);

    useEffect(() => {
        setIsLoading(true);
        const searchURL = search ? "/search/movie?query=" + search+"&page="+page : '/discover/movie?page='+page;
        get(searchURL).then(data => {
            setMovies((prevMovies)=>prevMovies.concat(data.results));
            setHasMore(data.page<data.total_pages);
            setIsLoading(false);
        })
    }, [search,page]);

    if(!isLoading && movies.length===0){
    return <Empty />;
    }

    return (
        <InfiniteScroll dataLength={movies.length} hasMore={hasMore} next={() => setPage((prevPage) => prevPage + 1)}  loader={<Spinner />}>
            <ul className={styleGrid.movieGrid}>
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                )
                )}
            </ul>
        </InfiniteScroll>

    )

}