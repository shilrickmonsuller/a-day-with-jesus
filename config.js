/* A Day With Jesus — settings for Google sign-in and shared groups.
   Follow SETUP-GOOGLE-SIGN-IN.md, then paste your values between the quotes.
   Leave the placeholders as they are to use the app without sign-in. */
window.ADWJ_CONFIG = {
  // Step 4 of the guide: OAuth client ID (ends with .apps.googleusercontent.com)
  googleClientId: "PASTE-YOUR-CLIENT-ID-HERE",

  // Step 8 of the guide: Firebase web app settings (for Prayer Meetings and shared Bible Studies)
  firebase: {
    apiKey: "PASTE-FIREBASE-API-KEY",
    authDomain: "your-project-id.firebaseapp.com",
    projectId: "your-project-id",
    appId: "PASTE-FIREBASE-APP-ID"
  }
};
