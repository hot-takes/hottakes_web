// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCT089RawQWJitFPxrTFBXjP1tz45VA-rg",
    authDomain: "hottakes-social-web.firebaseapp.com",
    projectId: "hottakes-social-web",
    storageBucket: "hottakes-social-web.appspot.com",
    messagingSenderId: "125167417456",
    appId: "1:125167417456:web:24eb1a70032aa6744f5cb5",
    measurementId: "G-27G3GP476L"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const db = firebase.firestore();
  
  function storeData() {
    var inputText = document.getElementById("pun").value;
    console.log(inputText);
  
    db.collection("waitlist").doc(inputText).set({
      phonenumber: inputText
    })
    .then(function() {
      console.log("Doc successful");
      document.getElementById('join').innerText="Thanks! We'll reach out soon.";
      document.getElementById('pun').value='';
      let ls = document.getElementsByClassName('del')
      console.log(ls)
      ls[0].remove();
      ls[0].remove();
    })
    .catch(function(error) {
      console.error("Error writing doc", error);
    });
  }
  
  function addSpaces(initial){
    initial.replace("/([0-9]{3})/","\1 ");
    initial.replace("/[0-9]{3} ([0-9]{3})/","\1 ");
    return initial;
}