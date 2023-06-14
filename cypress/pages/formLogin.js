
class formLogin {
    
    elements = {

        loginText: () => cy.get('h2'),
        email: () => cy.get('#email'),
        password: () => cy.get('#password'),
        submitButton: () => cy.get('#submitLoginBtn')

    }

}