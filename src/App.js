import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import GuestLayout from './layouts/GuestLayout'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home/Home.comp'
import Main from './pages/Main/Main.comp'

// articles CRUD
import ArticleList from './pages/Articles/ArticleList/ArticleList'
import ArticleAdd from './pages/Articles/ArticleAdd/ArticleAdd'

export default () => {

  return (
    <Router>
      <Switch>
        <Route path='/login' component={Home} />

        <Route path='/admin/:path?' exact>
          <GuestLayout>
            <Switch>
              <Route path='/admin' exact component={Main} />
              <Route path='/admin/setting' component={Main} />
            </Switch>
          </GuestLayout>
        </Route>

        <Route>
          <MainLayout>
            <Switch>
              <Route path='/articles/add' component={ArticleAdd} />
              <Route path='/articles' component={ArticleList} />
              <Route path='/' component={Home} />
            </Switch>
          </MainLayout>
        </Route>


      </Switch>
    </Router>
  )

}