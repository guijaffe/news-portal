const modal = document.getElementById('newsModal');
const closeModal = document.getElementById('closeModal');
const modalTitle = document.getElementById('modalTitle');
const modalImage = document.getElementById('modalImage');
const modalDescription = document.getElementById('modalDescription');
const modalCategory = document.getElementById('modalCategory');

function showModal(news) {
	modalTitle.textContent = news.title;
	modalImage.src = news.img;
	modalDescription.textContent = news.description;
	modalCategory.textContent = `Category: ${news.category}`;

	modal.style.display = 'block';
}

closeModal.addEventListener('click', () => {
	modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
	if (event.target === modal) {
		modal.style.display = 'none';
	}
});

const exploreBtn = document.getElementById('exploreBtn');
exploreBtn.addEventListener('click', () => {
	if (mainNews) {
		showModal(mainNews);
	}
});

const exploreBtnMobile = document.getElementById('exploreBtnMobile');
exploreBtnMobile.addEventListener('click', () => {
	if (mainNews) {
		showModal(mainNews);
	}
});