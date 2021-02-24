import React, { useEffect } from 'react';
import Menu from './Components/menu.js';
import routes from './Routes'
import Header from './Components/header.js'
import Request from './Components/request'
import LoginRegister from './Pages/Login_Register'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch,
  } from "react-router-dom";

export const Component = (props) => {
  
    return(
        <>
        <div className="row h-100 bg_main ">
        <Menu/>
        <div id="tmp_id" className="col-md-10 h-100 customize-layout-right d-flex flex-column"> 
        <Header/>
        <Redirection/> 
        </div>
        </div> 
        <Request></Request>
        </>
    )
}
function Redirection(){
    const match = useRouteMatch()
    console.log({match});
    var result = null;
    result = routes.map((route,index)=>{
      console.log(`${match.url}${route.path}`)
      return <Route path={`${match.url}${route.path}`} component={route.page}  key={index} exact = {route.exact}>

      </Route>
    });
    return  <Switch>{result}</Switch>;
  }

export default Component