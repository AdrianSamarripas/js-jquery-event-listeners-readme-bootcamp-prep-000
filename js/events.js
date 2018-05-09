//define functions here

$(document).ready(function(){

// call functions here

});

function getIt(){
  return alert("Hey!");
}

$('p').on('click', function getIt(){
    return alert("Hey!");
})


function frameIt(){
   $('img').addClass('tasty');
}

$('img').on('load', function frameIt(){
  $('img').addClass('tasty');
})



$('#typing').on('keydown', function pressIt(key){
  if (key.which === 71){
    return alert("You're a G!");
  }
})