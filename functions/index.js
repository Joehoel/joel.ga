const functions = require("firebase-functions");
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
exports.createUserDoc = functions.auth.user().onCreate(user => {
	console.log(user);
});
