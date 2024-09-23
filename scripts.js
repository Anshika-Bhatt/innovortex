$(document).ready(function() {

    // Handling radio button clicks
    $('.radio-group .radio').click(function(){
        $('.radio').addClass('gray');
        $(this).removeClass('gray');
    });

    // Increment count
    $('.plus-minus .plus').click(function(){
        var count = $(this).parent().prev().text();
        $(this).parent().prev().html(Number(count) + 1);
    });

    // Decrement count (not going below 0)
    $('.plus-minus .minus').click(function(){
        var count = $(this).parent().prev().text();
        if (Number(count) > 0) {
            $(this).parent().prev().html(Number(count) - 1);
        }
    });

});


