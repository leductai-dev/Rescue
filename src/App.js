import React, { useState,useEffect,Suspense } from 'react';
/* import LoginRegister from './Pages/Login_Register' */
import Main from './Apps2'
import NotFoundPage from './Pages/NotFoundPage.js'

import {app} from './firebaseConfig'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Redirect } from "react-router-dom";


const LoginRegister = React.lazy(()=>import('./Pages/Login_Register'))
function App() {
  

  var [isLogin, setisLogin] = useState(true)

  useEffect(() => {
    
  }, [])

  app.auth().onAuthStateChanged(function(user) {
    if(user) {
      setisLogin(true)
    }
    else{
      setisLogin(false)
      console.log("em chay");
    }}
    )

  
  

return(
  <Suspense fallback={<div>loading...</div>}>
  <Router> 
         <Switch>
              <Route path={'/login-register'}  exact = {false}>
                  {!isLogin ?  <LoginRegister/> :<Redirect to="/" /> }
              </Route> 
              <Route path={'/'}  exact = {false}>
                  {isLogin ? <Main /> :<Redirect to="/login-register" /> }
              </Route>
              <Route path={':slug'}  exact = {false}>
                  < NotFoundPage />
              </Route>
          </Switch>
 

           
</Router>
</Suspense>

    );
  }

 /*  <Main />  */

/*   app.auth().onAuthStateChanged(function(user) {
    if(user)
    {
      <Router> 
      <Switch>
         <Route path={'/'}  exact = {false}>
      <Main /> 
         </Route>
       
     </Switch>
   </Router>
    }
    else{
      alert("nope")
  
    }
  })
  )} */

 
/* function Redirection(){
  var result = null;
  result = routes.map((route,index)=>{
    return <Route path={route.path}  key={index} exact = {route.exact}>
      {route.page} 
    </Route>
  });
  return  <Switch>{result}</Switch>;
} */

export default App;
