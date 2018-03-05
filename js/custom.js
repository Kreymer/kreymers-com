$(document).ready(function(){
  
});
$(document).scroll(function() {
  var scrollValue = $(document).scrollTop();
  var hHero = $(".hero-section").height();
  var wHero = $(".hero-section").width();
  if (scrollValue < $(".hero-section").height()) {
  	scrollValue = Math.round(scrollValue/5);
  	if (scrollValue < 512) {
  		$(".hero-section").css("background-position-y", scrollValue + "px");
  	}
  }
});
