import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Comics from './pages/Comics'
import Characters from './pages/Characters'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/characters">
            <Characters />
          </Route>
          <Route path="/comics">
            <Comics />
          </Route>
          <Route path="/" exact>
            <Characters />
          </Route>
        </Switch>
      </BrowserRouter>
      {/* 
        space for our future components & routes:
        header
        dynamic-content (router)
        / -> Characters
        /characters -> 
        /... -> ...
        footer 
      */}
    </div>
  )
}

export default App
