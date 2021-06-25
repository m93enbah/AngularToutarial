$(document).ready(function () {
  setTimeout(function () {
    debugger;
    $('#AllMenus li a').click(function () {
      debugger;
      $('a').removeClass('ui-state-active');
      $(this).addClass('ui-state-active');
    });
  }, 1000);

});
