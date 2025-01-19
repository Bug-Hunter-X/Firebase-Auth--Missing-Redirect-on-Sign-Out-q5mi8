# Firebase Authentication Bug: Missing Sign-Out Redirect

This repository demonstrates a common error when using Firebase's `onAuthStateChanged` method. The provided code snippet correctly handles user sign-in, but omits a crucial step: redirecting the user to a login page when they sign out.

The `bug.js` file showcases the incorrect implementation, while `bugSolution.js` provides a corrected version. This bug can lead to unexpected behavior and security vulnerabilities if not addressed properly.