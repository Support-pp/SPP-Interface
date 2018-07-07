/*!
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

function addStarRating() {
    $('.star-rating').each(function () {
        let users = $( this ).data('user');
        let rating = $( this ).data('rating');
        if (!($.isNumeric(users) && $.isNumeric(rating))){
            $( this ).html("Wrong data input.");
        } else {
            rating = parseFloat(parseFloat(rating).toFixed(2));
            if (rating > 5) {
                $( this ).html("Please define a rating between 1 and 5.")
            } else {
                let stars = "";
                let intRate = Math.trunc(rating);
                switch (intRate){
                    case 5:
                        stars += "<i class=\"fas fa-star\"></i>";
                    case 4:
                        stars += "<i class=\"fas fa-star\"></i>";
                    case 3:
                        stars += "<i class=\"fas fa-star\"></i>";
                    case 2:
                        stars += "<i class=\"fas fa-star\"></i>";
                    case 1:
                        stars += "<i class=\"fas fa-star\"></i>";
                        break;
                }
                if (parseFloat(parseFloat(rating % 1).toFixed(2)) >= 0.5){
                    stars += "<i class=\"fas fa-star-half-alt\"></i>";
                    intRate++;
                }
                switch (5 - intRate){
                    case 5:
                        stars += "<i class=\"far fa-star\"></i>";
                    case 4:
                        stars += "<i class=\"far fa-star\"></i>";
                    case 3:
                        stars += "<i class=\"far fa-star\"></i>";
                    case 2:
                        stars += "<i class=\"far fa-star\"></i>";
                    case 1:
                        stars += "<i class=\"far fa-star\"></i>";
                        break;
                }
                $( this ).addClass("d-flex").addClass("align-text-top");
                let starUserWrapper = document.createElement("div");
                starUserWrapper.classList.add("d-inline-block");
                starUserWrapper.classList.add("text-center");
                let starWrapper = document.createElement("div");
                starWrapper.classList.add("d-block");
                starWrapper.classList.add("yellow-dark-text");
                $(starWrapper).html(stars);
                let userWrapper = document.createElement("div");
                userWrapper.classList.add("d-block");
                $(userWrapper).css("margin-top", "-0.5rem");
                $(userWrapper).html("<small>(" + users + " User)</small>");
                let ratingWrapper = document.createElement("div");
                ratingWrapper.classList.add("ml-2");
                ratingWrapper.classList.add("d-inline-block");
                $(ratingWrapper).html(rating.toString().replace(".", ","));

                starUserWrapper.appendChild(starWrapper);
                starUserWrapper.appendChild(userWrapper);
                this.appendChild(starUserWrapper);
                this.appendChild(ratingWrapper);
            }
        }
    });
}
window.onload = addStarRating();