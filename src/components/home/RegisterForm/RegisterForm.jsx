import React from 'react'
import { Formik } from 'formik'
import { Link } from 'react-router-dom'
import Input from 'components/form/Input/Input'
import Button from 'components/form/Button/Button'
import axios from 'axios'

const RegisterForm = ({ level = 2, ...props }) => {
  const Heading = `h${level}`
  const url = 'http://localhost:3001/users'
  return (
    <div>
      <Heading>Register</Heading>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={async (values, actions) => {
          console.log(values)
          actions.resetForm()
          const payload = {
            name: values.name,
            email: values.email,
            password: values.password
          }
          const user = await axios.post(url, payload)
          console.log(user)
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
        Already have an account? <Link to="/">Login here</Link>.
      </p>
    </div>
  )
}

export default RegisterForm
