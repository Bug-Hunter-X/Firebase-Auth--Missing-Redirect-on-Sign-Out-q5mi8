```javascript
// Correct usage of Firebase's onAuthStateChanged with redirect
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    // User is signed in
    const uid = user.uid;
    console.log('User signed in:', uid);
    // Redirect to app content
    window.location.href = '/app'; // Or your app's main route
  } else {
    // User is signed out
    console.log('User signed out');
    // Redirect to login page
    window.location.href = '/login'; // Or your login route
  }
});
```