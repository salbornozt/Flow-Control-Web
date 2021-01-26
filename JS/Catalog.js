// MARK: - Firebase

var firebaseRef = firebase.database().ref("entidadDePrueba1").child("catalog");

/*
firebaseRef.once('value', (snapshot) =>{
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
  //content += '</tbody>';
  //$('.childTableTag').append(content);
  document.querySelector('.childTableTag').innerHTML=content
});
var count = $('.childTableTag').length;
console.log(count)
*/

/*
var content = '';
content +='<tr>';
content += '<td>aaa</td>';
content += '<td>bb</td>';
content += '<td>vv</td>';
content += '<td>cc</td>';
content += '</tr>';

content +='<tr>';
content += '<td>432</td>';
content += '<td>bb</td>';
content += '<td>vv</td>';
content += '<td>cc</td>';
content += '</tr>';
$('.childTableTag').append(content);
*/

var dataSrc = [];

function loadData(callback){
  var databaseRef = firebase.database().ref("entidadDePrueba1").child("catalog");

  //var table = $('#ex-table').DataTable();

  console.log("Loading data starts ...");
  databaseRef.on("value", function(snapshot) {
    
    snapshot.forEach(element => {
      var storageObj = element.val();
      console.log("Loading data starts3 ...");
       var dataSet = [storageObj.name, storageObj.SKU, storageObj.status, storageObj.description];
      
  
     //table.rows.add([dataSet]).draw(); 
        dataSrc.push(dataSet);
    
        
    });
     
      
      
 //  $.holdReady( true );
//$('#dataTable').DataTable().clear().destroy();
  //    
  
console.log("Loading data ends ...");
    
     console.log("table initialization started ...");

        var dTable=$('#dataTable').DataTable({
          "bDestroy": true,    
          data: dataSrc,

       //   data: dataSrc,
          columns: [
                { title: "Name" },
                { title: "SKU" },
                { title: "Status" },
                { title: "Descripcion" }
            ],



          });

      console.log("table initialization ends ...");
    
 

  });
  
   if(callback){callback();}
}
function 	downloadObjectAsJson(exportObj, exportName){
  
  var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href",     dataStr);
    downloadAnchorNode.setAttribute("download", exportName + ".json");
    var container = document.getElementById('container');
    container.appendChild(downloadAnchorNode);
}

document.addEventListener("DOMContentLoaded", function(event) {
  var NewFile = "records";
  loadData(downloadObjectAsJson(dataSrc, NewFile));
});  
