import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Content from 'components/layout/Content/Content'
import ViewWrapper from 'components/layout/ViewWrapper/ViewWrapper'

const DashboardView = props => (
  <ViewWrapper title="Home">
    <Content>
      <h1>Welcome to Your Dashboard, </h1>
      <h3>{props.name}</h3>
      <p>
        <Link to="/">Home</Link>
      </p>
    </Content>
  </ViewWrapper>
)

const mapStateToProps = state => ({
    isAuthenticated: state.user.isAuthenticated,
    name: state.user.name
  })

export default connect(mapStateToProps)(DashboardView)