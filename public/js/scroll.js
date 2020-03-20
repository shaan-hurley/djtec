$(document).ready(function () {
    var Scrollbar = window.Scrollbar;

    Scrollbar.use(window.OverscrollPlugin);

    var customScroll = Scrollbar.init(document.querySelector('.js-scroll-list'), {
        plugins: {
            overscroll: true
        }
    });

    var listItem = $('.js-scroll-list-item');

    listItem.eq(0).addClass('item-focus');
    listItem.eq(1).addClass('item-next');

    customScroll.addListener(function (status) {

        var $content = $('.js-scroll-content');

        var viewportScrollDistance = 0;


        viewportScrollDistance = status.offset.y;
        var viewportHeight = $content.height();
        var listHeight = 0;
        var $listItems = $content.find('.js-scroll-list-item');
        for (var i = 0; i < $listItems.length; i++) {
            listHeight += $($listItems[i]).height();
        }

        var top = status.offset.y;
        // console.log(top);
        var visibleCenterVertical = 0;
        visibleCenterVertical = top;

        var parentTop = 1;
        var $lis = $('.js-scroll-list-item');
        var $focusLi;
        for (var i = 0; i < $lis.length; i++) {
            var $li = $($lis[i]);
            var liTop = $li.position().top;
            var liRelTop = liTop - parentTop;

            var distance = 0;
            var distance = Math.abs(top - liRelTop);
            var maxDistance = $('.js-scroll-content').height() / 2;
            var distancePercent = distance / (maxDistance / 100);


            if (liRelTop + $li.parent().scrollTop() > top) {
                if (!$li.hasClass('item-focus')) {
                    $li.prev().addClass('item-hide');
                    $lis.removeClass('item-focus');
                    $lis.removeClass('item-next');
                }
                $li.removeClass('item-hide');
                $li.addClass('item-focus');
                $li.next().addClass('item-next');
                break;
            }
        }
    });

});

$(function () {
    $('#search-menu').removeClass('toggled');

    $('#search-icon').click(function (e) {
        e.stopPropagation();
        $('#search-menu').toggleClass('toggled');
        $("#popup-search").focus();
    });

    $('#search-menu input').click(function (e) {
        e.stopPropagation();
    });

    $('#search-menu, body').click(function () {
        $('#search-menu').removeClass('toggled');
    });
});





$(document).ready(function () {
    var Scrollbar = window.Scrollbar;

    Scrollbar.use(window.OverscrollPlugin);

    var customScroll = Scrollbar.init(document.querySelector('.js-scroll-list-2'), {
        plugins: {
            overscroll: true
        }
    });

    var listItem = $('.js-scroll-list-item-2');

    listItem.eq(0).addClass('item-focus');
    listItem.eq(1).addClass('item-next');

    customScroll.addListener(function (status) {

        var $content = $('.js-scroll-content-2');

        var viewportScrollDistance = 0;


        viewportScrollDistance = status.offset.y;
        var viewportHeight = $content.height();
        var listHeight = 0;
        var $listItems = $content.find('.js-scroll-list-item-2');
        for (var i = 0; i < $listItems.length; i++) {
            listHeight += $($listItems[i]).height();
        }

        var top = status.offset.y;
        // console.log(top);
        var visibleCenterVertical = 0;
        visibleCenterVertical = top;

        var parentTop = 1;
        var $lis = $('.js-scroll-list-item-2');
        var $focusLi;
        for (var i = 0; i < $lis.length; i++) {
            var $li = $($lis[i]);
            var liTop = $li.position().top;
            var liRelTop = liTop - parentTop;

            var distance = 0;
            var distance = Math.abs(top - liRelTop);
            var maxDistance = $('.js-scroll-content-2').height() / 2;
            var distancePercent = distance / (maxDistance / 100);


            if (liRelTop + $li.parent().scrollTop() > top) {
                if (!$li.hasClass('item-focus')) {
                    $li.prev().addClass('item-hide');
                    $lis.removeClass('item-focus');
                    $lis.removeClass('item-next');
                }
                $li.removeClass('item-hide');
                $li.addClass('item-focus');
                $li.next().addClass('item-next');
                break;
            }
        }
    });

});