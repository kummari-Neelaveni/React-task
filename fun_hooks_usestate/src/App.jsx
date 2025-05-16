import React from 'react';
import Navbar from './components/Navbar';
import Counter from './components/Counter';
import Colorchange from './components/Colorchange';
import Randomcolor from './components/Randomcolor';
import { Routes, Route } from 'react-router-dom';
import Theme from './components/Theme';



const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/counter" element={<Counter />} />
        <Route path="/colorchange" element={<Colorchange />} />
        <Route path="/randomcolor" element={<Randomcolor />} />
        <Route path="/theme" element={<Theme />} />
      </Routes>
    </div>
  );
};

export default App;

