from flask import Flask
from flask_cors import CORS
from src.routes import rutas_estudiantes

app = Flask(__name__)
CORS(app)

app.register_blueprint(rutas_estudiantes.main)

if __name__ == "__main__":
    app.run(debug=True)