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

        const Tecnologias = [
            'JavaScript',
            'Python',
            'Java',
            'mySql'
        ]
        
        Tecnologias.forEach((Tecnologias) => {
            cy.get('#technologies').type(Tecnologias+'{enter}');
        });

    })
})