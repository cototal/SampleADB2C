import apiConfig from "./apiConfig";
import b2cPolicies from "./policies";

export const msalConfig = {
    auth: {
        clientId: process.env.REACT_APP_B2C_CLIENT_ID,
        authority: b2cPolicies.authorities.signUpSignIn.authority,
        validateAuthority: false
    },
    cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: false
    }
};

export const loginRequest = {
    scopes: ["openid", "profile"]
};

export const tokenRequest = {
    scopes: apiConfig.b2cScopes
};
