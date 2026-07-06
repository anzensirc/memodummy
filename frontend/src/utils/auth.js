const APP_PIN = "888000";

const AUTH_KEY = "memo_authenticated";

export function verifyPin(pin) {

    return pin === APP_PIN;

}

export function login() {

    sessionStorage.setItem(AUTH_KEY, "true");

}

export function logout() {

    sessionStorage.removeItem(AUTH_KEY);

}

export function isAuthenticated() {

    return sessionStorage.getItem(AUTH_KEY) === "true";

}