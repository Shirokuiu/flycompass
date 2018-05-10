'use strict';

(function () {
  var slider = document.querySelector('.slider');
  
  if (slider !== null) {
    $(document).ready(function(){
      $(".slider").owlCarousel({
        loop: true,
        items: 1,
        slideTransition: 'ease',
        smartSpeed: 350
      });
    });
  }
})();

$(document).ready(function(){
  var $page = $('html, body');
    $('.home__scroll-top').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 400);
        return false;
    });
});

(function () {
  var calendar = document.querySelector('.blog__calendar-wrap');
  
  if (calendar !== null) {
    $(function() {
      $(".blog__calendar-wrap").datepicker();
    });
  }
})();

(function () {
  var headerTop = document.querySelector('.page-header__row-top');
  var scrollLink = document.querySelector('.home__scroll-top');
  
  var waypoint = new Waypoint({
    element: document.querySelector('.page-header__row-top'),
    handler: function() {
      scrollLink.classList.toggle('home__scroll-top--hidden');
    },
    offset: -200
  })
})();

/*
    This file can be used as entry point for webpack!
 */
