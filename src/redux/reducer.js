import { ACCES, CATCH_INFO, GET_ALUMNO } from "./actionsTypes";
const initialState = {
  info: {},
  alumno: {},
};
const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CATCH_INFO:
      return {
        ...state,
        info: payload,
      };
    case GET_ALUMNO:
      return {
        ...state,
        alumno: payload,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
