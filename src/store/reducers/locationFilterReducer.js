import { location } from "../initialValues/locationFilterValue";
import { CHANGE_LOCATION } from "../actions/locationFilterActions";
const initialState = {
    location : location
}

export default function locationFilterReducer(state = initialState.location,{payload,type}) {
    switch (type) {
        case CHANGE_LOCATION:
            
            return payload
    
        default:
            return state
    }
}