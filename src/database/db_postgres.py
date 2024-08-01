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
        'select estudiantes.nombre, maestros.nombre, materias.nombre, notas.nota, notas.feedback from "rendimiento escolar".notas left join "rendimiento escolar".estudiantes on notas.email_estudiante = estudiantes.email left join "rendimiento escolar".maestros on notas.email_maestro = maestros.email left join "rendimiento escolar".materias on notas.id_materia = materias.id_materia left join "rendimiento escolar".padres on estudiantes.id_padre = padres.id_padre where estudiantes.email = %s or padres.email = %s ',
       
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
                'select estudiantes.nombre, materias.nombre, estudiantes.grado, notas.nota, notas.feedback from "rendimiento escolar".notas left join "rendimiento escolar".estudiantes on notas.email_estudiante = estudiantes.email left join "rendimiento escolar".maestros on notas.email_maestro = maestros.email left join "rendimiento escolar".materias on notas.id_materia = materias.id_materia where maestros.email = %s ',

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
