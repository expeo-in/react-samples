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
