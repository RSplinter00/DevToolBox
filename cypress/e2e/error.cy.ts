describe("Error Page", () => {
  it("should show error page", () => {
    cy.visit("/test");
    cy.get("h1").contains("404");
    cy.get("p").contains("Unable to find the page");
    cy.get("#redirects-container button").should("have.length", 2);
    cy.get("app-footer").should("exist");
  });

  it("should redirect to home page on 'Home' click", () => {
    cy.visit("/test");
    cy.get("[data-testid='home-btn']").should("exist").click().then(() => {
      cy.location("pathname").should("eq", "/");
    });
  });

  it("should redirect to base64 encoder on 'Tools' clicked", () => {
    cy.visit("/test");
    cy.get("[data-testid='tools-btn']").should("exist").click().then(() => {
      cy.location("pathname").should("eq", "/tools/base64-encoder");
    });
  });
});
