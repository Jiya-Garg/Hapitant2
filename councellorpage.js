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

  
 
function submit() {
    age = document.getElementById("age").value;
    exp = document.getElementById("experience").value;
    phone_number = document.getElementById("phone_number").value;
    email_id = document.getElementById("email_id").value;
    councellor_names = document.getElementById("name").value;
    firebase.database().ref("/").child(councellor_names).update({
        Age: age,
        Experience : exp,
        PhoneNumber : phone_number,
        Email_ID : email_id
    });
    localStorage.setItem("councellor_names",councellor_names)
    document.getElementById("details").innerHTML = "";
window.alert("You details have been submitted! You shall recieve clients soon!")

}   


function go_back() {
    window.location = "index.html"
}