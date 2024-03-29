import React from 'react'

import Content from 'components/layout/Content/Content'
import LoginForm from 'components/home/LoginForm/LoginForm'
import ViewWrapper from 'components/layout/ViewWrapper/ViewWrapper'

const HomeView = props => (
  <ViewWrapper title="Home">
    <Content>
      <LoginForm />
    </Content>
  </ViewWrapper>
)

export default HomeView
