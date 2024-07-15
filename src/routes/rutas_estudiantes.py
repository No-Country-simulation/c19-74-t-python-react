#librerias
from flask import Blueprint,jsonify
import pdfkit

#modulos
import src.database.db_postgres as db #se llama a la base de datos

#se crea el blueprint de la ruta para incorporarse en app.py
main = Blueprint('rutas_estudiantes', __name__)



@main.route("/")
def index():
    return "Hello, World!"

@main.route("/notas")
def mostrar_notas():

    data = db.mostrar_notas_estudiante(4)


    return jsonify(data)

@main.route("/descargar")
def hello():

    path_wkhtmltopdf = r'C:\Program Files\wkhtmltopdf\bin\wkhtmltopdf.exe'
    config = pdfkit.configuration(wkhtmltopdf=path_wkhtmltopdf)
    pdfkit.from_url("http://127.0.0.1:5000/notas", "notas.pdf", configuration=config)
    return "notas descargadas"