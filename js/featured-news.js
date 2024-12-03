const featuredNews = [
	{
		title: "Matt Gaetz quits House after he is picked by Trump for attorney general role",
		description: "Matt Gaetz is leaving the House after Donald Trump recommended him for the attorney general position.",
		img: "/assets/news/Trump.jpg",
		url: "/ssss",
		category: "Politics",
	},
	{
		title: "World’s largest coral found - bigger than a blue whale",
		description:
			"From the surface, it looked like a shipwreck, long forgotten on the seabed. But when cinematographer Manu San Félix dove down to take a closer look, he was amazed to find a huge, sprawling coral. That was the moment the National Geographic Society’s Pristine Seas team says they discovered the world’s largest coral colony during an October 2024 expedition in Solomon Islands, an archipelago in the southwest Pacific Ocean.",
		img: "/assets/news/coral.jpg",
		url: "#",
		category: "Science",
	},
	{
		title: "Red Hot Chili Peppers: A Legacy of Innovation and Musical Evolution",
		description:
			"The Red Hot Chili Peppers (RHCP) are one of the most iconic and influential rock bands in the world, known for their unique blend of funk, punk, rock, and psychedelic music. Formed in 1983 in Los Angeles, California, the band has seen numerous lineup changes but has remained a staple in the music industry due to their innovative sound and energetic performances. RHCP's music often features a fusion of soulful melodies, funky basslines, and driving rhythms, with lyrics that touch on themes of love, personal struggles, and California life. The band first gained significant attention in the late 1980s and early 1990s with albums like Mother's Milk and Blood Sugar Sex Magik, the latter of which includes hits such as 'Under the Bridge' and 'Give It Away.' Their music video for 'Give It Away' won several awards and helped propel them into the mainstream. Over the years, RHCP has consistently reinvented their sound while retaining their core style. Albums like Californication, By the Way, and Stadium Arcadium solidified their place in rock history, with their songs achieving critical and commercial success. With hits like 'Scar Tissue,' 'Californication,' 'Dani California,' and 'Snow (Hey Oh),' the band has earned a reputation for producing timeless tracks that resonate with a wide audience. The band's dynamic performances and charismatic frontman, Anthony Kiedis, have helped them build a loyal fan base. Flea's distinctive basslines, Chad Smith's powerful drumming, and John Frusciante's innovative guitar work have made RHCP one of the most beloved bands in rock music. Their legacy continues to grow, with the band receiving numerous accolades, including multiple Grammy Awards and inductions into the Rock and Roll Hall of Fame. RHCP's influence on modern music and their ability to evolve with each album has ensured that they remain a major force in the rock world, captivating new generations of fans while retaining the loyalty of long-time listeners.",
		img: "/assets/news/rhcp.jpg",
		url: "/rhcp",
		category: "Music",
	},
	{
		title: "Lorem ipsum dolor sit amet",
		description:
			"Nulla ornare velit vel faucibus porta. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut dui lectus, vestibulum a odio sed, imperdiet porttitor elit. Quisque ut enim mauris. Morbi in iaculis turpis. Aenean vel eros sagittis, sollicitudin enim auctor, euismod lacus. Aliquam accumsan ut neque in feugiat. Sed pulvinar ipsum quam, posuere finibus velit tincidunt in. Cras eleifend nulla magna, vitae imperdiet elit semper et. Nullam quis feugiat diam. Vivamus facilisis est non condimentum ultrices. Cras mattis sem a mauris fermentum, vel egestas ex pharetra. Aenean lectus mauris, consequat a ornare at, sagittis id urna. Pellentesque nibh lorem, lacinia vestibulum interdum sed, molestie a ante. Mauris porttitor dui a tincidunt ultricies. Morbi vel lacinia sem.",
		img: "/assets/news/lorem.jpg",
		url: "#",
		category: "Lifestyle",
	},
	{
		title: "The New Year Cat: Your Furry Guide to a Purrfect Year!",
		description: "Forget about resolutions — this New Year, it’s all about the cat! And not just any cat, but the New Year cat, your personal furry guru who’s here to ensure that 2024 is as smooth as a well-groomed feline's fur. Legend has it that the New Year cat is a professional in bringing good vibes, a dash of luck, and a whole lot of fun into your life. With its cheeky grin and playful antics, this little furball knows how to make sure your year is filled with endless opportunities for naps, snacks, and, of course, laughter.",
		img: "/assets/news/cat.jpg",
		url: "#",
		category: "Lifestyle",
	},
];

// Utility function for generating random time
const getRandomTime = () => `${Math.floor(Math.random() * 12) + 1} hr ago`;

let mainNews = null;
let autoChangeTimer = null;

const featuredNewsContainer = document.getElementById("featuredNews");
const mainNewsTitle = document.getElementById("mainNewsTitle");
const mainNewsImage = document.getElementById("mainNewsImage");

// Updates main news section
function updateMainNews(news) {
	mainNews = news;
	mainNewsTitle.textContent = news.title;
	mainNewsImage.src = news.img;
	mainNewsImage.alt = news.title;
}

// Displays featured news (4 items)
function displayFeaturedNews() {
	const randomNews = featuredNews.filter(news => news !== mainNews);

	const shuffledNews = randomNews.sort(() => Math.random() - 0.5).slice(0, 4);

	featuredNewsContainer.innerHTML = ""; // Clear old news

	shuffledNews.forEach(news => {
		const newsItem = document.createElement("div");
		newsItem.classList.add("news-item");
		const time = getRandomTime();
		newsItem.innerHTML = `
			<h2>${news.title}</h2>
			<p>${news.description}</p>
			<span class="news-meta">${time} | ${news.category}</span>
		`;

		// Attach click handler
		newsItem.addEventListener("click", () => {
			updateMainNews(news);
			resetAutoChangeTimer();
			displayFeaturedNews();
		});

		featuredNewsContainer.appendChild(newsItem);
	});
}

// Initializes main news with a random entry
function initializeMainNews() {
	const randomIndex = Math.floor(Math.random() * featuredNews.length);
	const initialNews = featuredNews[randomIndex];

	updateMainNews(initialNews);
	displayFeaturedNews();
}

// Changes main news automatically every 10 seconds
function autoChangeMainNews() {
	autoChangeTimer = setInterval(() => {
		const randomIndex = Math.floor(Math.random() * featuredNews.length);
		const nextNews = featuredNews[randomIndex];

		if (mainNews.title !== nextNews.title) {
			updateMainNews(nextNews);
			displayFeaturedNews();
		}
	}, 10000);
}

// Resets the auto-change timer
function resetAutoChangeTimer() {
	clearInterval(autoChangeTimer);
	autoChangeMainNews();
}

// Initialize everything
initializeMainNews();
autoChangeMainNews();
