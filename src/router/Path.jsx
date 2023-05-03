import {BrowserRouter as Router, useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import WeatherAPI from "../pages/WeatherAPI";

const Path = ()=> {
    let routes = useRoutes([
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/weather",
            element: <WeatherAPI/>
        }

    ])
    return routes;
}

const AppWrapper =()=>{
    return(
        <Router>
            <Path/>
        </Router>
    )
}

export default AppWrapper;