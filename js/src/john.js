(function ($) {

    const htmlEl = $('html, body');
    const body = $('body');
    
    body.append('<script src="../js/src/temp/rwd.js"></script>');
    body.append('<script src="../js/src/temp/about.js"></script>');
    body.append('<script src="../js/src/temp/work.js"></script>');
    body.append('<script src="../js/src/temp/canvas.js"></script>');

    // ---------------------------------------------------------------------
    const headBox = wrap.find('#headBox');
    const menuBtn = headBox.find('.menu-icon');
    let menuClone = headBox.find('ul').clone();
    const menuModal = headBox.find('.menu-modal');
    menuClone.appendTo(menuModal);
    const menu = headBox.find('ul').find('li').find('a');
    const downBtn = $('.down-scroll');

    // ---------------------------------------------------------------------
    menuBtn.on('click', function (e) {
        e.preventDefault();
        $(this).parent('li').toggleClass('menu-act');
        $(this).toggleClass('menu-act');
        menuModal.fadeToggle();
    });

    menuModal.on('scroll touchmove mousewheel', function (e) {
        e.preventDefault();
        e.stopPropagation();

        return false;
    });

    // ---------------------------------------------------------------------
    let speed = 700;

    function scrolling(obj) {
        if (!obj) { // 예외처리, 현재는 기능적으로 필요한 부분은 아님, 관례적 사용
            htmlEl.animate({scrollTop: 0}, speed);
        } else {
            let posTop = $(obj).offset().top; // posTop = 매개변수로 들어온 컨텐츠 obj 의 offset().top - 네비게이션 높이
            htmlEl.animate({scrollTop: posTop}, speed) // body의 스크롤이동 : posTop
        }
    };
    
    menu.on('click', function (e) {
        e.preventDefault();
        let direction = $(this).attr("href");
        scrolling(direction);
        menuModal.fadeOut();
        menuBtn.removeClass('menu-act');
        return false;
    });
    downBtn.on('click', function(e) {
        e.preventDefault();
        let direction = $(this).attr("href");
        scrolling(direction);
    });

})(jQuery);