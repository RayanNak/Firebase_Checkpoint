// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCUcbdatpP1NQe_Ss4uYGQ3morR4S0dLA0",
    authDomain: "my-website-77039.firebaseapp.com",
    databaseURL: "https://my-website-77039.firebaseio.com",
    projectId: "my-website-77039",
    storageBucket: "",
    messagingSenderId: "866990951916",
    appId: "1:866990951916:web:401af3fcd66b4108"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Import firebase libraries and api key

// Create a database variable
let database = firebase.database();

// Create ref
let ref = database.ref('First_Try');

// Prepare data

document.getElementById('contactForm').addEventListener('submit', function(e){
    e.preventDefault()
    
    let name = document.getElementById('name').value;

    let email = document.getElementById('email').value;

    let password = document.getElementById('password').value;

    let phone_num = document.getElementById('tel').value;

    let track = document.getElementById('track').value;

    let message = document.getElementById('message').value;

    let data = {
        name : name,
        email : email,
        password : password,
        tel : phone_num,
        level : track,
        message : message
    };

    // Upload data (push / set)
    ref.push(data);
});