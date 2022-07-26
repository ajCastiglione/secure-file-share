/// <reference types="cypress" />
import "cypress-real-events/support";

describe("File upload", () => {
  it("should upload a file", () => {
    cy.visit("/");
    // Upload example file.
    cy.get('input[type="file"]').selectFile("cypress/fixtures/example.png");
    cy.get('button[type="submit"]').click();
    // Ensure the correct UI is displaying.
    cy.get('[data-cy="secure-link-el"]').contains(/Copy this link to share the document/i);
    // Click the button to copy the link.
    cy.get('[data-cy="secure-link-el"]').realClick();
    // Check the clipboard for a link containing the word file.
    cy.window().then((win) => {
      win.navigator.clipboard.readText().then((text) => {
        expect(text).to.contain("file");
      });
    });
  });
});
