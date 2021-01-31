import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import GuestLayout from './layouts/GuestLayout'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home/Home.comp'

export default () => {

  return (
    <Router>
      <Switch>
        <Route path='/login' component={Home} />

        <Route path='/admin/:path?' exact>
          <GuestLayout>
            <Switch>
            </Switch>
          </GuestLayout>
        </Route>

        <Route>
          <MainLayout>
            <Switch>
              {/* <Route path='/articles' component={ArticleList} /> */}
              <Route path='/' component={Home} />
            </Switch>
          </MainLayout>
        </Route>


      </Switch>
    </Router>
  )

}