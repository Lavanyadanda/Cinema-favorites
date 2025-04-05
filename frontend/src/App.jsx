import { useState } from 'react'

import './cssfiles/App.css'
import MovieCard from './components/MovieCard'
import Home from './pages/Home';
import { Routes,Route } from 'react-router-dom';
import Favourites from './pages/Favourites';
import Navbar from './components/Navbar';
import { MovieProvider } from './contexts/MovieContext';
function App() {
 

  return (
  
     <MovieProvider>
      <Navbar/>
   
    <main className='main-content'>
      
    <Routes>

      <Route path='/' element={<Home/>} />
      <Route path='/favorites' element={<Favourites/>}/>



    </Routes>
    
    {/* <Home /> */}
    {/* {movieNumber==1?(<MovieCard movie={{title:"Tims film", release_date:"2024",url:""}}/>)
    :null}
      <MovieCard movie={{title:"Tims film", release_date:"2024",url:""}}/> */}
    </main>
    </MovieProvider>
      )
}

export default App
