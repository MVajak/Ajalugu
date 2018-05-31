
/*
Counts the checked checkboxes in each panel and assigns the result to certain label
*/
$(document).ready(function(){

    var $selected;
    var $checkboxes = $(".checkbox");
    var $panelOne = $('#panelOne input[type="checkbox"]');
    var $panelTwo = $('#panelTwo input[type="checkbox"]');
    var $panelThree = $('#panelThree input[type="checkbox"]');
    var $panelFour = $('#panelFour input[type="checkbox"]');
    var $currentPanel;
    var $currentRightLabel;
/*
     var idArray = [];
    $('.panel').each(function () {
        idArray.push(this);
    });
*/
    $checkboxes.change(function(){
        $selected = $(this);
        if ($selected.parent().parent().parent().attr('id') === "panelOne") {
            $currentPanel = $panelOne;
            $currentRightLabel = $('#label-right-one');
        } else if ($selected.parent().parent().parent().attr('id') === "panelTwo") {
            $currentPanel = $panelTwo;
            $currentRightLabel = $('#label-right-two');
        }

    	if ($currentPanel.filter(":checked").length<3) {
       		$currentPanel.not(":checked").prop("disabled", false);
    	} else {
    		$currentPanel.not(":checked").prop("disabled", true);
    	}
    	var countCheckedCheckboxes = $currentPanel.filter(':checked').length;
        $currentRightLabel.text(countCheckedCheckboxes + "/3");
	    
    });
    $checkboxes.change(function(){
    	$(this).parent().parent().toggleClass("checkedArticle");
    });
});

/*
When clicked checkboxes, makes sure if under every class="panel" there is one checkbox checked.
If there is, assigns CSS style by adding a class to the element.
*/
$(document).ready(function () {
    var btn = document.getElementsById("btn-ready");
    $('input[type="checkbox"]').change(function () {
        $a = $('#panelOne input[type="checkbox"]').filter(':checked').length;
        $b = $('#panelTwo input[type="checkbox"]').filter(':checked').length;

        if (($a && $b) > 0) {
            $("#btn-ready").addClass('btn-ready-clickable')
            $("#btn-ready").removeClass('no.click');
        } else {
            $("#btn-ready").removeClass('btn-ready-clickable');
            $("#btn-ready").addClass('no.click');
        }
    });
});
/*
function arrayContains(string, arr) {
    var found = false;
    for (var i = 0; i < arr.length && !found; i++) {
      if (arr[i] === string) {
        found = true;
        break;
      }
    }
    return found;
}
*/