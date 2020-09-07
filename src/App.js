import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import GuestLayout from './layouts/GuestLayout'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home/Home.comp'
import Main from './pages/Main/Main.comp'

export default () => {

  return (
    <Router>
      <Switch>
        <Route path='/login' component={Home} />

        <Route path='/admin/:path?' exact>
          <GuestLayout>
            <Switch>
              <Route path='/admin' exact component={Home} />
              <Route path='/admin/setting' component={Main} />
            </Switch>
          </GuestLayout>
        </Route>

        <Route>
          <MainLayout>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/about' component={Home} />
            </Switch>
          </MainLayout>
        </Route>


      </Switch>
    </Router>
  )

}