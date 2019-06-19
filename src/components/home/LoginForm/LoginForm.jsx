import React from 'react'
import { Formik } from 'formik'
import Input from 'components/form/Input/Input'
import Button from 'components/form/Button/Button'

const LoginForm = ({ level = 2, ...props }) => {
  const Heading = `h${level}`
  return (
    <div>
      <Heading>Login</Heading>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values, actions) => {
          console.log(values)
          actions.resetForm()
        }}
        render={props => (
          <form onSubmit={props.handleSubmit}>
            <Input name="email" label="Email" />
            <Input name="password" label="Password" type="password" />
            <Button type="submit">Login</Button>
          </form>
        )}
      />
    </div>
  )
}

export default LoginForm
