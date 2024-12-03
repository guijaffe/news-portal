const today = new Date();
const currentDay = today.getDate();
const currentMonthIndex = today.getMonth();
const months = [
	'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
	'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];
const monthButtons = document.getElementById('monthButtons');
const prevMonthButton = document.getElementById('prevMonth');
const nextMonthButton = document.getElementById('nextMonth');

const monthlyRedData = Array.from({ length: 12 }, () => Math.round(Math.random() * 1000));
const monthlyBlueData = Array.from({ length: 12 }, () => Math.round(Math.random() * 1000));
function createMonthButtons() {
	const totalButtons = 12;

	for (let i = 0; i < totalButtons; i++) {
		const monthIndex = (currentMonthIndex + i) % months.length;
		const monthText = `${months[monthIndex]}, ${currentDay}`;
		const button = document.createElement('button');

		button.textContent = monthText;
		button.className = 'btn btn-primary';
		button.addEventListener('click', () => handleMonthSelect(button));

		monthButtons.appendChild(button);
	}
}

function handleMonthSelect(button) {
	Array.from(monthButtons.children).forEach(btn => btn.classList.remove('btn--active'));

	button.classList.add('btn--active');

	const selectedMonth = button.textContent.split(',')[0];
	updateMonthData(selectedMonth);
}

function updateMonthData(month) {
	const monthIndex = months.indexOf(month);

	document.getElementById('redData').innerHTML = `
        <span class="news-meta">Chart 1:</span>
        <div class='chart-result'>${monthlyRedData[monthIndex]} GB</div>
    `;

	document.getElementById('blueData').innerHTML = `
        <span class="news-meta">Chart 2:</span>
        <div class='chart-result'>${monthlyBlueData[monthIndex]} GB</div>
    `;
}

function scrollMonthSlider(direction) {
	setTimeout(() => {
		if (direction === 'next') {
			monthButtons.appendChild(monthButtons.children[0]);
		} else if (direction === 'prev') {
			monthButtons.insertBefore(monthButtons.children[monthButtons.children.length - 1], monthButtons.firstChild);
		}
	}
)}

prevMonthButton.addEventListener('click', () => scrollMonthSlider('prev'));
nextMonthButton.addEventListener('click', () => scrollMonthSlider('next'));

createMonthButtons();

const dates = Array.from({ length: 31 }, (_, i) => `${i + 1} Aug`);
const dataValues1 = Array.from({ length: 31 }, () => Math.random());
const dataValues2 = Array.from({ length: 31 }, () => Math.random());

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
			tooltip: {
				callbacks: {
					title: function (tooltipItems) {
						const index = tooltipItems[0].dataIndex;
						const date = dates[index];
						return `${date}`;
					},
					label: function (tooltipItem) {
						const value = tooltipItem.raw;
						return `${(value * 1000).toFixed(0)} GB`;
					},
				},
				backgroundColor: '#fff',
				borderWidth: 1,
				titleColor: '#000',
				bodyColor: '#000',
				padding: 10,
				titleFont: {
					size: 16,
					weight: 'normal',
				},
				bodyFont: {
					size: 16,
				},
				borderColor: function (tooltipItem) {
					if (tooltipItem.tooltipItems && tooltipItem.tooltipItems.length > 0) {
						const datasetIndex = tooltipItem.tooltipItems[0].datasetIndex;
						return tooltipItem.chart.data.datasets[datasetIndex].borderColor;
					}
					return '#000';
				},
				displayColors: false,
			},
			legend: {
				display: false,
			},
		},
		scales: {
			x: { grid: { display: false } },
			y: {
				beginAtZero: true,
				grid: { display: false },
				suggestedMax: 1.0,
			},
		},
		interaction: {
			intersect: false,
		},
		elements: {
			line: { tension: 0 },
		},
		onHover: (event, chartElement) => {
			event.native.target.style.cursor = chartElement.length ? 'pointer' : 'default';
		},
	},
	plugins: [
		{
			beforeDatasetsDraw: chart => {
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
