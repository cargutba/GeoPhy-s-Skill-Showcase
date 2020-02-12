class LoginPage {
    private readonly ROOT_SELECTOR: string = '#form_login';
    private readonly EMAIL_INPUT: string = `${this.ROOT_SELECTOR} input[name="email"]`;
    private readonly PASSWORD_INPUT: string = `${this.ROOT_SELECTOR} input[name="password"]`;
    private readonly LOGIN_BUTTON: string = `${this.ROOT_SELECTOR} button[type="submit"]`;
    private readonly LOGOUT_BUTTON: string = `nav > ul > li:nth-child(5)`;

    setUsername(name: string) {
        this.username.setValue(name);
    }

    setPassword(password: string) {
        this.password.setValue(password);
    }

    submitLogin() {
        this.submit.click();
    }

    submitLogout() {
        this.logout.click();
    }

    get username() {
        return $(this.EMAIL_INPUT);
    }

    get password() {
        return $(this.PASSWORD_INPUT);
    }

    get submit() {
        return $(this.LOGIN_BUTTON);
    }

    get flash() {
        return $('#flash').getText();
    }

    get displayLogoutError() {
        return $('div.alert > label').getText();
    }

    get logout() {
        return $(this.LOGOUT_BUTTON);
    }
}

export default new LoginPage();
