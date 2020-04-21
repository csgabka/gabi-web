
window.addEventListener('scroll', checkSlide);

const main = document.querySelector('main');
const projectTitle = document.getElementById('project-title');

const projectData = [
  {
    image: './img/speech.jpg',
    text: "Speech to text",
    link: "https://csgabka.github.io/text-reader/"
  },
  {
    image: './img/hangman.jpg',
    text: "Hangman game",
    link: "https://csgabka.github.io/hangman/"
  },
  {
    image: './img/search-engine.jpg',
    text: "Github User Search Engine",
    link: "https://csgabka.github.io/Github-profile-search-engine/"
  },
  {
    image: './img/calculator.jpg',
    text: "React Calculator",
    link: "https://csgabka.github.io/React-calculator/"
  },
  {
    image: './img/converter.jpg',
    text: "Arabic to Roman Numeral Converter",
    link: "https://csgabka.github.io/ArabicToRomanNumeralConverter/"
  }
];

projectData.forEach(createBox);


function createBox(item) {
	const box = document.createElement('div');

  const { image, text, link } = item;

  box.classList.add('box');
  box.addEventListener("click", () => {
  	window.open(link);
  });

  box.innerHTML = `
    <img src="${image}" alt="${text}" />
    <p class="info">${text}</p>
  `;
  main.appendChild(box);
}


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

