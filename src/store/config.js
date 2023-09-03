import { combineReducers,createStore } from "redux";
import { svReducer } from "./reducers/svReducer";


const rootReducer = combineReducers({
    svReducer,
});

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())