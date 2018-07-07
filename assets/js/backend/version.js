var versionWeb = "0.0.1"
var fileName = location.pathname.split("/").slice(-1)
$(document).ready(function () {

        $.ajax({
            url: '/api/v1/bot/i/df26ee75-44ed-4db7-9cf1-4a45dd0bd2e1/event/sp_config',
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'bearer ' + window.localStorage.token
            },
          }).done(function(data) {
            compareVersion(data[0].data.version)
            compareVersionWeb(versionWeb);
            if (fileName == "info.html"){
                document.getElementById("versionScript").innerText = "V" + data[0].data.version
                document.getElementById("versionWeb").innerText = "V" + versionWeb
                setChangelog();
            }
    });

});

function compareVersion(versionScript){
    $.ajax({
        url: 'https://raw.githubusercontent.com/Support-pp/Support-pp/master/VERSION',
        method: 'GET'
      }).done(function(data) {
        if (new String(versionScript.replace(" BETA", "")) == new String(data)){
           $("#py-2").removeClass('d-none');
        }else{
            $("#py-2").addClass('d-none');
        }
});
}
function compareVersionWeb(versionWeb){
    $.ajax({
        url: 'https://raw.githubusercontent.com/Support-pp/SPP-Interface/dev/VERSION',
        method: 'GET'
      }).done(function(data) {
        if (versionWeb != data){
           $("#py-2").removeClass('d-none');
        }else{
            $("#py-2").addClass('d-none');
            console.log("sajfksdg");
        }
});
}

function setChangelog(){
    $.ajax({
        url: 'https://raw.githubusercontent.com/Support-pp/SPP-Interface/dev/CHANGELOG.md',
        method: 'GET'
      }).done(function(data) {
        document.getElementById("changelog-web").innerText = data;
});
    $.ajax({
        url: 'https://raw.githubusercontent.com/Support-pp/Support-pp/master/CHANGELOG',
        method: 'GET'
    }).done(function(data) {
        document.getElementById("changelog-script").innerText = data;
    });
}
