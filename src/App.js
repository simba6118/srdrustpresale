import React from 'react';

import Navbar from './layouts/navbar';
import PresalcPart from "./pages/presalePart"
import Claim from './pages/claim';
import ThemeContext from './context/themeContext';

import './App.css';
import SOL from "./assets/img/sol.svg"
import USDC from "./assets/img/usdc.svg"
import PRNT from "./assets/img/prnt.svg"
import JUP from "./assets/img/jup.svg"
import BONK from "./assets/img/bonk.svg"
import BOZO from "./assets/img/bozo.svg"
import BASC from "./assets/img/basc.svg"
import WIF from "./assets/img/wif.svg"
import WEN from "./assets/img/wen.png"

function App() {

  const tokens = [
    {ft: "SOL", icon: SOL},
    {ft: "USDC", icon: USDC},
    {ft: "PRNT", icon: PRNT},
    {ft: "JUP", icon:  JUP},
    {ft: "BONK", icon: BONK},
    {ft: "BOZO", icon: BOZO},
    {ft: "BASC", icon: BASC},
    {ft: "WIF", icon: WIF},
    {ft: "WEN", icon: WEN},
];
  return (
    <div className="App">
      <ThemeContext.Provider value={tokens}>
        <Navbar></Navbar>
        <PresalcPart></PresalcPart>
        <Claim></Claim>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
