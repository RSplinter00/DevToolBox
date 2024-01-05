import {ChangeInfo} from "../../../src/app/model/change-info";

type DiffViewerData = {
  original: string,
  updated: string,
  changes: ChangeInfo[]
}

describe("Diff Viewer Page", () => {
  it("should show the Diff Viewer page", () => {
    cy.visit("/tools/diff-viewer");
    cy.title().should("eq", "Diff Viewer | Dev's ToolBox");
    cy.get("[data-testid='original-input']").should("exist");
    cy.get("[data-testid='original-input'] [data-testid='header-text']").should("have.text", "Original:");
    cy.get("[data-testid='updated-input']").should("exist");
    cy.get("[data-testid='updated-input'] [data-testid='header-text']").should("have.text", "Updated:");
    cy.get("mat-card").should("exist");
  });

  it("should show changes between two strings", () => {
    cy.fixture("diff-viewer.json").then(data => {
      data.forEach((item: DiffViewerData) => {
        cy.visit("/tools/diff-viewer");
        cy.get("[data-testid='original-input']").type(item.original);
        cy.get("[data-testid='updated-input']").type(item.updated);
        cy.get("#output-viewport span").should("have.length", item.changes.length).then((children: JQuery) => {
          children.get().forEach((child: HTMLElement, idx: number) => {
            expect(child.innerHTML).to.eq(item.changes[idx].text);
            expect(child.className).to.contain(item.changes[idx].className);
          });
        });
      });
    });
  });
});
