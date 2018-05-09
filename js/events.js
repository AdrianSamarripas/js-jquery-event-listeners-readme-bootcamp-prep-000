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


function pressIt(press){
    if (press.which === 71){
    return alert("You're a G!");
  }
}

$('#typing').on('keydown', function pressIt(press){
  if (press.which === 71){
    return alert("You're a G!");
  }
})