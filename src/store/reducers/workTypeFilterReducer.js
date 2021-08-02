import { CHANGE_WORK_TYPE } from "../actions/workTypeFilterActions";
import { workType } from "../initialValues/workTypeFilterValue";

const initialState = {
    workType:workType
}

export default function workTypeFilterReducer(state=initialState.workType,{payload,type}){
    switch (type) {
        case CHANGE_WORK_TYPE:
            
            return payload
    
        default:
            return state
    }
}