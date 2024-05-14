let price = 100;
let cash = 1000;
let crypto = 0;
let basePrice = price;

const priceElement = document.getElementById("price");
const cashElement = document.getElementById("cash");
const cryptoElement = document.getElementById("crypto");
const profitElement = document.getElementById("profit");

const buyButton = document.getElementById("buyButton");
const sellButton = document.getElementById("sellButton");

const profitChartData = {
    labels: [],
    datasets: [{
        label: "Profit/Perte",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        data: [],
    }]
};

let profitChart;

function updateDisplay() {
    priceElement.textContent = price.toFixed(2);
    cashElement.textContent = cash.toFixed(2);
    cryptoElement.textContent = crypto.toFixed(2);

    const profit = (price - basePrice) * crypto;
    profitElement.textContent = profit.toFixed(2);

    profitChartData.labels.push("");
    profitChartData.datasets[0].data.push(profit);

    if (profitChart) {
        profitChart.update();
    }
}

function fluctuatePrice() {
    const change = Math.random() * 10 - 5;
    price = Math.max(1, price + change);
    updateDisplay();
}

function buyCrypto() {
    if (cash >= price) {
        cash -= price;
        crypto += 1;
        basePrice = (basePrice * (crypto - 1) + price) / crypto;
        updateDisplay();
    }
}

function sellCrypto() {
    if (crypto > 0) {
        cash += price;
        crypto -= 1;
        updateDisplay();
    }
}

buyButton.addEventListener("click", buyCrypto);
sellButton.addEventListener("click", sellCrypto);

setInterval(fluctuatePrice, 2000);

document.addEventListener("DOMContentLoaded", function () {
    const profitChartCanvas = document.getElementById("profitChart");
    profitChart = new Chart(profitChartCanvas.getContext("2d"), {
        type: "line",
        data: profitChartData,
        options: {
            responsive: true, // Désactive la responsivité
            maintainAspectRatio: true, // Empêche la conservation de l'aspect ratio par défaut
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                    },
                }],
            },
        },
    });
});

