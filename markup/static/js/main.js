'use strict';

(function () {
  var slider = document.querySelector('.slider');
  
  if (slider !== null) {
    $(document).ready(function(){
      $(".slider").owlCarousel({
        loop: true,
        items: 1,
        slideTransition: 'ease',
        smartSpeed: 350,
        autoplay: true,
        autoplayHoverPause:true
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

(function () {
  var search = document.querySelector('.search');
  
  if (search !== null) {
    var searchItem = search.querySelector('.search__button');
    var searchForm = search.querySelector('.search__form');
    var searchExit = search.querySelector('.search__form-exit');
    
    var closeEsc = function (e) {
      if (e.keyCode === 27) {
        searchForm.classList.add('search__form--hidden');
      }
    }
    
    searchItem.addEventListener('click', function () {
      searchForm.classList.remove('search__form--hidden');
      
      document.addEventListener('keydown', closeEsc);
    });
    
    searchExit.addEventListener('click', function () {
      searchForm.classList.add('search__form--hidden');
      
      document.removeEventListener('keydown', closeEsc);
    });
  }
})();

/*
    This file can be used as entry point for webpack!
 */
