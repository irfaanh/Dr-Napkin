import './App.css'
import {BrowserRouter, useRoutes} from 'react-router-dom'
import NapkinRoute from './Routes/Routes'
import ScrollToTop from './Components/ScrollToTop'
import SmoothWrapper from './Components/SmoothWrapper'

function AppRoute() {
  const element = useRoutes(NapkinRoute)
  return element
}

function App() {
 return (
  <BrowserRouter>
    <SmoothWrapper>
      <ScrollToTop/>
      <AppRoute/>
    </SmoothWrapper>
  </BrowserRouter>
  
  
  )
}

export default App
