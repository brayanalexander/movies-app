import styles from './Search.module.css';
import { FaSearch } from 'react-icons/fa';
//import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '../hooks/useQuery';
//import { useEffect } from 'react';

export function Search(){
    const query=useQuery();
    const search=query.get("search");

    
    const history=useNavigate();

    
    const handleSubmit=(e)=>{
    e.preventDefault();
   
    }

    return(
        
            <form onSubmit={handleSubmit} className={styles.searchContainer}>
                <div className={styles.searchBox}>
                <input value={search} onChange={(e) =>{
                  
                  history("/?search="+e.target.value.toUpperCase());
                }
               } className={styles.searchInput} type="text" placeholder='Title' aria-label="Search Movies" />
                <FaSearch size={20} color="black" className={styles.searchButton} />
                </div>
            </form>
        
    )
}