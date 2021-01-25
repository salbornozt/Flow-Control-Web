/* Authentication */
firebase.auth().onAuthStateChanged(function(user) {

    if (user) {
        var user = firebase.auth().currentUser;
    } 
    else {
        window.location.replace("/Auth.html")
    }
});