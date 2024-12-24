describe('Login Page Tests', () => {
    beforeEach(() => {
      cy.visit('/'); // Visits the base URL configured in Cypress
    });
  
    it('should login successfully with valid credentials', () => {
      cy.get('[data-cy=username]').type('test@kennect.io'); // Replace with the actual selector
      cy.get('[data-cy=password]').type('Qwerty@1234'); // Replace with the actual selector
      cy.get('[data-cy=login-button]').click();
  
      // Validate successful login
      cy.url().should('include', '/dashboard'); // Ensure redirection to the dashboard
      cy.contains('Welcome').should('be.visible'); // Verify a welcome message or dashboard content
    });
  
    it('should display an error for invalid login credentials', () => {
      cy.get('[data-cy=username]').type('invalid@kennect.io');
      cy.get('[data-cy=password]').type('WrongPassword');
      cy.get('[data-cy=login-button]').click();
  
      // Validate error message
      cy.contains('Invalid username or password').should('be.visible');
    });
  });
  