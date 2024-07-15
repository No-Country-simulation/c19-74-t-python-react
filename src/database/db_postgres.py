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
def mostrar_notas_estudiante(estudiante) -> tuple|None:
    conn = connect_to_db()
    cursor = conn.cursor()
    cursor.execute(
        'select estudiantes.nombre, maestros.nombre, materias.nombre, nota from "rendimiento escolar".notas left join "rendimiento escolar".estudiantes on notas.id_estudiante = estudiantes.id_estudiante left join "rendimiento escolar".maestros on notas.id_maestro = maestros.id_maestro left join "rendimiento escolar".materias on notas.id_materia = materias.id_materia where estudiantes.id_estudiante = %s ',
       
       (estudiante,)
        )
    #la query anterior retorna una tupla con este formato (estudiante, maestro, materia, nota), o None si no hay notas
    user = cursor.fetchone()
    conn.close()

    return user

#permite mostrar las notas que ha colocado un maestro
def mostrar_notas_maestro(maestro) -> list|None:
    conn = connect_to_db()
    cursor = conn.cursor()
    cursor.execute(
                'select estudiantes.nombre, materias.nombre, estudiantes.grado, nota from "rendimiento escolar".notas left join "rendimiento escolar".estudiantes on notas.id_estudiante = estudiantes.id_estudiante left join "rendimiento escolar".maestros on notas.id_maestro = maestros.id_maestro left join "rendimiento escolar".materias on notas.id_materia = materias.id_materia where maestros.id_maestro = %s ',

                (maestro,)
                )
    #la query anterior retorna una lista de tuplas con este formato (estudiante, materia, grado, nota), o None si no hay notas
    user = cursor.fetchall()
    conn.close()

    return user