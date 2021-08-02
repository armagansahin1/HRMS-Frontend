export const GET_JOB_ADVERTİSEMENTS_PUBLİSHED = "GET_JOB_ADVERTİSEMENTS_PUBLİSHED"

export function getJobAdvertisements(jobAdvertisements) {
    return{
        payload : jobAdvertisements,
        type:GET_JOB_ADVERTİSEMENTS_PUBLİSHED
    }
}