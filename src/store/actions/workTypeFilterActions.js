export const CHANGE_WORK_TYPE = "CHANGE_WORK_TYPE"

export function changeWorkType(workType){
    return {
        payload : workType,
        type : CHANGE_WORK_TYPE
    }
}