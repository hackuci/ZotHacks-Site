import React from "react"
import { Route, Switch, HashRouter } from "react-router-dom"
import history from "./history"
import "./App.scss"

import { Home, Schedule, StarterPacks } from "app/views"

import { Nav } from "app/components"

function App() {
  return (
    <div className="App">
      <HashRouter history={history} basename="/Zothacks-Site">
        <Nav history={history}></Nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/schedule" component={Schedule} />
          <Route exact path="/starter-packs" component={StarterPacks} />
        </Switch>
      </HashRouter>
    </div>
  )
}

export default App
