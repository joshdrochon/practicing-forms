$(document).ready(function(){

  $("form#favoriteAnimal").submit(function(event){
    event.preventDefault();

    var response = $("select#animalChoices").val();


    if(response == "monkey"){
      $('#monkeyshow').show();
    }else if(response == "walrus"){
      $('#walrusshow').show();
    }else if(response == "cat"){
      $('#catshow').show();
    }else
      $('#dogshow').show();
    })


  });
