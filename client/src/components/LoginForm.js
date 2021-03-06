import React from 'react'
import Form, { FieldContainer, FormButton, LinkButton } from '../common/Form'
import { Input, Label, ErrorMessage } from '../common/Inupt'

function LoginForm({ onSubmit, error = {} }) {
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault()
        const { username, password } = e.target.elements
        const auth = {
          username: username.value,
          password: password.value,
        }
        onSubmit(auth)
      }}
    >
      <FieldContainer>
        <Label htmlFor="username">Username</Label>
        <Input id="username" type="text" />
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" />
        {error && (
          <ErrorMessage>Your username or password doesn’t match.</ErrorMessage>
        )}
      </FieldContainer>
      <FormButton stretch type="submit">
        Login
      </FormButton>
      <LinkButton inverse stretch href="/signup">
        Sign up
      </LinkButton>
    </Form>
  )
}

export default LoginForm
