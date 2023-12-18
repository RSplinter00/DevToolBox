describe("Home page", () => {
  it("should load home page", () => {
    cy.visit("/");
    cy.title().should("eq", "DevToolBox");
    cy.contains("Developer's Toolbox");
  });

  it("should show a side navbar and footer", () => {
    cy.visit("/");
    cy.get("mat-sidenav").should("be.visible");
    cy.get("app-footer").should("be.visible");
  });

  it("should navigate to base64 encoder page when selected", () => {
    cy.visit("/");
    cy.get("[data-testid='nav-item-base64-encoder']").should("exist").click().then(() => {
      cy.url().should("include", "/tools/base64-encoder");
    });
  });
});
