import React from 'react';
import ShopList from '../src/pages/ShopList'
import Detail from '../src/pages/Detail'
import Xiding from '../src/pages/Xiiding'
import {BrowserRouter,Switch,Route} from "react-router-dom"
import './App.css';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Switch>
                <Route path="/xiding" component={Xiding}></Route>
                <Route path="/detail" component={Detail}></Route>
                <Route path="/" component={ShopList}></Route>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
