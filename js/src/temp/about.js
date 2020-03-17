const win = $(window);
const body = $('body');
const wrap = body.find('#wrap');
const aboutTitle = wrap.find('#aboutTitle');
const aboutContainer = wrap.find('#aboutContainer');
const skillBox = aboutContainer.find('.skill-box');
const historyBox = aboutContainer.find('.history-box');

skillBox.append('<ul></ul>');

const skillList = [
    'html5',
    'css3(scss)',
    'responsive web',
    'cross browsing',
    'javascript',
    'jQuery',
    'web accessbility',
    'git',
    'illustrator',
    'photoshop',
    'indesign'
];


for (let i = 0; i < skillList.length; i++) {
    skillBox.find('ul').append('<li></li>');
    skillBox.find('ul').find('li').eq(i).append(skillList[i]);
}

// ---------------------------------------------------------------------
historyBox.append('<ul></ul>');

const historyList = [
    '한신대학교',
    'Contentsbridge',
    '사회복지',
    '한신대학교 산학협력단',
    '그린컴퓨터아카데미'
];
const historyText = [
    '2009.03 - 2016.02<br />정보통신학과 졸업(3.4/4.0)',
    '2015.12 - 2016.04<br />네트워크 및 리눅스 서버 관리<br />CDN Service',
    '2016.06 - 2017.01<br />대한신학대학원대학교 사회교육원<br />사회복지 전공',
    '2018.09 - 2019.02<br />청년TLO육성사업<br />정보통신학과 교수 연구원',
    '2019.08 - 2019.12<br />스마트기기 UXUI 디자인 실무자<br />디지털앱, 웹디자인'
];

for (let i = 0; i < historyList.length; i++) {
    historyBox.find('ul').append('<li><dl><dt></dt><dd></dd></dl></li>');
    historyBox.find('ul').find('li').eq(i).find('dt').append(historyList[i]);
    historyBox.find('ul').find('li').eq(i).find('dd').append(historyText[i]);
}

// ---------------------------------------------------------------------
const topBtn = aboutTitle.find('.top-btn');
let winH = win.outerHeight();   
let aboutH = aboutTitle.outerHeight() - (winH / 2);
let skillOffset=aboutContainer.offset().top - (winH / 2);

win.on('scroll', function() {
    let winScroll = win.scrollTop();

    if (winScroll > skillOffset) {
        skillBox.addClass('skill-act');
        historyBox.addClass('history-act');
    } else {
        skillBox.removeClass('skill-act');
        historyBox.removeClass('history-act');
    }
});

const topHandler = function () {

    win.on('scroll', function () {
        let winScroll = win.scrollTop();
        if (winScroll > aboutH) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });

    topBtn.on('click', function () {
        $('html, body').stop().animate({scrollTop: 0});
    });
};

const topRwd = function (winW) {
    if (winW <= mobile) {} else {
        topHandler();
    }
};
topRwd(beforeW);