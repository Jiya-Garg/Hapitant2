var firebaseConfig = {
    apiKey: "AIzaSyBeUlB-CCrCIuRp07mNS-6YdxrIZUGg98A",
    authDomain: "hapitant-453ee.firebaseapp.com",
    databaseURL: "https://hapitant-453ee-default-rtdb.firebaseio.com",
    projectId: "hapitant-453ee",
    storageBucket: "hapitant-453ee.appspot.com",
    messagingSenderId: "935797742937",
    appId: "1:935797742937:web:99708da98e72cb4c1a4048",
    measurementId: "G-8KVTT3Y13Q"
  };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function findtips() {
    window.location = "tips_for_users.html"
}
function findmusic() {
    window.location = "music_for_users.html"
}
function findcouncellors() {
    window.location = "councellors_for_users.html"
}
function hitworstperson() {
    window.location = "hit_least_favorite_person_for_users.html"
}
function go_back() {
    window.location = "index.html"
}