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
function getData() {
  firebase.database().ref("/").on('value', function(snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) {
    childKey  = childSnapshot.key;
    councellor_names = childKey;
    row = "<div class='output' id='"+councellor_names+"' onclick='redirectToCouncellorDetails(this.id)' >"+ councellor_names + "</div><hr>";
    document.getElementById("output").innerHTML += row;
});});}
getData();
function redirectToCouncellorDetails(name)
{
  console.log(name);
  localStorage.setItem("counsellor_name", name);
    window.location = "councellordetails.html";
}
function go_back() {
  window.location = "index.html"
}