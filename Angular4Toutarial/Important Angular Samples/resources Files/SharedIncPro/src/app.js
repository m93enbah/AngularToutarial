//$(document).ready(function () {
//  setTimeout( function() {
//    $('.main-sidebar > ul > .has-sub > a').click(function () {
//      $(this).closest('.has-sub').toggleClass('opened');
//      $('.main-sidebar > ul > .has-sub > a').not(this).closest('.has-sub').removeClass('opened');
//    });
//    $('.main-sidebar > ul > .has-sub > .sub-menu .has-sub a').click(function () {
//      $(this).closest('.has-sub').toggleClass('opened');
//    });
//  }, 1000);
//});


$(document).ready(function () {

  setTimeout(function () {

    $('#AllMenus li a').click(function () {
      debugger;
      $('a').removeClass('ui-state-active');
      $(this).addClass('ui-state-active');
    });
    }, 1000);

  });
