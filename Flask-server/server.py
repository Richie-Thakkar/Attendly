from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/login', methods=['POST'])
def login():
    email = request.json['email']
    password = request.json['password']
    return jsonify({'success':'true'})


if __name__ == '__main__':
    app.run(debug=True)