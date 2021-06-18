import axios from "axios"

export default class JobAdvertisementService{
    addJobAdvertisement(jobAdvertisement){
       return axios.post("http://localhost:8080/api/jobAdvertisements/add",jobAdvertisement)
    }
}