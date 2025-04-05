import React, { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard'
import '../cssfiles/Home.css'
import { searchMovies,getPopularMovies } from '../api'

// const Home = () => {
//     const [searchData,setSearchData]=useState("");
//  // const movies=[
//         {id:1,title:"Jon ",release_date:"2020"},
//         {id:2,title:"Jon ",release_date:"2021"},
//         {id:3,title:"Jon ",release_date:"2022"},
//         {id:4,title:"Jon ",release_date:"2023"},
//    // ]
// //callin apis
// const [movies,setMovies]=useState([]);
// const [err,setError]=useState(null);
// const [loading,setLoading]=useState(true);
// useEffect(()=>{
//     const loadpopularmovies=async ()=>{
//         try{
//             const popularMoiies=await getPopularMovies();
//             setMovies(movies)
//         }catch(err){
//             setError("Failed to loaad movies");
//         }
//         finally{setLoading(false)}
//     }
// loadpopularmovies()
// },[])
// //const movies=getPopularMovies();

//     const handleSearch=(e)=>{
//         e.preventDefault();
//         alert(searchData)
//           setSearchData("");  
//     }
//   return (
//     <div className='home'>
//         <form onSubmit={handleSearch} className='search-form'>
//             <input type="text" 
//             className='search-input'
//              placeholder='search for movies...'
//              value={searchData}
//             onChange={(e)=>setSearchData(e.target.value)} />

//             <button type='submit' className='search-button'>Search</button>
//         </form>
//             <div className='movies-grid'>
//               {/* {movies.map((movie)=> ( movie.title.startsWith(searchData) &&
//               (<MovieCard movie={movie} key={movie.id}/>)))}    wihtout using api */}
// {movies.map((movie)=>( <MovieCard movie={movie} key={movie.id}/>))}
//             </div>
      
//     </div>
//   )
// }


function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const loadPopularMovies = async () => {
        try {
          const popularMovies = await getPopularMovies();
          setMovies(popularMovies);
        } catch (err) {
          console.log(err);
          setError("Failed to load movies...");
        } finally {
          setLoading(false);
        }
      };
  
      loadPopularMovies();
    }, []);
  
    const handleSearch = async (e) => {
      e.preventDefault();
      if (!searchQuery.trim()) return
      if (loading) return
  
      setLoading(true)
      try {
          const searchResults = await searchMovies(searchQuery)
          setMovies(searchResults)
          setError(null)
      } catch (err) {
          console.log(err)
          setError("Failed to search movies...")
      } finally {
          setLoading(false)
      }
    };
  
    return (
      <div className="home">
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Search for movies..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
  
          {error && <div className="error-message">{error}</div>}
  
        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <div className="movies-grid">
            {movies.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </div>
        )}
      </div>
    );
  }
  

export default Home
