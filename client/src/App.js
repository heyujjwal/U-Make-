// import logo from './logo.svg';
// import './App.css';
import DataProvider from './components/context/DataProvider';
import Header from './components/header/Header';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
// import ContextProvider from './components/context/ContextProvider';

import Cart from './components/cart/Cart'
import Home from './components/home/home';
import { Box } from '@mui/material';
import DetailView from './components/details/DetailView';
function App() {
  return (
    <DataProvider >
    <BrowserRouter>
      <Header  />
      
        <Box style={{marginTop:60}}>
          <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/product/:id' element={ <DetailView />}/>
          <Route path='/cart' element={ <Cart />}/>
          </Routes>
          
        </Box>
      
        
    </BrowserRouter>
      
    </DataProvider>
  );
}

export default App;
