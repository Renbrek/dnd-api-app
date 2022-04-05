import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {SpellsPage} from './views/Spells/SpellsPage/SpellsPage';
import {MainPage} from './views/Main/MainPage/MainPage';
import {SpellPage} from './views/Spells/SpellPage/SpellPage';

function App(): React.ReactElement {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<MainPage/>}/>
        <Route path={'/spells'} element={<SpellsPage/>}/>
        <Route path={'/spells/:index'} element={<SpellPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
