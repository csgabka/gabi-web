
window.addEventListener('scroll', checkSlide);

function pageScroll(value) {
	document.getElementById(value).scrollIntoView({behavior: "smooth"});
}

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e) {
	sliderImages.forEach(sliderImage => {
		// halfway through the image
		const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
		// bottom of the image
		const imageBottom = sliderImage.offsetTop + sliderImage.height;
		const isHalfShown = slideInAt > sliderImage.offsetTop;
		const isNotScrolledPast = window.scrollY < imageBottom;
		if (isHalfShown && isNotScrolledPast) {
			sliderImage.classList.add('active');
		} else {
			sliderImage.classList.remove('active');
		}

		console.log(slideInAt);
	});
}

