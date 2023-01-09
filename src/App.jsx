import * as React from "react";
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { About } from "./pages/about/About";
import { Games } from './pages/games/Games';
import { Home } from './pages/home/Home';
import { GameMemory } from "./pages/gameMemory/MemoryGame";
import { GameOld } from "./pages/gameOld/GameOld";
import { GamePokemon } from "./pages/gamePokemon/GamePokemon";

function App() {

  return (
   <>
     <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/games' element={<Games/>} />
        <Route path='/games/gameMemory' element={<GameMemory/>}/>
        <Route path='/games/gameOld' element={<GameOld/>}/>
        <Route path='/games/gamePokemon' element={<GamePokemon/>}/>
        <Route path='/about' element={<About/>} />
        
      </Routes>
   </>
  )
}

export default App;
