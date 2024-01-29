describe("Home page", () => {
  it("should load home page", () => {
    cy.visit("/");
    cy.title().should("eq", "Dev's ToolBox");
    cy.contains("Developer's Toolbox");
  });

  it("should show a side navbar and footer", () => {
    cy.visit("/");
    cy.get("mat-sidenav").should("exist");
    cy.get("app-footer").should("exist");
  });

  it("should be able to navigate to all pages through the side navbar", () => {
    cy.visit("/");
    cy.fixture("nav-list-items.json").then((navListItems: string[]) => {
      navListItems.forEach((navListItem: string) => {
        cy.get(`[data-testid='nav-item-${navListItem}']`).should("exist").click().then(() => {
          cy.location("pathname").should("eq", `/tools/${navListItem}`);
        });
      });
    });
  });
});
