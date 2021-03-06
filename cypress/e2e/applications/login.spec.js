const user = {
  username: 'rocky',
  password: 'italian stallion',
}

describe('authentication', () => {
  beforeEach(() => cy.visit('/'))

  it('should allow existing users to login', () => {
    cy.getByText('Login')
      .click()
      .getByLabelText('Username')
      .type(user.username)
      .getByLabelText('Password')
      .type(user.password)
      .getByText('Login', {selector: 'button'})
      .click()
      .assertUrl('/')

    cy.getByTestId('username-display').should('contain', user.username)
  })
})
