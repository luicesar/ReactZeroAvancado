import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
//pra usar o switch do react-router-dom funciona na versão 5.0
// 

import Main from './pages/Main';
import Repositorio from './pages/Repositorio';

export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/repositorio/:repositorio" component={Repositorio} />
      </Switch>
    </BrowserRouter>
  );
}