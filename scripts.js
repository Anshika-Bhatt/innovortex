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
let span = document.getElementsByTagName('span');
	let product = document.getElementsByClassName('product')
	let product_page = Math.ceil(product.length/4);
	let l = 0;
	let movePer = 25.34;
	let maxMove = 203;
	// mobile_view	
	let mob_view = window.matchMedia("(max-width: 768px)");
	if (mob_view.matches)
	 {
	 	movePer = 50.36;
	 	maxMove = 504;
	 }

	let right_mover = ()=>{
		l = l + movePer;
		if (product == 1){l = 0; }
		for(const i of product)
		{
			if (l > maxMove){l = l - movePer;}
			i.style.left = '-' + l + '%';
		}

	}
	let left_mover = ()=>{
		l = l - movePer;
		if (l<=0){l = 0;}
		for(const i of product){
			if (product_page>1){
				i.style.left = '-' + l + '%';
			}
		}
	}
	span[1].onclick = ()=>{right_mover();}
	span[0].onclick = ()=>{left_mover();}
