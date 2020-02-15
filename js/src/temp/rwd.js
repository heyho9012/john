
    const mobile=767, tablet=1279,laptop=1919, pc=1920;
    const device = ['mobile', 'tablet', 'laptop', 'pcfull'];

// --------------------------------------------------------------
    let browser = navigator.userAgent.toLowerCase();
    let nowb = null;
    if (browser.indexOf('firefox') !== -1) {
      nowb = 'firefox';
    } else {
      nowb = 'ohter';
    }

// --------------------------------------------------------------
    //사이즈 변경 체크
    $(window).on('resize', function () {
        let afterW = $(window).outerWidth(true);
        let afterDevice = DeviceSet(afterW);
        if (beforeDevice !== afterDevice) { //가로값이 변경되었을 때만 새로고침(세로값 변화 상관없음)
          if (nowb === 'firefox') {
            window.location = window.location;
          } else {
            location.reload();
          }
        }
    });

    

// --------------------------------------------------------------
    let nowSize;
    let beforeW = $(window).outerWidth(true);//margin값까지 포함.
    //각 디바이스 상황에 맞는 data 처리
    const DeviceData = function(wid){
      switch(wid){
        case device[0]:
        break;
        case device[1]:
        break;
        case device[2]:
        break;
        case device[3]:
        break;
      }
    };//DeviceData 함수

    //디바이스 크기 체크
    const DeviceSet = function(winW){
        if(winW <= mobile){
          nowSize = device[0];
        }else if(winW > mobile && winW <= tablet){
          nowSize = device[1];
        }else if(winW > tablet && winW <= laptop){
          nowSize = device[2];
        }else{
          nowSize = device[3];
        }
        return nowSize;
    }; // DeviceSet 조건문 함수화처리
    let beforeDevice = DeviceSet(beforeW);
    DeviceSet(beforeW);// DeviceSet함수실행

      
    setTimeout(function(){
      DeviceData(beforeDevice);
    },200);

// --------------------------------------------------------------
