var app = function(){
  var url = 'https://restcountries.eu/rest/v2';
  var request = new XMLHttpRequest();

  request.open('GET', url)
  request.addEventListener('load', function(){
    var jsonString = request.responseText
    var countries = JSON.parse(jsonString)
    createSelector(countries)
  })
  request.send()
}

var createSelector = function(countries){

  var handleSelectChanged = function(event){
    var selectedCountry = countries[this.value]
      var bucketListP = document.createElement('p')
      document.body.appendChild(bucketListP)
      bucketListP.innerText = selectedCountry.name;
  }

  var div = document.getElementById('countries-selector');
  var select = document.createElement('select')
    countries.forEach(function(country, index){
      var option = document.createElement('option')
      option.innerText = country.name;
      option.value = index;
      select.appendChild(option)
  })
  div.appendChild(select)
  select.addEventListener('change', handleSelectChanged)
}



app()
