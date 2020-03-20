const workContainer = wrap.find('#workContainer');
const workListBox = workContainer.find('div').eq(0);
const portBtn = workContainer.find('.port-btn').find('button');
const allBtn = workContainer.find('.all-btn');
const workList = workListBox.find('ul');
const workModal = workContainer.find('.work-list-modal');

let workLen = workList.find('li').length;

workList.find('li').eq(0).css({display: 'block'});

let btnCount = 0;
let timed = 1100;

portBtn.on('click', function(e) {
    e.preventDefault();

    let hasNext = $(this).hasClass('next-btn');
    portBtn.attr("disabled",true);
    setTimeout(function(){portBtn.removeAttr("disabled");},500);

    if (hasNext) {
        btnCount++;
        if (btnCount > workLen - 1) {
            btnCount = 0;
        }
    } else {
        btnCount--;
        if (btnCount < 0) {
            btnCount = workLen - 1;
        }
    }
    workList.find('li').stop().fadeOut(timed);
    workList.find('li').eq(btnCount).stop().fadeIn(timed);
});

let workClone = workListBox.clone();
workClone.appendTo(workModal);

allBtn.on('click', function(e) {
    e.preventDefault();
    workModal.fadeIn(timed / 4, function() {
        workModal.addClass('modal-active');
    });
});

workModal.find('.close-btn').on('click',function (e) {
    e.preventDefault();
    workModal.removeClass('modal-active',function() {
        workModal.fadeOut(timed * 1.2);
    });
});
