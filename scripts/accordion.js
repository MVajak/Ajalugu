/*
When clicked on accordion, it opens.
Closes other accordions, if there is another one open.
*/
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        var panel = this.nextElementSibling;
        $('.panel').parent().not($(this).next()).find(".title-round-box").removeClass("title-round-box-color");
        if (panel.style.display === "block") {
            panel.style.display = "none";
            $('.panel').parent().not($(this).next()).find(".title-round-box").removeClass("title-round-box-color");
            
        } else {
            panel.style.display = "block";
            $('.panel').not($(this).next()).slideUp('fast'); 
            $(this).find(".title-round-box").addClass("title-round-box-color");
        }
    });
}

/*
When clicked button "Järgmine teema", the current accordion closes and opens the next accorion
Also closes the last accordion, when there is any accordions left
*/
$(".btn-next").on("click", function() {
   	$('.panel').not($(this).next()).slideUp('fast');
   	$(this).parent().parent().next('.accordion').trigger('click');
    $(this).parent().parent().prev('.accordion').find(".title-round-box").removeClass("title-round-box-color");
    $(this).parent().parent().next('.accordion').find(".title-round-box").addClass("title-round-box-color");
});