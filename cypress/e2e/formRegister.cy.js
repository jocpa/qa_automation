
import formRegister, { termsClick } from "../pages/formRegister";

///<reference types="cypress" />

describe('Form register test', () => {
    const url = 'https://qa-automation-practice.netlify.app/register.html'

    beforeEach( () => {
        cy.visit(url)
    } )

    it('should create an user correctly', () => {
        
        formRegister.typeFirstName('Gwen')
        formRegister.typeLastName('Staci')
        formRegister.typePhoneNumber('22121404')
        formRegister.selectCountry('United States of America')
        formRegister.typeEmail('gwen@gwen.com')
        formRegister.typePassword('loveUMiles')
        formRegister.termsClick()
        formRegister.clickRegister()
        formRegister.elements.alertMessage().should('exist')
    })

})