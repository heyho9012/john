(function($){

    const win = $(window),
          mainBox=$('#mainBox'),
          aboutBox=$('#aboutBox'),
          workBox=$('#workBox'),
          mainUl=mainBox.find('ul'),
          mainList=mainUl.find('li'),
          fixMenu=$('.fix_menu');

// ------------------------------------------------

    let winH=win.outerHeight();          
    let aboutOffset=aboutBox.offset().top-(winH/3);
    let workOffset=workBox.offset().top-(winH/3);

// --------------------------------------------------------------

    win.on('scroll', function(){

        let winScroll = win.scrollTop();
        // ---------------------------------
console.log(winScroll);
        if(winScroll>800){fixMenu.addClass('real_fix')}
        else{fixMenu.removeClass('real_fix')}

        if(winScroll>aboutOffset){
            aboutBox.find('h2').addClass('action');              
            $('.about_text').addClass('action');
        }else{
            aboutBox.find('h2').removeClass('action');
            $('.about_text').removeClass('action');
        }
        
        if(winScroll>workOffset){
            workBox.find('h2').addClass('action');              
        }else{
            workBox.find('h2').removeClass('action');
        }

        let fixTime=800;
        if(winScroll<=2336){
            fixMenu.find('li').eq(1).find('span').fadeIn(fixTime);
            fixMenu.find('li').eq(1).siblings().find('span').fadeOut(fixTime);
        }else if(winScroll<=3999){
            fixMenu.find('li').eq(2).find('span').fadeIn(fixTime);
            fixMenu.find('li').eq(2).siblings().find('span').fadeOut(fixTime);
        }else if(winScroll>=4080){
            fixMenu.find('li').eq(3).find('span').fadeIn(fixTime);
            fixMenu.find('li').eq(3).siblings().find('span').fadeOut(fixTime);
        }

    });

// ------------------------------------------------

    mainList.eq(1).css({display:'none'});
    mainList.eq(2).css({display:'none'});

    let i=0;
    setInterval(function(){
        i++;
        if(i>=3){i=0;}
        mainList.eq(i).fadeIn(2000);
        mainList.eq(i).siblings().fadeOut(2000);
    },4000);

// ------------------------------------------------ Hours Minutes Seconds

    let date = new Date();

    setInterval(function(){
        date = new Date();

        let nowT = date.getHours();
        let nowMin = date.getMinutes();
        let nowS = date.getSeconds();

        const txt = document.querySelector('.timer>span');
        if(nowS<10){nowS='0'+nowS;}else if(nowMin<10){nowMin='0'+nowMin;}else if(nowT<10){nowT='0'+nowT;}

        txt.innerText= nowT  + '  : ' + nowMin + '  : ' + nowS  + ' ';

    },100);

// ------------------------------------------------
})(jQuery);