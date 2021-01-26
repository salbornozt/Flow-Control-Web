// MARK: - Firebase

var firebaseRef = firebase.database().ref("entidadDePrueba1").child("catalog");
/*
firebaseRef.once('value',function(snapshot){
  if(snapshot.exists()){
    var data = snapshot.val();
    for(let i in data){
    }
  }
});
*/

firebaseRef.on('value', (snapshot) =>{
  var content = '';
  snapshot.forEach(element => {
      var val = element.val();
      content +='<tr>';
      content += '<td>' + val.name + '</td>';
      content += '<td>' + val.SKU + '</td>';
      content += '<td>' + val.status + '</td>';
      content += '<td>' + val.description + '</td>';
      content += '</tr>';
  });
  $('#dataTable').append(content);
});
