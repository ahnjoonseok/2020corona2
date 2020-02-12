var didScroll; 
var list = false;
var lastScrollTop = 0;
var delta = 535;
var navbarHeight = $('navigation').outerHeight(); 

$(window).scroll(function(event){ didScroll = true; }); 

setInterval(function() { 
    if (didScroll) { 
        hasScrolled(); didScroll = false; 
    } 
}, 250); 

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


function listOpen() {
  
  if(!list) {
    list = true;
    $('#patientlist').removeClass('listhide').addClass('liston'); 
  } else if (list)
  {
    list = false;
    $('#patientlist').removeClass('liston').addClass('listhide'); 
  }
}


function hasScrolled() { 

    var mybutton = document.getElementById("myBtn1");
    var st = $(this).scrollTop(); 
    var $screenWidth = $(window).width();
    
    if(st > 500)
    {
      mybutton.style.display = "block";
        
        $('#navigation').removeClass('nav-hide').addClass('nav-on'); 
    }else {
        mybutton.style.display = "none";
        $('#navigation').removeClass('nav-on').addClass('nav-hide'); 
    }

    // // Make sure they scroll more than delta 
    // if(Math.abs(lastScrollTop - st) >= delta) {
    //     $('#navigation').removeClass('nav-hide').addClass('nav-on'); 
    // } else {
    //     $('#navigation').removeClass('nav-on').addClass('nav-hide'); 
    // }
        
    
    // // If they scrolled down and are past the navbar, add class .nav-up. 
    // // This is necessary so you never see what is "behind" the navbar. 
    // if (st > lastScrollTop && st > 30){ 
    //     // Scroll Down 
    //     $('#navigation').removeClass('nav-hide').addClass('nav-on'); 
    // } else {
    //     // Scroll Up 
    //     if(st + $(window).height() < $(document).height()) { 
    //         $('#navigation').removeClass('nav-on').addClass('nav-hide'); 
    //     } 
    // } 
    
    // console.log(st);

    // lastScrollTop = st; 
}


$(document).ready(function(){

    //Google Analytics
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
      ga('create','UA-53828044-1','auto');
      ga('require', 'displayfeatures');
      ga('send','pageview'); 
    
    // SNS LINK
    function sharefb(url) {
      window.open('http://www.facebook.com/sharer/sharer.php?u=' + url);
    };
  
    function sharetwit(url, text) {
      window.open('http://twitter.com/intent/tweet?text=' + text + '&url=' + url);
    };
  
    $('#facebook').on("click", function() {
      sharefb('http://mabu.newscloud.sbs.co.kr/202002corona2/');
    });
  
    $('#twitter').on("click", function() {
      sharetwit('http://mabu.newscloud.sbs.co.kr/202002corona2/', 'SBS마부작침: ');
    });
});




Kakao.init('3304e8a619f256f70fd0c71f5cc846a7');
function sendLink() {
    Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
          title: '신종 코로나 바이러스 타임라인, 한눈에 보기',
          description: '마부작침은 한국의 신종 코로나 감염 상황과 감염자 동선을 날짜별로 알기 쉽게 정리했습니다.',
          imageUrl: 'https://img.sbs.co.kr/newimg/news/20200205/201399454.jpg',
          link: {
            mobileWebUrl: 'http://mabu.newscloud.sbs.co.kr/202002corona2/index.html',
            webUrl: 'http://mabu.newscloud.sbs.co.kr/202002corona2/index.html'
          }
        },
        buttons: [
          {
            title: '웹으로 보기',
            link: {
              mobileWebUrl: 'http://mabu.newscloud.sbs.co.kr/202002corona2/index.html',
              webUrl: 'http://mabu.newscloud.sbs.co.kr/202002corona2/index.html'
            }
          },
          {
            title: '앱으로 보기',
            link: {
              mobileWebUrl: 'http://mabu.newscloud.sbs.co.kr/202002corona2/index.html',
              webUrl: 'http://mabu.newscloud.sbs.co.kr/202002corona2/index.html'
            }
          }
        ]
    });
}