// FUGLEN VIDEO

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.

function onYouTubeIframeAPIReady() {
  // 
  new YT.Player('player', {
    videoId: 'id3hkebJkZE',
    playerVars: {
      autoplay: true,
      loop: true,
      playlist: 'id3hkebJkZE'   
    },
    events: {
      onReady: function (event) {
        event.target.mute()
      }
    }  
  });
}



// SLIDNG

$(document).ready(function(){
	var current = 0;
			// 모니터크기로 슬라이드의 너비를 조정한다
			var slideWidth = screen.width;
			$(".slide").width(slideWidth);

			//이미지의 가로너비는 .slideㅇ와 일치시켰고 이미지의 높이값을 얻어낸다
			var slideHeight = $(".slide").height();

			//#slide-contents의 너비와 높이를 .slide와 일치시켜서 버튼의 위치를 맞춘다.
			$(".slide-contents").height(slideHeight);
			$(".slide-contents").width(slideWidth);

			// .slide의 부모인 .slide-group의 너비를 플롯된 슬라이드가 충분히 가로나열될수있는 너비로 조정한다
			var total = $(".slide").length;
			var fullSlideWidth = slideWidth * total;

			$(".slide-group").css({
				"width":fullSlideWidth
			});

      function fnMove(idx){
        $(".slide-group").animate({
          left:-slideWidth * idx
        });
        current = idx;
      }

      $(".next").on("click",function(){
        if(current == 1){
          return false;
        }
        fnMove(current + 1)
      });

      $(".prev").on("click",function(){
        if(current == 0){
          return false;
        }
        fnMove(current - 1)
      });


});