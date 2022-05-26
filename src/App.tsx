import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { SpellsPage } from './views/Spells/SpellsPage/SpellsPage';
import { MainPage } from './views/Main/MainPage/MainPage';
import { SpellPage } from './views/Spells/SpellPage/SpellPage';
import ClassesPage from './views/Classes/ClassesPage/ClassesPage';
import ClassPage from './views/Classes/ClassPage/ClassPage';
import { Header } from './components/UI/Header/Header';

function App(): React.ReactElement {
  return (
    <div className="App">
      <Header />{' '}
      <div className="pt-20">
        <Routes>
          <Route path={'/'} element={<MainPage />} />
          <Route path={'/spells'} element={<SpellsPage />} />
          <Route path={'/spells/:index'} element={<SpellPage />} />
          <Route path={'/classes'} element={<ClassesPage />} />
          <Route path={'/classes/:index'} element={<ClassPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
