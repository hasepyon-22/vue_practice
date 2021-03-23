$(() => {
  const init = () => {
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
        console.log(doc.data());
        records.push(doc.data());
      })
    });

    $('#post').on('click', function() {
      var user = {
        "name": $('#name').val(),
        "age": $('#age').val()
      };
      if (user.name == "" || user.age == "") return;
      // records.push(user);
      users.add(user)
        .then(docRef => {
          console.log(docRef);
        }).catch(error => {
          console.log(error);
        });
      $('#name').val("");
      $('#age').val("");
    });

    // Vue.js
    var app = new Vue({
      el: '#app',
      data: {
        users: records,
        show: true
      }
    });
  };

  $(document).ready(() => {
    init();
  });
});
