
   it('Campos em branco', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#email')
    cy.get('#password')
    cy.contains('button','Entrar').click()
     cy.contains('Ei, não esqueça de digitar seu email').and('have.css','color','rgb(248, 113, 113)')
     cy.contains('Você precisa de uma senha para entrar! 🔒')
    
  })

  it('Login inválido', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#email').type('email@gmail.com')
    cy.get('#password').type('senha')
    cy.contains('button','Entrar').click()
    cy.contains('Acesso negado! Tente novamente.')
  })

 

  it('senha invalida', () => {
   cy.visit('http://localhost:3000/')
    cy.get('#email').type('4DM@gmail.com')
    cy.get('#password').type('senha')
    cy.contains('button','Entrar').click()
     cy.contains('Acesso negado! Tente novamente.')
    
  })

   it('Login válido', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#email').type('4DM@gmail.com')
    cy.get('#password').type('4DM')
    cy.contains('button','Entrar').click()
    cy.contains('Dashboard')
  })
