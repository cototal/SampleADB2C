# Sample Azure Active Directory B2C(ADB2C) Apps

This is based on the starting templates for .NET Core Web API and `create-react-app`. The B2C configuration is based on the sample projects from the Microsoft docs.

* [JavaScript SPA](https://github.com/Azure-Samples/active-directory-b2c-javascript-msal-singlepageapp)
* [.NET Core Web API](https://github.com/Azure-Samples/active-directory-b2c-dotnetcore-webapi)

## Configuration

In `sample-adb2c-client` add an `.env.local` file with configuration based on your Azure ADB2C settings

```
REACT_APP_B2C_SCOPES=https://[tenant].onmicrosoft.com/api/demo.read
REACT_APP_WEB_API=http://localhost:5000/weatherforecast
REACT_APP_B2C_CLIENT_ID=[guid]
REACT_APP_B2C_POLICY=https://[tenant].b2clogin.com/[tenant].onmicrosoft.com/B2C_1_[signup/signin flow name]
```

In `SampleADB2C.Api` add a `appsettings.Development.json` file:

```json
{
  "B2C": {
    "Policy": "https://[tenant].b2clogin.com/[tenant].onmicrosoft.com/B2C_1_[signup/signin flow name]/v2.0",
    "ClientId": "[guid]"
  },
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft": "Warning",
      "Microsoft.Hosting.Lifetime": "Information"
    }
  }
}
```
