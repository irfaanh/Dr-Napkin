import Layout from "../Components/Layout";
import WhoWeAre from "../Pages/WhoWeAre";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import Blog from "../Pages/Blogs";
import HygienePage from "../Pages/HygienePage";
import BiodegradablePage from "../Pages/BiodegradablePage";
import WomenHealthPage from "../Pages/WomenHealthPage";
import TaboosPage from "../Pages/TaboosPage";
import InfectionPage from "../Pages/InfectionPage";

const NapkinRoute = [
    {
        path:'/',
        element:<Layout/>,
        children:[
            {path:"",element:<Home/>},
            {path:"/aboutus",element:<WhoWeAre/>},
            {path:'/contact',element:<Contact/>},

            {path:'/blogs',element:<Blog/>},
            
            {path:'/hygiene',element:<HygienePage/>},
            {path:'/biodegradable',element:<BiodegradablePage/>},
            {path:'/womens-health',element:<WomenHealthPage/>},
            {path:'/period-taboos',element:<TaboosPage/>},
            {path:'/vaginal-infection',element:<InfectionPage/>},
        ]
    }
]

export default NapkinRoute