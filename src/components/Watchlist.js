
import React,{useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

import { MovieCard } from './MovieCard';
import { Watched } from './Watched';
export const Watchlist = () => {
    const {watchlist}=useContext(GlobalContext);
    return (
        <div className="movie-page">
            <div className="container">
                <div  className="header">
                    <h1 className="heading">
                        My WatchList
                         </h1>
                         <span className="count-pill">


                             {watchlist.length} {Watchlist.length === 1 ? 'Movie': 'Movies'}                         
                             </span>




                </div>

                {watchlist.length >0? (
                    <div className="movie-grid">

                    {watchlist.map(movie => (
                        <MovieCard movie={movie} type="watchlist"/>
                    ))}
                </div>



                ) : (
                    <h2 className="no-movies">NO MOVIES MATE! ADD SOME NOW </h2>
                )}


               


            </div>
            
             </div>
        
    );
};
