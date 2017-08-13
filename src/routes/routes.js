import React,{BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from 'commponents/login/login'


const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Login}></Route>
      <Route path="/login" component={Login}></Route>
    </Switch>
  </BrowserRouter>
)