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


function pressIt(){
  $('#typing').on('keypress', function(press){
    if(press.which === 71){
      alert("You're a G!");
    }
  });
}