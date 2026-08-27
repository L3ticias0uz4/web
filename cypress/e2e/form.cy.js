describe('Formulario',()=>{

    it('teste', ()=>{
        cy.login('4DM@gmail.com', '4DM')
        cy.contains('button','Formulário').should('be.visible').click()

        cy.contains('h1','Consultoria').should('be.visible')

        cy.get('#name').type("Letícia de Souza")
        cy.get('#email').type("Leticia@gmail.com")
        cy.get('#phone').type("11 99998-7654")
        cy.get('#consultancyType').select('In Company')

        cy.contains('label', 'Pessoa Jurídica').find('input[type="radio"]').click().should('be.checked')

        cy.contains('label', 'Pessoa Física').find('input[type="radio"]').should('be.not.checked')

      //  cy.contains('label', 'Udemy').find('input[type=checkbox]').click().should('be.checked')

        const sociais = [
            'Instagram',
            'LinkedIn',
            'Udemy',
            'YouTube',
            'Indicação de Amigo'
                ]
        sociais.forEach((social) => {
            cy.contains('label', social)
            .find('input[type=checkbox]').click()
            .should('be.checked')
        })

        cy.get('input[type="file"').selectFile('./cypress/fixtures/images.jpg' , {force: true})
        cy.contains('span', 'images.jpg').should('be.visible')

        cy.get('#details').type("What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.")

        const Tecnologias = [
            'JavaScript',
            'Python',
            'Java',
            'mySql'
        ]
        
        Tecnologias.forEach((Tecnologias) => {
            cy.get('#technologies').type(Tecnologias + '{enter}')
            .should('be.visible') 
        })

        cy.contains('label', 'Li e aceito os termos de uso *').find('input[type=checkbox]').check().should('be.checked')
        
        cy.contains('button', 'Enviar formulário').click()
        cy.contains('.modal-header', 'Sucesso!')

       

    })

    it.only('Teste2', () => {
    cy.login('4DM@gmail.com', '4DM')
    cy.contains('button','Formulário').should('be.visible').click()
    cy.contains('button', 'Enviar formulário').click()
    cy.contains('Digite nome e sobrenome').should('be.visible')
    cy.contains('Informe um email válido').should('be.visible')
    cy.contains('Você precisa aceitar os termos de uso').should('be.visible')
     

    })
})