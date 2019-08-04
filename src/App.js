import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Search from './components/search'
import Detail from './components/detail'

function App() {
  return (
    <div className='app container'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Search} />
          <Route path='/:id' component={Detail} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
