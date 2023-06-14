import formLogin from "../pages/formLogin";

///<reference types="cypress" />

describe('Form login test', () => { 
    const url = 'https://qa-automation-practice.netlify.app/login.html'
    
    it('should login without any problems', () => {
        cy.visit(url)
        cy.url().should('eq', url)
        cy.location('protocol').should('contains', 'http')
        cy.location('pathname').should('eq', '/login.html')

        formLogin.elements.loginText().invoke('text').should('eq','Login Form')
        formLogin.typeEmail('gwen@gwen.com')
        formLogin.typePassword('loveUMiles')
        formLogin.clickSubmit()
    })

})