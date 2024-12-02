// Ссылки на элементы
const newsOverlay = document.querySelector('.news-overlay');
const newsTitle = newsOverlay.querySelector('.news-title');
const exploreButton = newsOverlay.querySelector('.btn--explore');
const arrowButtons = document.querySelectorAll('.news-buttons .btn--arrow');
const featuredNews = Array.from(document.querySelectorAll('.featured-news .news-item'));

// Индекс текущей новости
let currentIndex = 0;

// Функция для обновления содержимого news-overlay
function updateNewsOverlay(index) {
	const currentNews = featuredNews[index];
	const title = currentNews.querySelector('h2').textContent;
	const description = currentNews.querySelector('p').textContent;

	// Обновляем текст
	newsTitle.textContent = title;

	// Добавляем данные для модального окна
	exploreButton.dataset.news = `${title} - ${description}`;
}

// Обработчик кнопки Explore
exploreButton.addEventListener('click', () => {
	const newsContent = exploreButton.dataset.news;
	openModal(newsContent);
});

// Функция для листания новостей
function changeNews(direction) {
	currentIndex = (currentIndex + direction + featuredNews.length) % featuredNews.length;
	updateNewsOverlay(currentIndex);
}

// Привязка событий к стрелкам
arrowButtons.forEach((arrow, index) => {
	const direction = index === 0 ? -1 : 1; // 0 = левая, 1 = правая
	arrow.addEventListener('click', () => changeNews(direction));
});

// Функция для открытия модального окна
function openModal(content) {
	const modal = document.createElement('div');
	modal.className = 'modal';
	modal.innerHTML = `
    <div class="modal-content">
      <button class="modal-close">&times;</button>
      <p>${content}</p>
    </div>
  `;
	document.body.appendChild(modal);

	// Закрытие модального окна
	modal.querySelector('.modal-close').addEventListener('click', () => {
		modal.remove();
	});
}

// Инициализация
updateNewsOverlay(currentIndex);
