describe('Patient Management Tests', () => {
    beforeEach(() => {
      cy.login('test@kennect.io', 'Qwerty@1234'); // Create a custom login command for reusability
      cy.visit('/patients'); // Navigate to the patient management page
    });
  
    it('should add a new patient successfully', () => {
      cy.get('[data-cy=add-patient-button]').click();
      cy.get('[data-cy=patient-name]').type('John Doe');
      cy.get('[data-cy=patient-age]').type('35');
      cy.get('[data-cy=patient-gender]').select('Male');
      cy.get('[data-cy=save-button]').click();
  
      // Validate patient is added
      cy.contains('John Doe').should('be.visible');
    });
  
    it('should delete a patient successfully', () => {
      cy.contains('John Doe').parent().find('[data-cy=delete-button]').click();
      cy.get('[data-cy=confirm-delete]').click();
  
      // Validate patient is deleted
      cy.contains('John Doe').should('not.exist');
    });
  });
  