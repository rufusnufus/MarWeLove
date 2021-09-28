import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Characters from './pages/Characters'
import Character from './pages/Character'
import Comics from './pages/Comics'
import Comic from './pages/Comic'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/characters/:id">
            <Character />
          </Route>
          <Route path="/characters">
            <Characters />
          </Route>
          <Route path="/comics/:id">
            <Comic />
          </Route>
          <Route path="/comics">
            <Comics />
          </Route>
          <Route path="/" exact>
            <Characters />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
