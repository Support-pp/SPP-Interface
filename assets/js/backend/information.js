$(document).ready(function () {
        $.ajax({
            url: 'https://raw.githubusercontent.com/Support-pp/SPP-Interface/dev/info.json',
            method: 'GET'
          }).done(function(data) {
                var ob = JSON.parse(data)
                document.getElementById("information-title").innerHTML =  ob[0].title
                document.getElementById("information-text").innerHTML = ob[0].content
                document.getElementById("versionBadge").innerHTML =  ob[0].id
    });
});