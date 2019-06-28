import React from 'react'
import { connect } from 'react-redux'
import { Formik } from 'formik'
import { Link, withRouter } from 'react-router-dom'

import Input from 'components/form/Input/Input'
import Button from 'components/form/Button/Button'
import { login } from 'actions'

const LoginForm = ({ level = 2, ...props }) => {
  const Heading = `h${level}`
  return (
    <div>
      <Heading>Login</Heading>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={async (values, actions) => {
          const authenticated = await props.login(values)
          actions.resetForm()
          if (authenticated) {
            props.history.push('/dashboard')
          }
        }}
        render={props => (
          <form onSubmit={props.handleSubmit}>
            <Input name="email" label="Email" />
            <Input name="password" label="Password" type="password" />
            <Button type="submit">Login</Button>
          </form>
        )}
      />
      <p>
        <Link to="/register">Or register</Link>
      </p>
    </div>
  )
}

export default withRouter(connect(
  undefined,
  { login }
)(LoginForm))
