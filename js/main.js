(function($){

    const win = $(window),
          htmlEl = $('html,body'),
          wrap = $('#wrap'),
          scrollEl = wrap.find('.scroll'),
          mainBox=$('#mainBox'),
          aboutBox=$('#aboutBox'),
          aboutCon=$('#aboutCon'),
          workBox=$('#workBox'),
          footBox=$('#footBox'),
          mainUl=mainBox.find('ul'),
          mainList=mainUl.find('li'),
          fixMenu=$('.fix_menu');

// ------------------------------------------------

    const gnbLink=$('#gnb').find('li').find('a');
    const fixLink=$('.fix_menu').find('li').find('a');

    const linkScroll = function(link){
        link.on('click',function(e){
            let liIndex=$(this).parent('li').index();
            e.preventDefault();
            if(liIndex==0){useN=0;}
            else if(liIndex==1){useN=1;}
            else if(liIndex==2){useN=4;}
            else if(liIndex==3){useN=7;}
            ScrollMagic();
        });
        return link;
    };

    linkScroll(gnbLink);
    linkScroll(fixLink);
    // --------------------------------
    const downClick=$('.down_click').find('a');
    downClick.on('click',function(e){
        e.preventDefault();
        useN=1;
        ScrollMagic();
    });
    // --------------------------------
    htmlEl.animate({scrollTop:0});
    let myScrollElTop = [];
    let scrollLen = scrollEl.length;
    let timed = 800;

    for(let i=0;i<scrollLen;i++){
       let scTop = scrollEl.eq(i).offset().top;
       myScrollElTop.push(scTop);
    }

    let myStatus=true, n, useN=0;

    const ScrollMagic = function(){
        htmlEl.animate({scrollTop:myScrollElTop[useN]},
           timed,'easeOutSine',function(){
               myStatus = true;
      });
    }; // scrollMagic()

    $(window).on('mousewheel touchmove DOMMouseScroll',function(e){
        if(e.originalEvent.wheelDelta){
            n = e.originalEvent.wheelDelta * -1;
        }else{n = e.originalEvent.delta * 40;}
        if(myStatus){
            myStatus = false;
          if(n > 0){useN++;
           if(useN >= scrollLen){useN = scrollLen-1;} ScrollMagic();
         }else{useN--;
           if(useN < 0){useN = 0;} ScrollMagic();}
        }
    });

// ------------------------------------------------

    let winH=win.outerHeight();          
    let aboutOffset=aboutBox.offset().top-(winH/3);
    let workOffset=workBox.offset().top-(winH/3);
    let footOffset=footBox.offset().top-(winH/2);
    let aboutConOffset=aboutCon.offset().top-(winH/3);
    const history=$('.history');

// --------------------------------------------------------------

    win.on('scroll', function(){

        let winScroll = win.scrollTop();
        // ---------------------------------
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
        if(winScroll<workOffset){
            fixMenu.find('li').eq(1).find('span').fadeIn(fixTime);
            fixMenu.find('li').eq(1).siblings().find('span').fadeOut(fixTime);
        }else if(winScroll>=workOffset&&winScroll<footOffset){
            fixMenu.find('li').eq(2).find('span').fadeIn(fixTime);
            fixMenu.find('li').eq(2).siblings().find('span').fadeOut(fixTime);
        }else if(winScroll>=footOffset){
            fixMenu.find('li').eq(3).find('span').fadeIn(fixTime);
            fixMenu.find('li').eq(3).siblings().find('span').fadeOut(fixTime);
        }

        if(winScroll>aboutConOffset){
            history.find('div').addClass('action');
            history.find('p').addClass('action');
        }else{
            history.find('div').removeClass('action');
            history.find('p').removeClass('action');
        }
    });

// ------------------------------------------------

    mainList.eq(1).css({display:'none'});
    mainList.eq(2).css({display:'none'});

    let i=0;
    setInterval(function(){
        i++;
        if(i>=3){i=0;}
        mainList.eq(i).fadeIn(1800);
        mainList.eq(i).siblings().fadeOut(1800);
    },3000);

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
