import { combineReducers } from "redux";
import welcome from "./counter";
import counter from "./counter";

const rootReducer = combineReducers({
  welcomeReducer: welcome,
  counterReducer: counter
});

export default rootReducer;
