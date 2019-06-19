import React from 'react'
import { connect } from 'react-redux'

import Content from 'components/layout/Content/Content'
import ViewWrapper from 'views/Wrapper/ViewWrapper'
import { setUser } from 'actions/index'
import LoginForm from 'components/home/LoginForm/LoginForm'

const HomeView = props => (
  <ViewWrapper title="Home">
    <Content>
      <LoginForm />
    </Content>
  </ViewWrapper>
)

export default connect(
  state => ({
    name: state.user.name
  }),
  { setUser }
)(HomeView)
