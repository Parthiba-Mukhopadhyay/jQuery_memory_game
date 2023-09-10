var buttonColours=["red", "blue", "green", "yellow"];
var gamePattern=[];
$(".btn").click(function(){
    alert("The paragraph was clicked.");
  });
function nextSequence()
{
    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio=Audio("/sounds"+randomChosenColour+".mp3");
    audio.play();
}