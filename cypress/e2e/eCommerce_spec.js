import HomePage from "../support/PageObjects/HomePage";
import LoginPage from "../support/PageObjects/LoginPage";

// calling describe(name of suite, function)
describe("Test Suite", () => {
  it("login test", () => {
    // create new instance of HomePage
    const homePage = new HomePage();
    const loginPage = new LoginPage();

    cy.visit("https://demo.nopcommerce.com/");

    // calling the getLoginButton method on the class
    // the getLoginButton method returns an HTML element
    // we click on the HTML element
    homePage.getLoginButton().click();
    loginPage.login("test@gmail.com", "pw123");
  });
});
