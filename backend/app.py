from flask import Flask, jsonify
from flask_cors import CORS
from arbitrage_scanner import get_arbitrage_opportunities
from price_predictor import get_price_predictions

app = Flask(__name__)
CORS(app)  # Enable CORS for React frontend

@app.route('/arbitrage', methods=['GET'])
def arbitrage():
    opportunities = get_arbitrage_opportunities()
    return jsonify(opportunities)

@app.route('/predict', methods=['GET'])
def predict():
    predictions = get_price_predictions()
    return jsonify(predictions)

if __name__ == '__main__':
    app.run(debug=True)
