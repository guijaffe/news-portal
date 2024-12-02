
// Создание кнопок месяцев
const today = new Date();
const currentDay = today.getDate();
const months = [
	'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
	'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];
const monthButtons = document.getElementById('monthButtons');

function createMonthButtons() {
	const totalButtons = 11;
	let currentMonthIndex = today.getMonth();

	// Генерация кнопок
	for (let i = 0; i < totalButtons; i++) {
		const monthIndex = (currentMonthIndex + i) % months.length;
		const monthText = `${months[monthIndex]}, ${currentDay}`;
		const btn = document.createElement('button');
		btn.textContent = monthText;
		btn.className = 'btn btn-primary';
		btn.addEventListener('click', () => handleMonthSelect(btn));
		monthButtons.appendChild(btn);
	}

	// Установка начального выбранного месяца
	monthButtons.children[0].classList.add('selected');
}

function handleMonthSelect(button) {
	// Снимаем выделение со всех кнопок
	Array.from(monthButtons.children).forEach(btn => btn.classList.remove('selected'));
	// Выделяем текущую кнопку
	button.classList.add('selected');
	// Можно обновить данные на графике или вывести их
	console.log(`Selected month: ${button.textContent}`);
	const selectedMonth = button.textContent.split(',')[0];
	updateMonthData(selectedMonth);
}

// Функция обновления данных
function updateMonthData(month) {
	const redData = monthlyRedData[months.indexOf(month)];
	const blueData = monthlyBlueData[months.indexOf(month)];

	// Обновление текста для первого графика
	const redDataElement = document.getElementById('redData');
	redDataElement.innerHTML = `<span class="news-meta">Chart 1:</span><div class='chart-result'>${redData} GB</div>`;

	// Обновление текста для второго графика
	const blueDataElement = document.getElementById('blueData');
	blueDataElement.innerHTML = `<span class="news-meta">Chart 2:</span><div class='chart-result'>${blueData} GB</div>`;
}

createMonthButtons();

// Данные для графиков
const dates = Array.from({ length: 31 }, (_, i) => `${i + 1} Aug`);
const dataValues1 = Array.from({ length: 31 }, () => Math.random());
const dataValues2 = Array.from({ length: 31 }, () => Math.random());

const monthlyRedData = Array.from({ length: 12 }, () => (Math.random() * 100).toFixed(2));
const monthlyBlueData = Array.from({ length: 12 }, () => (Math.random() * 100).toFixed(2));

// Создание графика
const ctx = document.getElementById('myChart');
const chart = new Chart(ctx, {
	type: 'line',
	data: {
		labels: dates,
		datasets: [
			{
				data: dataValues1,
				borderWidth: 4,
				borderColor: '#c01b1e',
				pointRadius: 0,
				pointHoverRadius: 4,
				pointHoverBackgroundColor: '#c01b1e',
			},
			{
				data: dataValues2,
				borderWidth: 4,
				borderColor: '#143e95',
				pointRadius: 0,
				pointHoverRadius: 4,
				pointHoverBackgroundColor: '#143e95',
			},
		],
	},
	options: {
		plugins: {
			legend: { display: false },
			tooltip: {
				mode: 'index',
				intersect: false,
				titleFontColor: 'black',
				bodyFontColor: 'black',
				font: {
					size: 18, // Увеличиваем шрифт
				},
				callbacks: {
					label: function (tooltipItem) {
						return `${tooltipItem.dataset.label}: ${tooltipItem.raw.toFixed(2)} GB`;
					},
				},
			},
		},
		scales: {
			x: {
				grid: { display: false },
			},
			y: {
				beginAtZero: true,
				grid: { display: false },
				suggestedMax: 1.0,
				ticks: {
					stepSize: 0.1,
					callback: function (value) {
						return value === 0 ? '0' : value.toFixed(1);
					},
				},
			},
		},
		interaction: {
			mode: 'index',
			intersect: false,
		},
		elements: {
			line: { tension: 0 }, // Линии без сглаживания
		},
		onHover: function (event, chartElement) {
			const canvas = event.native.target;
			canvas.style.cursor = chartElement.length ? 'pointer' : 'default';
		},
	},
	plugins: [
		{
			beforeDatasetsDraw: function (chart) {
				if (chart.tooltip?._active?.length) {
					const ctx = chart.ctx;
					const activePoint = chart.tooltip._active[0];
					const x = activePoint.element.x;
					const yAxis = chart.scales['y'];

					ctx.save();
					ctx.beginPath();
					ctx.moveTo(x, yAxis.top);
					ctx.lineTo(x, yAxis.bottom);
					ctx.lineWidth = 1;
					ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)';
					ctx.stroke();
					ctx.restore();
				}
			},
		},
	],
});