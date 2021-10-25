export const msalConfig = {
    auth: {
      clientId: "d497ec66-91b4-4f89-9fa6-ef0220ddc826",
      authority: "https://login.microsoftonline.com/marketingai.io",
      redirectUri: "https://sankar-azure-activedirectory.azurewebsites.net/",
    },
    cache: {
      cacheLocation: "sessionStorage", // This configures where your cache will be stored
      storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
  };
  
  // Add scopes here for ID token to be used at Microsoft identity platform endpoints.
  export const loginRequest = {
   scopes: ["User.Read"]
  };
  
  // Add the endpoints here for Microsoft Graph API services you'd like to use.
  export const graphConfig = {
      graphMeEndpoint: "https://graph.microsoft.com/User.Read"
  };
  
