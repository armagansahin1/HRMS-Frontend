export const CHANGE_LOCATION = "CHANGE_LOCATION"

export function changeLocation(location) {
    return{
        payload:location,
        type:CHANGE_LOCATION
    }
}