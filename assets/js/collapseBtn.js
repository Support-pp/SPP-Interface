/*
 * Copyright © 2018 Support++.
 * This work is free. You can redistribute it and/or modify it under the
 * terms of the Do What The Fuck You Want To Public License, Version 2,
 * as published by Sam Hocevar. See the LICENSE file or http://www.wtfpl.net/
 * for more details.
 */
/**
 * Created by: Support++
 * Date: 07.07.18 04:12
 * Project: Support++ Webinterface
 */

$('.collapse-btn').each(function () {
    let target = $( this ).data('target');
    let targetID = "#" + $( this ).attr('id');
    $(target).on('hide.bs.collapse', function () {
        $(targetID).addClass("unshown");
    }).on('show.bs.collapse', function () {
        $(targetID).removeClass("unshown");
    });
});