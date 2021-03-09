//url ststus login
var url = "http://192.168.0.3/mikmos";

// css default
// addCSS('css/style-maroon.css');
//array ticker
var myArray = [
{"display": "Assalamu'alaikum"},
{"display": "Himbauan bagi pengguna"},
{"display": "Gunakan internet dengan bijak"},
{"display": "Gunakan untuk hal yang bermanfaat"}
]
//
myFunction(myArray);
function myFunction(arr) {
  var out = "";
  var i;
  for(i = 0; i < arr.length; i++) {
    out += '<li>'+arr[i].display +'</li>';
  }
  document.getElementById("menu").innerHTML = out;
}
// random style css
function applyRandCSS(){
  var css = ["css/style-orange.min.css"];
  // var css = ["css/style-blue.min.css", "css/style-green.min.css", "css/style-maroon.min.css", "css/style-orange.min.css", "css/style-purple.min.css", "css/style-red.min.css"];
  var randomFile = css[Math.round(Math.random()*(css.length-1))];
  var ss = document.createElement("link");

  ss.type = "text/css";
  ss.rel = "stylesheet";
  ss.href = randomFile;

  document.getElementsByTagName("head")[0].appendChild(ss);
}