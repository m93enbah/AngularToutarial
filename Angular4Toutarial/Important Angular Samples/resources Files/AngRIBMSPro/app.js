$(document).ready(function () {
    /*Tools Sidebar*/
    $('.tools-sidebar > ul > li > a').click(function () {
        $(this).parent().toggleClass('open');
        $('.tools-sidebar > ul > li > a').not(this).parent().removeClass('open');
        return false
    });
    $('.tools-button').click(function () {
        $(this).toggleClass('active');
        $('.tools-sidebar').toggleClass('tools-open');
        $('.tools-sidebar > ul > li').removeClass('open');
        return false
    });
    $('.layout-size > ul > li > a').click(function () {
        if ($(this).attr('data-layout') === 'layout-default') {
            $('body').removeClass(function (index, className) {
                return (className.match(/(^|\s)layout-\S+/g) || []).join(' ');
            });
            $(this).closest('li').addClass('active');
            $('.layout-size > ul > li > a').not(this).closest('li').removeClass('active');
            return false
        }
        else {
            $('body').removeClass(function (index, className) {
                return (className.match(/(^|\s)layout-\S+/g) || []).join(' ');
            });
            var layoutSize = $(this).attr('data-layout');
            $('body').addClass(layoutSize);
            $(this).closest('li').addClass('active');
            $('.layout-size > ul > li > a').not(this).closest('li').removeClass('active');
            return false
        }
    });
});
