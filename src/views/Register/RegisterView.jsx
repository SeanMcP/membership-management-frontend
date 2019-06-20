import React from 'react'

import Content from 'components/layout/Content/Content'
import RegisterForm from 'components/register/RegisterForm/RegisterForm'
import ViewWrapper from 'components/layout/ViewWrapper/ViewWrapper'

const RegisterView = props => (
  <ViewWrapper title="Register">
    <Content>
      <RegisterForm />
    </Content>
  </ViewWrapper>
)

export default RegisterView
