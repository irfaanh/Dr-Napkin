import './App.css'
import {BrowserRouter, useRoutes} from 'react-router-dom'
import NapkinRoute from './Routes/Routes'
import ScrollToTop from './Components/ScrollToTop'

function AppRoute() {
  const element = useRoutes(NapkinRoute)
  return element
}

function App() {
 return (
  <BrowserRouter>
    <ScrollToTop/>
    <AppRoute/>
  </BrowserRouter>
  
  
  )
}

export default App
