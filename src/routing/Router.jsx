import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from 'components/layout/Header/Header'
import BrandView from 'views/Brand/BrandView'
import HomeView from 'views/Home/HomeView'
import RegisterView from 'views/Register/RegisterView'
import DashboardView from 'views/Dashboard/DashboardView'

export default () => (
  <>
    <Router>
      <Header />
      <Route path="/" exact component={HomeView} />
      <Route path="/register" component={RegisterView} />
      <Route path="/brand" component={BrandView} />
      <Route path="/dashboard" component={DashboardView} />
    </Router>
  </>
)
