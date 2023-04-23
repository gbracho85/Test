describe('Pruebas en Google', () => {
  beforeEach(() => {
    cy.visit('https://www.google.com/'),{ timeout: 5000 }
  })

  it('Realiza una búsqueda', () => {
    cy.get("#APjFqb").type('Cypress.io{enter}'),{ timeout: 5000 }
  })
})