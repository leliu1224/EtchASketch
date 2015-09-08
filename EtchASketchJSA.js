$(document).ready(function(){

  $("body").on("mouseenter", "div.gridsquare", function(){
      $(this).attr('id', 'highlight');
  });

  $("body").on("mouseleave", "div.gridsquare", function(){
    $(this).attr('id', 'fadeout');
  });

});


function gridSize(){
  var size = prompt("How big?: ")
  $("div.row").remove();
  genDivs(size);
}
function genDivs(v){ 
  var e = document.body; // whatever you want to append the rows to: 
  for(var i = 0; i < v; i++){ 
    var row = document.createElement("div"); 
    row.className = "row"; 
    for(var x = 1; x <= v; x++){ 
        var cell = document.createElement("div"); 
        cell.className = "gridsquare"; 
        row.appendChild(cell); 
    } 
    e.appendChild(row); 
  } 
}

