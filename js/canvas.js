//can.js
const myCan = document.querySelectorAll('.my_can'); //캔버스 박스만들기
const win = $(window);
const skillBox=$('#aboutCon_02');
const workBox=$('#workBox');

// const resultArr = [90, 80, 50];
const resultArr = [
    {sj:'html5', sc:85, color:'#e04b24'},
    {sj:'css', sc:90, color:'#006ab4'},
    {sj:'jquery', sc:80, color:'#0268ac'},
    {sj:'javascript', sc:65, color:'#F7E018'},
    {sj:'responsive', sc:80, color:'#555555'},
    {sj:'web', sc:80, color:'#555555'},
    {sj:'git', sc:70, color:'#1d1d1d'},
    {sj:'illustrator', sc:80, color:'#FF7C00'},
    {sj:'photoshop', sc:70, color:'#26C9FF'},
    {sj:'indesign', sc:50, color:'#FF5FA5'}
];

for(let i =0; i<myCan.length; i++){
    myCan[i].innerHTML = '<canvas width="216" height="216" style="width : 1920px; height : 900px" class="myC"></canvas>';
    let myC = document.querySelectorAll('.myC')[i];
    myC.style = 'transform:rotate(-90deg) scale(0.5) translate(50%, -50%)';
};

// [].each(function(index. data){}); //제이쿼리형식
document.querySelectorAll('.myC').forEach(function(data,index){
    let ctx = data.getContext('2d');

const myR = function(r){
    return Math.PI/180 * (3.6*r);
};

const progressArc = function(r){
    ctx.arc(108,108,84,0,myR(r));
};

let j = 0;
const graphGo = function(s){
    go = setInterval(function(){
        if(j < s){
        ctx.beginPath();
        ctx.lineWidth =16;
        ctx.strokeStyle = resultArr[index].color;
        progressArc(++j);

        ctx.stroke(); 
        }else{
            clearInterval();
        }
    },500);
}


let winH=win.outerHeight();          
let skillOffset=skillBox.offset().top-(winH/3);
win.on('scroll', function(){
    let winScroll = win.scrollTop();
    if(winScroll>=skillOffset){
        graphGo(resultArr[index].sc);
    }else{
        graphGo(false);
    }
});

});


