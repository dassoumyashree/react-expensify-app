import * as firebase from 'firebase'; // takes all named exports and dumps them in a new var. 
// called firebase

 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket:process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  // creating an instance of provider (google provider) to authenticate with (google)
  // setting up firebase to authenticate with google
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export { firebase, googleAuthProvider, database as default };



  
  // database.ref('expenses').on('child_removed', (snapshot) => {
  //   console.log(snapshot.key, snapshot.val());
  // });

  // database.ref('expenses').on('child_changed', (snapshot) => {
  //   console.log(snapshot.key, snapshot.val());
  // });

  // database.ref('expenses').on('child_added', (snapshot) => {
  //   console.log(snapshot.key, snapshot.val());
  // });

  // database.ref('expenses').push({
  //   description: 'Rent 4',
  //   note: 'jkkhkhk',
  //   amount: 109500,
  //   createdAt: 988786876763
  // });

//   database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses); 
//     });

//   database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses); 
//     });

  



//   database.ref('notes').push({
//       title: 'To Do',
//       body: 'Go for a run'
//   });

//   database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'Angular, Python'
// });

// database.ref('notes/-MHXyCv3KgJlXdBmVon2').remove();

  // const firebaseNotes = {
  //     notes: {
  //          dgdgfg: {
  //              title: 'my title',
  //              body: 'this is body'
  //          },
  //          jyggjgjg: {
  //           title: 'my title 2',
  //           body: 'this is body 2'
  //          }
  //     }
  // }

  // const notes = [{
  //   id: '12',
  //   title: 'First note!',
  //   body: 'This is my note'
  // }, {
  //   id: '761ase',
  //   title: 'Another note!',
  //   body: 'This is my note'
  // }];

//   database.ref('notes').set(firebaseNotes);

//   const onValueChange = database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
//   }, (e) => {
//       console.log('Error with data fetching', e);
//   });

//   setTimeout(() => {
//     database.ref('age').set(29);
//   }, 3500);

//   setTimeout(() => {
//     database.ref().off('value', onValueChange);
//   }, 7000);

//   setTimeout(() => {
//     database.ref('age').set(30);
//   }, 10500);
//   database.ref('location/city')
//     .once('value') 
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e);
//     });

//   database.ref().set({
//     name: 'Soumyashree Das',
//     age: 26,
//     stressLevel: 6,
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Kolkata',
//         country: 'India'
//     }
//   }).then(() => {
//       console.log('Data is saved!');
//   }).catch((e) => {
//       console.log('This failed.', e);
//   }); //getting ref. to the root of our db 



//   database.ref().update({
//       stressLevel: 9,
//       'job/company': 'Amazon',
//       'location/city': 'Seattle'
//   });
// database.ref('isSingle').set(null)

// database.ref()
//     .remove()
//     .then(() => {
//         console.log('Remove successful')
//     }).catch((e) => {
//         console.log('Remove failed', e)
//     })






// //   database.ref().set('This is my data');

// // database.ref('age').set(27);
// // database.ref('location/city').set('New York');

// database.ref('attributes').set({
//     height: 73,
//     weight: 150
// }).then(() => {
//     console.log('Second set call worked');
// }).catch((e) => {
//     console.log('Things didnt work for the second error', e);
// });










// import * as expensesActions from '../actions/expenses';
// expensesActions.addExpense