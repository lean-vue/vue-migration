describe("Login Flow Test", () => {
  it("Visits the login page", () => {
    cy.visit("/plugins/validate");
    cy.contains("h2", "User Anmeldung");
    cy.get(".user-view").should("not.exist");
    cy.get("input[name=account]").type("Klaus");
    cy.get("input[name=email]").type("klaus@egal.de");
    cy.get(".login-frm button[type=submit]").click();
    cy.get(".user-view").should("exist");
    cy.contains(".user-view", "Hallo Klaus");
  });
});
