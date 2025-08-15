import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'; // in browser we can navigate withing the pages using this 
import "./css/index.css"
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> 
     <App />
    </BrowserRouter>
   
  </StrictMode>,
)
