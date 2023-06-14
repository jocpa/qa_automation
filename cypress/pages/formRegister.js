
class formRegister {

    elements = {

        firstName: () => cy.get('#firstName'),
        lastName: () => cy.get('#lastName'),
        phoneNumber: () => cy.get('#phone'),
        country: () => cy.get('#countries_dropdown_menu'),
        email: () => cy.get('#emailAddress'),
        password: () => cy.get('#password'),
        termns: () => cy.get('#exampleCheck1'),
        registerBtn: () => cy.get('#registerBtn'),
        alertMessage: () => cy.get('#message')

    }

    typeFirstName(name) {
        this.elements.firstName().type(name);
    }
    typeLastName(lastName) {
        this.elements.lastName().type(lastName)
    }
    typePhoneNumber(phone) {
        this.elements.phoneNumber().type(phone)
    }
    selectCountry(country) {
        this.elements.country().select(country)
    }
    typeEmail(email) {
        this.elements.email().type(email)
    }
    typePassword(pass) {
        this.elements.password().type(pass)
    }
    termsClick() {
        this.elements.termns().click()
    }
    clickRegister() {
        this.elements.registerBtn().click()
    }

}
module.exports = new formRegister();