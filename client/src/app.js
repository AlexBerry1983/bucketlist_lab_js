var UI = require('./views/ui');

var app = function() {
  console.log("this is the app")
  new UI();
}

window.addEventListener('load', app);
