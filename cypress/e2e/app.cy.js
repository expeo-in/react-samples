it("should display existing todo", () => {
  cy.visit("http://localhost:3000/");
  cy.contains("Buy Veg").should("exist");
});

it("should display newtodo when added", () => {
  cy.visit("http://localhost:3000/");
  cy.get("input").type("Learn React");
  cy.contains("Add").click();
  cy.contains("Learn React").should("exist");
});

describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/");
    cy.get("h2").should("have.text", "Counter");

    cy.get("p").should("have.text", "0");
    cy.contains("Increment").click();

    cy.get("p").should("have.text", "1");

    cy.contains("Increment").click();
    cy.get("p").should("have.text", "2");
  });
});
