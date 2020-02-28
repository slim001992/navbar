import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navmenu from "./components/navmenu"

const menu=[
  {title:'Home'},
  {title:'Services', drop:['For entrepreneurs','For students','For hobbyists']},
  {title:'Contact'},
]

function App() {
  return ( <div className="App"><Navmenu x={menu} /></div> )
}

export default App;