var UI = require('./views/ui');

var app = function() {
  var ui = new UI();

  /////////
  var url = 'https://restcountries.eu/rest/v2';
  var request = new XMLHttpRequest();

  request.open('GET', url)
  request.addEventListener('load', function(){
    var jsonString = request.responseText
    var countries = JSON.parse(jsonString)
    ui.createSelector(countries)
  })
  request.send()
  /////////////


  
  console.log("this is the app")
}

window.addEventListener('load', app);
