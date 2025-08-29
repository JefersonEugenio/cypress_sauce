Cypress.Commands.add('sessionLogin', () => {
    cy.visit('/')
    cy.get('#password').type(Cypress.env('user_password'))
})

Cypress.Commands.add('userLogin', (username) => {
    cy.get('#user-name').clear().type(username)
    cy.get('#login-button').click()
})