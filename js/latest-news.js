document.addEventListener('DOMContentLoaded', function() {
	const newsData = [
		{
			image: '/assets/news/tupac-shakur.jpg',
			title: 'Tupac Shakur: The Mystery That Still Captivates the World',
			description: 'Decades after his tragic death, Tupac Shakur remains one of the most iconic figures in music history. Known for his profound lyrics, charismatic persona, and activism, Tupac\'s legacy continues to inspire millions around the globe. Recent developments have reignited interest in the mystery surrounding his untimely passing. Fans and researchers alike continue to piece together evidence, fueling theories about what really happened on that fateful night in Las Vegas in 1996. From documentaries to new investigations, Tupac\'s story remains as relevant as ever.',
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
	const visibleNewsCount = 8;
	const hiddenNews = newsData.slice(visibleNewsCount);

	function createNewsItem(news) {
		const newsItem = document.createElement('div');
		newsItem.classList.add('news-section__item');
		newsItem.innerHTML = `
		<div class="news-section__image">
			<img src="${news.image}" alt="${news.title}">
		</div>
		<div class="news-section__content">
			<h4>${news.title}</h4>
			<p class="news-description">${news.description}</p>
			<span class="news-meta">${news.meta}</span>
		</div>
	`;
		return newsItem;
	}

	newsData.slice(0, visibleNewsCount).forEach(news => {
		const newsItem = createNewsItem(news);
		newsContainer.appendChild(newsItem);
	});

	const readMoreContainer = document.createElement('div');
	readMoreContainer.classList.add('read-more-container');

	const readMoreButton = document.createElement('button');
	readMoreButton.textContent = 'Read More';
	readMoreButton.classList.add('btn','btn--dark');
	readMoreContainer.appendChild(readMoreButton);

	const latestNewsSection = document.querySelector('.news-section');
	latestNewsSection.parentElement.appendChild(readMoreContainer);

	readMoreButton.addEventListener('click', function() {
		hiddenNews.forEach(news => {
			const newsItem = createNewsItem(news);
			newsContainer.appendChild(newsItem);
		});

		readMoreContainer.remove();
	});
});