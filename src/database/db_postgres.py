#librerias
from psycopg2 import connect
from os import environ

#conexion a la base de datos
def connect_to_db() -> connect:

    conn = connect(
    user=environ.get("DATABASE_USER"),
    password=environ.get("DATABASE_PASS"),
    host=environ.get("DATABASE_HOST"),
    database=environ.get("DATABASE_NAME"))

    return conn

#permite mostrar las notas de un estudiante de terminado
def mostrar_notas_estudiante(estudiante) -> list|None:
    conn = connect_to_db()
    cursor = conn.cursor()
    cursor.execute(
        'select estudiantes.nombre,estudiantes.grado, maestros.nombre, materias.nombre, notas.nota, notas.feedback from "rendimiento escolar".notas left join "rendimiento escolar".estudiantes on notas.email_estudiante = estudiantes.email left join "rendimiento escolar".maestros on notas.email_maestro = maestros.email left join "rendimiento escolar".materias on notas.id_materia = materias.id_materia left join "rendimiento escolar".padres on estudiantes.id_padre = padres.id_padre where estudiantes.email = %s or padres.email = %s ',
       
       (estudiante,estudiante,)
        )
    #la query anterior retorna una tupla con este formato (estudiante, maestro, materia, nota), o None si no hay notas
    user = cursor.fetchall()
    conn.close()

    return user

#permite mostrar las notas que ha colocado un maestro
def mostrar_notas_maestro(maestro) -> list|None:
    conn = connect_to_db()
    cursor = conn.cursor()
    cursor.execute(
                'select estudiantes.nombre,estudiantes.email, materias.nombre, estudiantes.grado, notas.nota, notas.feedback from "rendimiento escolar".notas left join "rendimiento escolar".estudiantes on notas.email_estudiante = estudiantes.email left join "rendimiento escolar".maestros on notas.email_maestro = maestros.email left join "rendimiento escolar".materias on notas.id_materia = materias.id_materia where maestros.email = %s ',

                (maestro,)
                )
    #la query anterior retorna una lista de tuplas con este formato (estudiante, materia, grado, nota), o None si no hay notas
    user = cursor.fetchall()
    conn.close()

    return user

def fn_get_estudiante(correo,contraseña) -> list|None:
    connection = connect_to_db()
    cursor = connection.cursor()
    cursor.execute('select nombre, grado from "rendimiento escolar".estudiantes where email =%s and contraseña =%s ',(correo,contraseña))
    user = cursor.fetchone()
    connection.close()
    return user

def fn_get_maestro(correo,contraseña) -> list|None:
    connection = connect_to_db()
    cursor = connection.cursor()
    cursor.execute('select nombre from "rendimiento escolar".maestros where email =%s and contraseña =%s ',(correo,contraseña))
    user = cursor.fetchone()
    connection.close()
    return user

def fn_get_padre(correo,contraseña) -> list|None:
    connection = connect_to_db()
    cursor = connection.cursor()
    cursor.execute('select nombre from "rendimiento escolar".padres where email =%s and contraseña =%s ',(correo,contraseña))
    user = cursor.fetchone()
    connection.close()
    return user

def fn_subir_notas(estudiante,maestro,nota,feedback):
    connection = connect_to_db()
    cursor = connection.cursor()
    cursor.execute('insert into "rendimiento escolar".notas (email_estudiante,email_maestro,nota,feedback,id_materia) values (%s,%s,%s,%s,(select id_materia  from "rendimiento escolar".materias where nombre in (select materia from "rendimiento escolar".maestros where email = %s) ))',(estudiante,maestro,nota,feedback,maestro))
    connection.commit()
    connection.close()

def get_eventos():
    connection = connect_to_db()
    cursor = connection.cursor()
    cursor.execute('select * from "rendimiento escolar".eventos')
    user = cursor.fetchall()
    connection.close()
    return user

def get_mensajes_recibidos(correo):
    connection = connect_to_db()
    cursor = connection.cursor()
    cursor.execute('select * from "rendimiento escolar".mensajes where receptor =%s',(correo,))
    user = cursor.fetchall()
    connection.close()
    return user

def get_mensajes_enviados(correo):
    connection = connect_to_db()
    cursor = connection.cursor()
    cursor.execute('select * from "rendimiento escolar".mensajes where remitente =%s',(correo,))
    user = cursor.fetchall()
    connection.close()
    return user

def enviar_mensaje(receptor,mensaje,remitente):
    connection = connect_to_db()
    cursor = connection.cursor()
    cursor.execute('insert into "rendimiento escolar".mensajes (receptor,mensaje,remitente) values (%s,%s,%s)',(receptor,mensaje,remitente))
    connection.commit()

def mensaje_get_padres(correo):
    connection = connect_to_db()
    cursor = connection.cursor()
    cursor.execute('select padres.email from "rendimiento escolar".padres left join "rendimiento escolar".estudiantes on padres.id_padre = estudiantes.id_padre where estudiantes.email = %s ',(correo,))
    user = cursor.fetchall()
    connection.close()
    return user

def mensaje_get_maestros(correo):
    connection = connect_to_db()
    cursor = connection.cursor()
    cursor.execute('select maestros.email, maestros.materia from "rendimiento escolar".maestros left join "rendimiento escolar".notas on maestros.email = notas.email_maestro where notas.email_estudiante = %s ',(correo,))
    user = cursor.fetchall()
    connection.close()
    return user