import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Modal from 'react-modal'
import { useSelector } from 'react-redux'
import Header from './components/Header'
import NameForm from './components/NameForm'
import Characters from './pages/Characters'
import Character from './pages/Character'
import Comics from './pages/Comics'
import Comic from './pages/Comic'

Modal.setAppElement('#root')

function App() {
  const name = useSelector((state) => state.user.name)
  const token = useSelector((state) => state.user.token)
  // TODO: DISABLE_AUTH=True

  return (
    <div className="App">
      <BrowserRouter>
        <Header name={name} />
        <Modal
          style={{
            content: { background: 'transparent', border: 'none' },
            overlay: { background: 'rgba(0, 0, 0, 0.75)' }
          }}
          isOpen={!token.length}
        >
          <NameForm />
        </Modal>
        {token.length && (
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
        )}
      </BrowserRouter>
    </div>
  )
}

export default App
