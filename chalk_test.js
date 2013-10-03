var guessWeight = function (userHeight, userWeight) {
  var genderGuess;
  if(userHeight === "short") {
    if(userWeight <= 130) {
      genderGuess = "female";
    }
    else {
      genderGuess = "male";
    }
  }
  else if(userHeight === "average") {
    if(userWeight <= 150) {
      genderGuess = "female";
    }
    else {
      genderGuess = "male";
    }
  }
  else if(userHeight === "tall") {
    if(userWeight <= 170) {
      genderGuess = "female";
    }
    else {
      genderGuess = "male";
    }
  }
  else {
    genderGuess = "Oops, looks like you didn't select a height.";
  }
  return genderGuess;


};

$('#inputForm').on('submit',function(e){
  e.preventDefault();

  // Check that this is working on submit
  // alert( $('#inputHeight').val());
  // alert( $('#inputWeight').val());

  var genderGuess = guessWeight($('#inputHeight').val(), $('#inputWeight').val());

  $('#result').removeClass('hide');
  $('#guessText').text(genderGuess);
  $('#guessText').addClass(genderGuess);
  $('#guessIcon').addClass("icon-" + genderGuess);

  $('#inputForm').hide();
});
