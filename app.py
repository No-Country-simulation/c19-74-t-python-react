from flask import Flask
from flask_cors import CORS
from src.routes import rutas

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

app.register_blueprint(rutas.main)

if __name__ == "__main__":
    app.run(debug=True)