/*
On button click, it scrolls to assigned div element
*/
$(".scrollBtn").click(function() {
    $('html,body').animate({
        scrollTop: $("#chooseArticleInfo").offset().top},
        'slow');
});
/*
Scroll to top, when page is refreshed
*/
$(window).on('beforeunload', function(){
  $(window).scrollTop(0);
});