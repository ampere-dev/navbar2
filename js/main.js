$( document ).ready(function() {
    $('.box-carousel').slick({
     dots: false,
     arrows: true,
     infinite: false,
     centerMode: true,
     slidesToShow: 5,
     slidesToScroll: 4,
     prevArrow: "<button type='button' class='mission-prev-arrow'><i class='fa fa-3x fa-chevron-circle-left'></i></button>",
     nextArrow: "<button type='button' class='mission-next-arrow'><i class='fa fa-3x fa-chevron-circle-right'></i></button>"
 });

});
