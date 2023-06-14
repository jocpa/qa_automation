
class formLogin {
    
    elements = {

        loginText: () => cy.get('h2'),
        email: () => cy.get('#email'),
        password: () => cy.get('#password'),
        submitButton: () => cy.get('#submitLoginBtn')

    }

    typeEmail(email) {
        this.elements.email().type(email)
    }
    typePassword(pass) {
        this.elements.password().type(pass)
    }
    clickSubmit() {
        this.elements.submitButton().click()
    }

}
module.exports = new formLogin();