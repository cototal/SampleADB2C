const b2cPolicies = {
    names: {
        signUpSignIn: "B2C_1_signup_signin"
    },
    authorities: {
        signUpSignIn: {
            authority: process.env.REACT_APP_B2C_POLICY
        }
    }
}

export default b2cPolicies;
