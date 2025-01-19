```javascript
// Incorrect usage of Firebase's onAuthStateChanged
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log('User signed in:', uid);
    // ...
  } else {
    // User is signed out
    console.log('User signed out');
    // Redirect to login page (this is often missing)
  }
});
```