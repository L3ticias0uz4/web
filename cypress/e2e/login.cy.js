describe('template login', () => {
  it('login inválido', () => {
     cy.viewport(1440, 900)
    cy.visit('http://localhost:3000')
    cy.get('#email').type('email@email.com')
    cy.get('#password').type('senha')
    cy.contains('button', 'Entrar').click()
    cy.contains('Acesso negado! Tente novamente.')

  })

//    it('login Válido', () => {
//     cy.viewport(1440, 900)
//     cy.visit('http://localhost:3000')
//     cy.get('#email').type('4DM@gmail.com')
//     cy.get('#password').type('4DM')
//     cy.contains('button', 'Entrar').click()
// })

  it('Campo em branco',() => {
    cy.viewport(1440, 900)
    cy.visit('http://localhost:3000')
    cy.get('#email').type('4DM@gmail.com')
    cy.get('#password')
    cy.contains('button', 'Entrar').click('')
    cy.contains('Você precisa de uma senha para entrar!')
  })

  it('Senha incorreta',() => {
    cy.viewport(1440, 900)
    cy.visit('http://localhost:3000')
    cy.get('#email').type('4DM@gmail.com')
    cy.get('#password').type('123')
    cy.contains('button', 'Entrar').click('')
    cy.contains('Acesso negado! Tente novamente.')
})
})
