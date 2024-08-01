#librerias
from flask import Blueprint,jsonify,request
import pdfkit
from flask_cors import CORS,cross_origin

#modulos
import src.database.db_postgres as db #se llama a la base de datos

#se crea el blueprint de la ruta para incorporarse en app.py
main = Blueprint('rutas_estudiantes', __name__)
cors = CORS(main)

@main.route("/notas",methods=["get"])
def mostrar_notas():
    email = request.form.get("email")
    data = db.mostrar_notas_estudiante(email)


    return jsonify(data)

@main.route("/descargar")
def hello():
    email = request.form.get("email")
    nombre = request.form.get("nombre")
    path_wkhtmltopdf = r'C:\Program Files\wkhtmltopdf\bin\wkhtmltopdf.exe'
    config = pdfkit.configuration(wkhtmltopdf=path_wkhtmltopdf)
        
    pdfkit.from_url(f"http://127.0.0.1:5000/notas?email={email}", f"C:/Users/frost/Downloads/notas {nombre}.pdf", configuration=config)
    return "notas descargadas"


@cross_origin(allow_headers=['Content-Type']) 
@main.route("/login",methods=["post"])
def inicio_sesion():
    correo = request.form.get("email")
    contraseña = request.form.get("password")
    estudiante =db.fn_get_estudiante(correo,contraseña)
    padre =db.fn_get_padre(correo,contraseña)
    maestro =db.fn_get_maestro(correo,contraseña)
    if estudiante:
        notas = db.mostrar_notas_estudiante(correo)
        notas.append({"rol": "estudiante"})
        return notas
    elif padre:
        notas = db.mostrar_notas_estudiante(correo)
        notas.append({"rol": "padre"})
        return notas
    elif maestro:
        notas = db.mostrar_notas_maestro(correo)
        notas.append({"rol": "maestro"})
        return notas
    else:
        return {"error": "Credenciales incorrectas"}
    
@main.route("/subir_notas",methods=["post"])
def subir_notas():
    maestro = request.form.get("maestro")
    nota = request.form.get("nota")
    feedback = request.form.get("feedback")
    estudiante = request.form.get("estudiante")
    db.fn_subir_notas(estudiante,maestro,nota,feedback)
    return "notas actualizadas"
    

    