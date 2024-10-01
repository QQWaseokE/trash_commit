from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


# 간단한 라우트 (API 엔드포인트)
@app.route("/flaskTest/<int:id>", methods=["GET"])
def test(id):
    print(f"Received request for ID {id}")
    data = {
        0: {"data": "Order 0 data"},
        1: {"data": "Order 1 data"},
        2: {"data": "Order 2 data"},
        3: {"data": "Order 3 data"},
        4: {"data": "Order 4 data"},
        5: {"data": "Order 5 data"},
        6: {"data": "Order 6 data"},
        7: {"data": "Order 7 data"},
        8: {"data": "Order 8 data"},
        9: {"data": "Order 9 data"},
    }
    return jsonify(data.get(id, {"data": "Order not found"}))


if __name__ == "__main__":
    app.run("0.0.0.0", port=5001, debug=True)
