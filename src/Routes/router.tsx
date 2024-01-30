import { Routes, Route } from "react-router-dom";

import { Home } from "../Pages/Home";
import { DefaultLayout } from "../Layouts/DefaultLayout";
import { Checkout } from "../Pages/Checkout";

export function Router(){
    return(
        <Routes>
            <Route path='/' element={ <DefaultLayout/> }> 
                <Route path='/' element={ <Home/> }/> 
                <Route path='/checkout' element={ <Checkout/> }/>     
            </Route>
        </Routes>
    )
};