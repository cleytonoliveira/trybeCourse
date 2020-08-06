var personName = "";

function complainMessage() {
  alert("I told you not to do that " + personName);
}

function typeAndScream() {
  document.getElementById("audio").play();
  personName = document.getElementById("name").value;
}

function goDark() {
  var body = document.getElementsByTagName("body")[0];
  if (body.className == "") {
    body.className = "dark";
  }
  else {
    body.className = "";
  }
  
}

function finishTheStory() {
  document.getElementById("story").innerHTML = "So I carefully searched the damp dungeon. There you are! I grinned a smile with all 98 of my gleaming teeth. Dinner time!";
}

const btn1 = document.querySelectorAll("button")[0];
btn1.addEventListener('click', goDark);

const btn2 = document.querySelectorAll("button")[1];
btn2.addEventListener('click', complainMessage);

const btn3 = document.querySelectorAll("button")[2];
btn3.addEventListener('click', finishTheStory);

const input1 = document.querySelectorAll("input")[0];
input1.addEventListener('input', typeAndScream);
