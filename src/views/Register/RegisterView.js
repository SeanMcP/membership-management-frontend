import React from 'react'
import { connect } from 'react-redux'

import Content from 'components/layout/Content/Content'
import ViewWrapper from 'views/Wrapper/ViewWrapper'
import { setUser } from 'actions/index'
import RegisterForm from 'components/home/RegisterForm/RegisterForm'

const RegisterView = props => (
  <ViewWrapper title="Home">
    <Content>
      <RegisterForm />
    </Content>
  </ViewWrapper>
)

export default connect(
  state => ({
    name: state.user.name
  }),
  { setUser }
)(RegisterView)
