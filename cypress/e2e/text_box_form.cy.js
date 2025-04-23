/// <reference types="cypress" />

describe('Text Box Form Test', () => {
  // 👇 This makes Cypress ignore errors from the site itself
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  it('should fill and submit the form correctly', () => {
    // 1. Visit the form URL
    cy.visit('https://demoqa.com/text-box');
  
    // 2. Fill out each field with your own test data
    cy.get('#userName').type('Coulibaly Assetou');
    cy.get('#userEmail').type('cypasetou@gmail.com');
    cy.get('#currentAddress').type('34 Rue Denis Papin');
    cy.get('#permanentAddress').type('34 Avenue Delaforce');
    
    // 3. Click the Submit button
    cy.get('#submit').click()
      
    // 4. Assert that the result shows the same values you typed
    cy.get('#userName').should('have.value', 'Coulibaly Assetou');
    cy.get('#userEmail').should('have.value', 'cypasetou@gmail.com');
    cy.get('#currentAddress').should('have.value', '34 Rue Denis Papin');
    cy.get('#permanentAddress').should('have.value', '34 Avenue Delaforce');
    });
  });
  