document.addEventListener('DOMContentLoaded', function() {
	const newsData = [
		{
			image: '/assets/news/tupac-shakur.jpg',
			title: 'World’s largest coral found...',
			description: 'The coral could be 500 years old and is bigger than a blue whale, scientists say.',
			meta: '2 hrs ago | Climate'
		},
		{
			image: '/assets/news/tupac-shakur.jpg',
			title: 'Menopause, the other mens...',
			description: 'In India, where conversation on menstruation is still taboo, menopause awareness is far behind...',
			meta: '4 hrs ago | Asia'
		},
		{
			image: '/assets/news/tupac-shakur.jpg',
			title: 'Lorem ipsum dolor sit amet...',
			description: 'Nullam a dolor sed ipsum fermentum vulputate quis at nisi...',
			meta: '4 hrs ago | Asia'
		},
		{
			image: '/assets/news/tupac-shakur.jpg',
			title: 'Integer pretium nunc sed turpis...',
			description: 'Morbi bibendum eu diam at viverra. Fusce consequat auctor nisi sit amet gravida...',
			meta: '4 hrs ago | Asia'
		},
		{
			image: '/assets/news/tupac-shakur.jpg',
			title: 'Integer pretium nunc sed turpis...',
			description: 'Morbi bibendum eu diam at viverra. Fusce consequat auctor nisi sit amet gravida...',
			meta: '4 hrs ago | Asia'
		},
		{
			image: '/assets/news/tupac-shakur.jpg',
			title: 'Integer pretium nunc sed turpis...',
			description: 'Morbi bibendum eu diam at viverra. Fusce consequat auctor nisi sit amet gravida...',
			meta: '4 hrs ago | Asia'
		},
		{
			image: '/assets/news/tupac-shakur.jpg',
			title: 'Integer pretium nunc sed turpis...',
			description: 'Morbi bibendum eu diam at viverra. Fusce consequat auctor nisi sit amet gravida...',
			meta: '4 hrs ago | Asia'
		},
		{
			image: '/assets/news/tupac-shakur.jpg',
			title: 'Integer pretium nunc sed turpis...',
			description: 'Morbi bibendum eu diam at viverra. Fusce consequat auctor nisi sit amet gravida...',
			meta: '4 hrs ago | Asia'
		},
		{
			image: '/assets/news/tupac-shakur.jpg',
			title: 'Integer pretium nunc sed turpis...',
			description: 'Morbi bibendum eu diam at viverra. Fusce consequat auctor nisi sit amet gravida...',
			meta: '4 hrs ago | Asia'
		},
		{
			image: '/assets/news/tupac-shakur.jpg',
			title: 'Integer pretium nunc sed turpis...',
			description: 'Morbi bibendum eu diam at viverra. Fusce consequat auctor nisi sit amet gravida...',
			meta: '4 hrs ago | Asia'
		},
	];

	const newsContainer = document.getElementById('newsContainer');

	// Показываем только первые 8 новостей
	const visibleNewsCount = 8;
	const hiddenNews = newsData.slice(visibleNewsCount);

	function createNewsItem(news) {
		const newsItem = document.createElement('div');
		newsItem.classList.add('latest-news-item');

		newsItem.innerHTML = `
      <div class="latest-news-image">
        <img src="${news.image}" alt="${news.title}">
      </div>
      <div class="latest-news-content">
        <h4>${news.title}</h4>
        <p class="news-description">${news.description}</p>
        <span class="news-meta">${news.meta}</span>
      </div>
    `;
		return newsItem;
	}

	// Добавляем первые 8 новостей
	newsData.slice(0, visibleNewsCount).forEach(news => {
		const newsItem = createNewsItem(news);
		newsContainer.appendChild(newsItem);
	});

	// Добавляем кнопку "Read More"
	const readMoreButton = document.createElement('button');
	readMoreButton.textContent = 'Read More';
	readMoreButton.classList.add('btn');
	newsContainer.appendChild(readMoreButton);

	// Обработчик для кнопки "Read More"
	readMoreButton.addEventListener('click', function() {
		// Добавляем оставшиеся новости
		hiddenNews.forEach(news => {
			const newsItem = createNewsItem(news);
			newsContainer.appendChild(newsItem);
		});

		// Убираем кнопку "Read More"
		readMoreButton.remove();
	});
});