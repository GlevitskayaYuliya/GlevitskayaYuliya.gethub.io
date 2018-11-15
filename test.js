$(document).ready(function() {
    console.log('Я загрузился')
    var hiddenBox = $( "#MyForm" );
    $( "#MyButton" ).on( "click", function( event ) {
        console.log('Меня нажали! hiddenBox =', hiddenBox)
        hiddenBox.hide();
    });
});