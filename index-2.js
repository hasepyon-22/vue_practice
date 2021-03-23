var firebaseConfig = {
  apiKey: "AIzaSyAt_tuHBRJX5ZhPQGwEv8x2vfMZP9s-BM4",
  authDomain: "js-firebase-21336.firebaseapp.com",
  databaseURL: "https://js-firebase-21336-default-rtdb.firebaseio.com",
  projectId: "js-firebase-21336",
  storageBucket: "js-firebase-21336.appspot.com",
  messagingSenderId: "93597046969",
  appId: "1:93597046969:web:3dfdf5763e42be245b2368"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//データの読み込み
let db = firebase.firestore();
let users = db.collection('users');

let records = []
users.onSnapshot(function (querySnapshot) {
  records.splice(0);
  querySnapshot.forEach(function (doc) {
    records.push(doc.data());
  })
});

var app = new Vue({
  el: '#app',
  data: {
    users: records,
    name: null,
    age: null,
    error: null
  },
  methods: {
    addToUsers: function () {
      if (app.name && app.age) {
        newUser = {
          'name': app.name,
          'age': app.age
        }
        users.add(newUser)
          .then(docRef => {
            console.log(docRef);
          }).catch(error => {
            console.log(error);
          });
      } else {
        this.error = '入力欄を埋めてください'
      }
    }
  }
}
);
