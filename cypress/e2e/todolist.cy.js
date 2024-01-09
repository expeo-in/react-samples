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
