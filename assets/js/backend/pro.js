$(document).ready(function () {
    $.ajax({
        url: 'https://raw.githubusercontent.com/Support-pp/Support-pp/master/pro.json',
        method: 'GET',
      }).done(function(data) {
          var tr = "";
          var ob = JSON.parse(data)
       for (i = 0; i < 20; i++) {
        tr += (('<h5 class="card-title">{USERNAME}</h5><p class="card-text">{TEXT}</p><hr/>'.replace("{USERNAME}", ob[i].name)).replace("{TEXT}", ob[i].text))
    }
    document.getElementById("pro-content").innerHTML = tr;
    
        
      }); 
});
