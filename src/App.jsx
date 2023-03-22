import { useState } from 'react';
import './App.css';
import ListCard from './components/ListCard';
import {CardsContextComp} from './context/CardsContext';


function App() {
  
  

  return (
    <div className="App">
      <div className="p-3">
        <CardsContextComp>
          <ListCard></ListCard>
        </CardsContextComp>
      </div>
    </div>
  );
}

export default App;
