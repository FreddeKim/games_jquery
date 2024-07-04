


$(document).ready(function(){
    gameslider();
    changeDisplay();
});




function gameslider(){
    const $sliderWrap = $('.slidercontainer');
    const $sliderBox = $sliderWrap.find('.containerBox');

    let sliderindex = 0;
    let sliderCount = $sliderBox.length;
    let sliderInterval = 5000;
    let interval;


    function sliderPrev(){
        let prevSlide = (sliderindex - 1 + sliderCount) % sliderCount;
        $sliderBox.eq(sliderindex).fadeOut(800);
        $sliderBox.eq(prevSlide).fadeIn(800);
        sliderindex = prevSlide;
    }
    function sliderNext(){
        let nextSlide = (sliderindex + 1) % sliderCount;
        $sliderBox.eq(sliderindex).fadeOut(800);
        $sliderBox.eq(nextSlide).fadeIn(800);
        sliderindex = nextSlide;
    }


    $('.sleftArrow').click(function(){
        sliderPrev();
    });
    $('.srightArrow').click(function(){
        sliderNext();
    });
    
    function startslider(){
        interval = setInterval(sliderNext , sliderInterval);
    }
    function stopslider(){
        clearInterval(interval);
    }
    $sliderBox.on('mouseenter', stopslider).on('mouseleave', startslider);

    startslider();
};
function changeDisplay(){
    $('.gamelist > ul > li > a').click(function(event){
        event.preventDefault();


        // $(this).parent().addClass('active');
        // $(this).parent().siblings().removeClass('active');  
        var className = $(this).parent().attr('class');

        // 해당 메뉴 항목에 active 클래스 추가하고 형제 항목들의 active 클래스 제거
        $(this).parent().addClass('active').siblings().removeClass('active');

        // 대응하는 ul과 div에 active 클래스 추가하고 형제 요소들의 active 클래스 제거
        $('.' + className).fadeIn(800).addClass('active').siblings('div').fadeOut(300).removeClass('active');

    });
};