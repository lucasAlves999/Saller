from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Permite que o React acesse a API sem bloqueios de CORS

@app.route('/api/cadastrar', methods=['POST'])
def cadastrar():
    data = request.json
    print('Dados recebidos:', data)
    return jsonify({'mensagem': 'Usuário cadastrado com sucesso!'})

if __name__ == '__main__':
    app.run(port=5000, debug=True)
