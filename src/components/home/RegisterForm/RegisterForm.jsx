import React from 'react'
import { connect } from 'react-redux'
import { Formik } from 'formik'
import { Link } from 'react-router-dom'
import Input from 'components/form/Input/Input'
import Button from 'components/form/Button/Button'
import { register } from 'actions'

const RegisterForm = ({ level = 2, ...props }) => {
  const Heading = `h${level}`
  return (
    <div>
      <Heading>Register</Heading>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={async (values, actions) => {
          props.register(values)
          actions.resetForm()
        }}
        render={props => (
          <form onSubmit={props.handleSubmit}>
            <Input name="name" label="Name" />
            <Input name="email" label="Email" />
            <Input name="password" label="Password" type="password" />
            <Button type="submit">Register</Button>
          </form>
        )}
      />
      <p>
        <Link to="/">Or login</Link>.
      </p>
    </div>
  )
}

export default connect(
  undefined,
  { register }
)(RegisterForm)
