@@include('libs/smoothScroll.js', {})
@@include('libs/tippy.js', {})
@@include('libs/inputmask.min.js', {})
@@include('functions.js', {})
@@include('sliders.js', {})
@@include('scroll.js', {})
@@include('forms.js', {})
@@include('radio.js', {})
// @@include('tippies.js', {})
@@include('dynamicAdapt.js', {})

function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('html').classList.add('_webp');
	} else {
		document.querySelector('html').classList.add('_no-webp');
	}
});

// Move cart product images
const mql = window.matchMedia("(max-width: 940px)");
const cartBody1 = document.querySelector(".cart__body");
const cartImages = document.querySelectorAll(".cart__product-left");
const moveBackElements = document.querySelectorAll(".cart__product-right");
const moveAfterElements = document.querySelectorAll(".product__title");

const replaceElements = () => {
	if (mql.matches && cartImages.length > 0) {
		moveAfterElements.forEach((el, i) => {
			const img = cartImages[i];
			el.insertAdjacentElement('afterend', img);
		});
	} else {
		moveBackElements.forEach((el, i) => {
			el.insertAdjacentElement('beforebegin', cartImages[i]);
		});
	}
};

document.addEventListener('DOMContentLoaded', (event) => {
	replaceElements();
});

mql.addEventListener('change', replaceElements);

//===============================

function initQuantity(){

	jQuery(document).on('click','.quantity__button', function(){
		for (let index = 0; index < jQuery(this).length; index++) {
			const quantityButton = jQuery(this)[index];
			quantityButton.addEventListener("click", function (e) {
				let value = parseInt(quantityButton.closest('.quantity').querySelector('input').value);
				if (quantityButton.classList.contains('quantity__button_plus')) {
					value++;
				} else {
					value = value - 1;
					if (value < 1) {
						value = 1
					}
				}
				quantityButton.closest('.quantity').querySelector('input').value = value;

				jQuery.ajax({
					type: 'POST',
					dataType: 'json',
					url: admin.url,
					data: {action : 'update_item_from_cart', 'cart_item_key' : quantityButton.closest('.quantity').querySelector('input').id, 'qty' : value,  },
					success: function (data) {
						jQuery(document.body).trigger('wc_fragment_refresh');
					}

				});
			});
		}
	});

}
