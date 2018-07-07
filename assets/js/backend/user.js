$(document).ready(function () {
  
    //get User info
console.log("DEBUG :: " + window.localStorage.token)
var nickField = document.getElementById("nickname-js")
    $.ajax({
        url: '/api/v1/bot/user',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'bearer ' + window.localStorage.token
        },
      }).done(function(data) {
        if (data.isAdmin == 1){
            nickField.style.color = "#ff5252"
        }
        nickField.innerHTML = data.username
        console.log(data);

      }); 
});