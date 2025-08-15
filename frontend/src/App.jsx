
import './css/App.css'
import Navbar from './components/NavBar';
import Favorites from "./pages/Favorites";
import Home from './pages/Home';
import { Routes ,Route } from 'react-router-dom';
import { MovieProvider } from './assets/contexts/MovieContext';

function App() { // funtion is component in react


  return (
    <div>
      <MovieProvider>
      <Navbar/>
   <main className="main-content">
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/favorites' element={<Favorites/>}/>


    </Routes>
   </main>
   </MovieProvider>
   </div>
  );
}

export default App;
