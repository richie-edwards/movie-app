class LoginPage {
  login(email, pw) {
    cy.get("#Email").type(email);
    cy.get("#Password").type(pw);
    cy.get("[value='Log in']").click();
  }
}

export default LoginPage;
