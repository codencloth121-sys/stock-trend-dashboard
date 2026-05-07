from flask import Flask, jsonify
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)

@app.route("/predict/<stock>")
def predict(stock):

    predictions = ["BUY (Uptrend)", "SELL (Downtrend)"]

    result = {
        "stock": stock,
        "prediction": random.choice(predictions),
        "accuracy": round(random.uniform(75, 95), 1)
    }

    return jsonify(result)

if __name__ == "__main__":
    app.run(debug=True)
