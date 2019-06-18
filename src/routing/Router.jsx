import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import HomeView from 'views/Home/HomeView'

export default () => (
    <Router>
        <Route path="/" exact component={HomeView} />
    </Router>
)
