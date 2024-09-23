import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Sports from './Components/sports/Sports.jsx';
import Pricing from './Components/Pricing/Pricing.jsx';
import LogIn from './Components/LogIn/LogIn.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path:"/sports",
    element : <Sports/>
  },
  {
    path:"/pricing",
    element : <Pricing/>
  },
  {
    path:"/login",
    element : <LogIn/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router}/>
  </StrictMode>,
)
