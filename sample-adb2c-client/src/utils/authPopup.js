import { UserAgentApplication } from "msal";
import { msalConfig, loginRequest, tokenRequest } from "./authConfig";
import { callApiWithAccessToken } from "./api";
import apiConfig from "./apiConfig";

const myMSALObj = new UserAgentApplication(msalConfig);

export async function signIn() {
    const loginResponse = await myMSALObj.loginPopup(loginRequest);
    console.log(`id_token acquired at: ${new Date().toString()}`);
    console.log(loginResponse);

    if (myMSALObj.getAccount()) {
        console.log(`User ${myMSALObj.getAccount().name} logged in`);
    }
}

export function logout() {
    myMSALObj.logout();
}

export async function getTokenPopup(request) {
    try {
        const response = await myMSALObj.acquireTokenSilent(request);
        return response;
    } catch(err) {
        console.log('Silent token acquisition failed. Acquiring token using popup');
        console.log(err);
    }
    const tokenResponse = await myMSALObj.acquireTokenPopup(request);
    console.log(`access_token acquired at: ${new Date().toString()}`);
    return tokenResponse;
}

export async function passTokenToApi() {
    const tokenResponse = await getTokenPopup(tokenRequest);
    console.log(`access_token acquired at: ${new Date().toString()}`);
    callApiWithAccessToken(apiConfig.webApi, tokenResponse.accessToken);
}
