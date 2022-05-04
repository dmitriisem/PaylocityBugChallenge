const loginPageLocators = {
    usernameField: "#Username",
    passwordField: "#Password",
    logInButton: ".btn"
}

export class LoginPage {

    loginToApplication(username, password){
        cy.get(loginPageLocators.usernameField).type(username);
        cy.get(loginPageLocators.passwordField).type(password);
        cy.get(loginPageLocators.logInButton).click();
    }
}