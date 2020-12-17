var done = "Done";
var speed = 50;
var i = 0;

function clearString() {
  document.getElementById("quote").innerHTML = "";
}

function doneString(){
  if (i == 0) {
    document.getElementById("quote").innerHTML = "";
  }
  if (i == done.length){
    setTimeout(clearString, 2000)
  }
  if (i < done.length) {
    document.getElementById("quote").innerHTML += done.charAt(i);
    i++;
    setTimeout(doneString, speed);
  }
}

var x = 0;
var quotes = ['Burning through NCIS firewall',
              'Launching Cyber Nuke',
              'Nmapping the script to view the cipher text',
              'Bettering the grasp on python 6 malware encryption',
              'Connecting the virtual TCP to the open source sensor'];
var j = Math.floor(Math.random() * quotes.length);

function typeWriter() {
  if (x == quotes[j].length){
    setTimeout(doneString, 2000)
  }
  if (i < quotes[j].length) {
    document.getElementById("quote").innerHTML += quotes[j].charAt(x);
    x++;
    setTimeout(typeWriter, speed);
  }
}

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
