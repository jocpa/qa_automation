
///<reference types="cypress" />

describe('template spec', () => {
  const url = 'https://qa-automation-practice.netlify.app/'

  it('Smoke Test', () => {
    cy.visit(url)
    cy.get('.display-4').should('exist')
  })

})