const stockSelect = document.getElementById("stockSelect");
const predictionText = document.getElementById("prediction");
const accuracyText = document.getElementById("accuracy");

async function loadPrediction() {

    const stock = stockSelect.value;

    try {

        const response = await fetch(`http://127.0.0.1:5000/predict/${stock}`);
        const data = await response.json();

        predictionText.innerHTML =
        `Today's Prediction: ${data.prediction}`;

        accuracyText.innerHTML =
        `Accuracy: ${data.accuracy}%`;

        loadChart(stock);

    } catch (error) {

        console.log(error);

        predictionText.innerHTML =
        "Prediction Error";

        accuracyText.innerHTML =
        "Accuracy Error";
    }
}

function loadChart(stock) {

    document.getElementById("chartContainer").innerHTML = "";

    let symbol = "BINANCE:BTCUSDT";

    if(stock === "gold") {
        symbol = "TVC:GOLD";
    }

    else if(stock === "apple") {
        symbol = "NASDAQ:AAPL";
    }

    else if(stock === "tesla") {
        symbol = "NASDAQ:TSLA";
    }

    else if(stock === "ethereum") {
        symbol = "BINANCE:ETHUSDT";
    }

    else if(stock === "eurusd") {
        symbol = "FX:EURUSD";
    }

    new TradingView.widget({
        "width": "100%",
        "height": 500,
        "symbol": symbol,
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "1",
        "locale": "en",
        "container_id": "chartContainer"
    });
}

stockSelect.addEventListener("change", loadPrediction);

loadPrediction();

