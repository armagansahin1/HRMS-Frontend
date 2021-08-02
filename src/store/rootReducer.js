import { combineReducers } from "redux";
import jobAdvertisementsReducer from "./reducers/jobAdvertisementsReducer";
import workTypeFilterReducer from "./reducers/workTypeFilterReducer";
import locationFilterReducer from "./reducers/locationFilterReducer"


const rootReducer = combineReducers({
    workType:workTypeFilterReducer,
    location : locationFilterReducer,
    jobAdvertisements : jobAdvertisementsReducer
})

export default rootReducer