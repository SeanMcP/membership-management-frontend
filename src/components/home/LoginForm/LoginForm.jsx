import React from 'react'
import { Formik } from 'formik'
import { Link } from 'react-router-dom';
import Input from 'components/form/Input/Input'
import Button from 'components/form/Button/Button'
import axios from "axios";

const LoginForm = ({ level = 2, ...props }) => {
  const Heading = `h${level}`
  const url = 'http://localhost:3001/users/login'
  return (
    <div>
      <Heading>Login</Heading>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={async (values, actions) => {
          console.log(values)
          actions.resetForm()
          const payload = {
            email: values.email,
            password: values.password
          }
          const user = await axios.post(url, payload)
          console.log(user)
        }}
        render={props => (
          <form onSubmit={props.handleSubmit}>
            <Input name="email" label="Email" />
            <Input name="password" label="Password" type="password" />
            <Button type="submit">Login</Button>
            <Link to="/register">
             <Button>Register</Button>
            </Link>
          </form>
        )}
      />
      
    </div>
  )
}

export default LoginForm
