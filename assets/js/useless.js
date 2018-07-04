$('#useless').on('shown.bs.modal', function (e) {
    let counter = 0;
    let inter =setInterval(function () {
        counter++;
        $('#uselessBar').css('width', counter + '%');
        if (counter === 101) clearInterval(inter);
    }, 50);
    setTimeout(function () {
        $('#useless').modal('hide');
        $('#uselessBar').css('width', "0")
    }, 6000);
});