import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import HomeView from 'views/Home/HomeView'
import RegisterView from 'views/Register/RegisterView'

export default () => (
    <Router>
        <Route path="/" exact component={HomeView} />
        <Route path="/register" component={RegisterView} />
    </Router>
)
