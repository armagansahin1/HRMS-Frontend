import { GET_JOB_ADVERTİSEMENTS_PUBLİSHED } from "../actions/jobAdveritesementActions";
import { jobAdvertisements } from "../initialValues/jobAdvertisements";

const initialValues = {
    jobAdvertisements:jobAdvertisements
}

export default function jobAdvertisementsReducer(state = initialValues.jobAdvertisements, {type,payload}) {
    switch (type) {
        case GET_JOB_ADVERTİSEMENTS_PUBLİSHED:
            
            return payload
    
        default:
            return state
    }
}