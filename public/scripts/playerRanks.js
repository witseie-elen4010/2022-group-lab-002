'use strict'

fetch('/gameScores') // Returns a Promise for the GET request
  .then(function (response) {

    if (response.ok) { return response.json() } // Return the response parse as JSON
    else { throw 'Failed to load classlist: response code invalid!' }
  })
  .then(function (data) { // Display the JSON data appropriately
    
  
  })
  .catch(function (e) {
    alert(e) 
  })