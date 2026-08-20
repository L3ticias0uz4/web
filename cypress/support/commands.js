Cypress.Commands.add('login', (email, password) => {
    cy.viewport(1440, 900)
    cy.visit('http://localhost:3000/')
    cy.get('#email').type(email)
    cy.get('#password').type(password)
    cy.contains('button','Entrar').click()
    cy.contains('Dashboard').should('be.visible')
})