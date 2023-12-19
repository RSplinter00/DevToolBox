describe("Home page", () => {
  it("should load home page", () => {
    cy.visit("/");
    cy.title().should("eq", "DevToolBox");
    cy.contains("Developer's Toolbox");
  });

  it("should show a side navbar and footer", () => {
    cy.visit("/");
    cy.get("mat-sidenav").should("exist");
    cy.get("app-footer").should("exist");
  });

  it("should navigate to base64 encoder page when selected", () => {
    cy.visit("/");
    cy.get("[data-testid='nav-item-base64-encoder']").should("exist").click().then(() => {
      cy.location("pathname").should("eq", "/tools/base64-encoder");
    });
  });
});
