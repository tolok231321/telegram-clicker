let score = document.getElementById("scores");

var scores = 0;

function on_press(){
    scores = scores + 1
    score.innerHTML = scores
}
