// This snippet file was generated by processing the source file:
// ./auth-next/email-link-auth.js
//
// To make edits to the snippets in this file, please edit the source

// [START auth_email_link_reauth_modular]
import { getAuth, reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";

// Construct the email link credential from the current URL.
const credential = EmailAuthProvider.credentialWithLink(
  email, window.location.href);

// Re-authenticate the user with this credential.
const auth = getAuth(firebaseApp);
reauthenticateWithCredential(auth.currentUser, credential)
  .then((usercred) => {
    // The user is now successfully re-authenticated and can execute sensitive
    // operations.
  })
  .catch((error) => {
    // Some error occurred.
  });
// [END auth_email_link_reauth_modular]