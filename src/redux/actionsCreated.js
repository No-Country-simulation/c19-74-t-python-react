import axios from "axios";
import info from "../data/persona.json";
import alumnos from "../data/alumnos.json";
import { GET_ALUMNO } from "./actionsTypes";
const instance = axios.create({
  baseURL: "http://localhost:500",
  timeout: 10000,
});
const data = {};

export function catch_info(data) {
  console.log("hay data");
  console.log(data);
  return async function (dispatch) {
    try {
      dispatch({
        type: "CATCH_INFO",
        payload: data,
      });
    } catch (error) {
      console.log("algo ocurrio mientras capturava el email");
    }
  };
}
