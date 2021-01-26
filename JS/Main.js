// MARK: - Firebase
const config = {
    apiKey: "AIzaSyCGR1xw--RqSIzEde5j07lYtEAnSTSiT94",
    authDomain: "coolingform-clab.firebaseapp.com",
    databaseURL: "https://coolingform-clab-default-rtdb.firebaseio.com",
    projectId: "coolingform-clab",
    storageBucket: "coolingform-clab.appspot.com",
    messagingSenderId: "708243084231",
    appId: "1:708243084231:web:4f6bc12f8c5581df657fe2",
    measurementId: "G-93SS7ZVQB4"
}

firebase.initializeApp(config);
firebase.analytics();


// MARK: Side Nav Bar
openNav.addEventListener("click", (e) => {
    document.getElementById("nav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
});

closeNav.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("nav").style.width = "0";
    document.getElementById("main").style.marginLeft = "";
});


// MARK: - Auth Top Bar
togglerUser.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.replace("/Auth.html")
});


// MARK: - Auth Listener
firebase.auth().onAuthStateChanged(function(user) {

    if (user) {
        var user = firebase.auth().currentUser;
    
        if(user != null){    
            var email_id = user.email;
            var email_id = user.email;
            document.getElementById("togglerUser").innerHTML =  email_id;
            console.log('usuario logueado');
        }
    } 
    else {
        console.log('usuario no logueado');
    }
});


// MARK: - Sign Out
function signOut() {
    firebase.auth().signOut();
    window.location.replace("/Auth.html")
}