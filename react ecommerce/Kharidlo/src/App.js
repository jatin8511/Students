import logo from './logo.svg';
import './App.css';
import Navbar from './Comps/Navbar'
import Home from './Comps/Home';
import { Products } from './Comps/Products';
import { createContext } from 'react';


export const  MainCont = createContext()
function App() {
  return (
   <>
   <MainCont.Provider value={{Products}}>
   <Navbar />
   <Home />
   </MainCont.Provider>
   </>
  );
}

export default App;
