export const loginPageLocators = {
    usernameField: "#Username",
    passwordField: "#Password",
    logInButton: ".btn"
}

export class LoginPage {

    loginToApplication(username, password){
        cy.loginViaUi(username, password);
    };
}