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

// Product preview functionality
let previewContainer = document.querySelector('.products-preview');
let previewBox = previewContainer ? previewContainer.querySelectorAll('.preview') : [];

// Show preview when a product is clicked
document.querySelectorAll('.products-container .product').forEach(product => {
    product.onclick = () => {
        if (previewContainer) {
            previewContainer.style.display = 'flex';
            let name = product.getAttribute('data-name');
            previewBox.forEach(preview => {
                let target = preview.getAttribute('data-target');
                if (name == target) {
                    preview.classList.add('active');
                }
            });
        }
    };
});

// Close preview when close button is clicked
previewBox.forEach(close => {
    close.querySelector('.fa-times').onclick = (e) => {
        e.stopPropagation();
        close.classList.remove('active');
        previewContainer.style.display = 'none';
    };
});
