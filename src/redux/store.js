import { createStore, applyMiddleware } from "redux";
// thunk es un midelware, una funcion intermediaria , que se ejecuta cuando se hace una peticion
import thunk from "redux-thunk";

import rootReducer from "./reducer";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
