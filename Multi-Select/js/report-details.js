


$(function() {


$('.open').click(function(){
    $('.panel').addClass("active-panel");
    $('.shroud').addClass("active-shroud");
});

$('.done').click(function(){
    $('.shroud').removeClass("active-shroud");
    $('.panel').removeClass("active-panel");
    $('body').css( "background-image", "url('img/background2.png')" );
});

// $('.open').click(function(){
//     $('.shroud').addClass("active-shroud");
// });

// $('.done').click(function(){
//     $('.panel').removeClass("active-panel");
// });

	$( "#sortable" ).sortable();
	
    $( "#sortable" ).disableSelection();
	
    $( "#sortable" ).sortable({
     	cancel: ".ui-state-default.unselected"
    });
 
    $( "#sortable li" ).disableSelection();


 $("#show").click(function () {
     $('.checkbox-row').prop("checked", true);
     $('.ui-state-default').removeClass('unselected');
 });


 $("#hide").click(function () {
     $('.checkbox-row').prop("checked", false);
     // $('.checkbox-row').attr('checked', 'false');
     $('.ui-state-default').addClass('unselected');
 });


$(".checkbox-row").change(function() {
    if($(this).is(":checked")) {
        
        $(this).parent().parent().removeClass('unselected'); 
        
    }
    else{

        $(this).parent().parent().addClass('unselected');
    } 
}); 


var list = $("ul"),
    origOrder = list.children();

list.on("click", ":checkbox", function() {
    var i, checked = document.createDocumentFragment(),
        unchecked = document.createDocumentFragment();
    for (i = 0; i < origOrder.length; i++) {
        if (origOrder[i].getElementsByTagName("input")[0].checked) {
            checked.appendChild(origOrder[i]);
        } else {
            unchecked.appendChild(origOrder[i]);
        }
    }
    list.append(checked).append(unchecked);
});


$('.checkbox-row').on('click', function() {
    var checkbox = $(this);
    if(checkbox.is(':checked')) {
    }
});

});

