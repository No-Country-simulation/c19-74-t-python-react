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
            i = 0
            data = {"rol":"estudiante","nombre":estudiante[0],"seccion":estudiante[1],"materias":[]}
            for nota in notas:
                data["materias"].append({})
                data["materias"][i]["maestro"] = nota[2]
                data["materias"][i]["materia"] = nota[3]
                data["materias"][i]["nota"] = nota[4]
                data["materias"][i]["feedback"] = nota[5]
                i+=1
            return data
    
    elif padre:
        notas = db.mostrar_notas_estudiante(correo)
        i = 0
        data = {"rol":"padre","hijos":[]}
        valor = []
        for estudiante in notas:
            if estudiante[0] not in valor:
                data["hijos"].insert(i,{"nombre":estudiante[0],"seccion":estudiante [1],"materias":[]})
                data["hijos"][i]["materias"].append({})
                data["hijos"][i]["materias"][0]["maestro"] = estudiante[2]
                data["hijos"][i]["materias"][0]["materia"] = estudiante[3]
                data["hijos"][i]["materias"][0]["nota"] = estudiante[4]
                data["hijos"][i]["materias"][0]["feedback"] = estudiante[5]

                valor.append(estudiante[0])
                i+=1
            else:
                index = valor.index(estudiante[0])
                data["hijos"][index]["materias"].append({})
                data["hijos"][index]["materias"][-1]["maestro"] = estudiante[2]
                data["hijos"][index]["materias"][-1]["materia"] = estudiante[3]
                data["hijos"][index]["materias"][-1]["nota"] = estudiante[4]
                data["hijos"][index]["materias"][-1]["feedback"] = estudiante[5]
    
        return data

    elif maestro:
        i = 0
        notas = db.mostrar_notas_maestro("mario@mario")
        data = {"rol":"docente","grados":[]}
        valor = []
        for nota in notas:
            if nota[3] not in valor:
                data["grados"].append({})
                data["grados"][i][nota[3]] = [{}]
                data["grados"][i][nota[3]][0]["estudiantes"] = {"nombre":nota[0],"email":nota[1],"materia":nota[2],"nota":nota[4],"feedback":nota[5]}
                valor.append(nota[3])
                i+=1
            
            else:
                index = valor.index(nota[3])
                data["grados"].append({})
                data["grados"][index][nota[3]] = [{}]
                data["grados"][index][nota[3]][0]["estudiantes"] = {"nombre":nota[0],"email":nota[1],"materia":nota[2],"nota":nota[4],"feedback":nota[5]}          
    
        return data

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
    

    