describe('Inputs and checked TOS', () => { 
    it('can navigate to the site', () => { 
        cy.visit('http://localhost:3002/')
        cy.url().should('include', 'http://localhost:3002/')
    })
 
    it('can get name input and type a name in it', () => { 
        cy.get('input[name=name]')
            .type('Lauren Emick')
            .should('have.value', 'Lauren Emick')
    })

    it('can get email input and type an email in it', () => { 
        cy.get('input[name=email]')
            .type('lauren@lauren.com')
            .should('have.value', 'lauren@lauren.com')
    })

    it('can get password input and type a password in it', () => { 
        cy.get('input[name=password]')
            .type('laurenlauren')
            .should('have.value', 'laurenlauren')
    })

    it('check if user can check the terms of service box', () => {
        cy.get('input[name=terms]').click()
    })

    it('submit button should be enabled', () => { 
        cy.get('button#submitBtn').should('be.enabled')
    })

    it('can submit inputs', () => {
        cy.get('button#submitBtn').click()

        cy.get('input[name=name]').should('be.empty')
        cy.get('input[name=email]').should('be.empty')
        cy.get('input[name=password]').should('be.empty')
    })

})

