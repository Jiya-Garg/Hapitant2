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
councellor_name = localStorage.getItem("councellor_names");
function getData() { 
   firebase.database().ref("/"+councellor_name).on('value', 
   function(snapshot) { 
     document.getElementById("details").innerHTML = ""; 
     snapshot.forEach(function(childSnapshot) {
        childKey  = childSnapshot.key + " : ";
        childData = childSnapshot.val() ; 
        all_details = "<h4 style = 'font-size:25px; text-align:center;margin-top:50px;'>"+childKey+childData+"</h4>";
        if(childKey != "purpose") {
        details = all_details;
   
  
        document.getElementById("details").innerHTML += details;

        console.log(details);
        }
 
});
});

}
getData();
function go_back() {
    window.location = "index.html"
}
