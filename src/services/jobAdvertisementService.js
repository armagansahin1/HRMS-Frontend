import axios from "axios"

export default class JobAdvertisementService{
    addJobAdvertisement(jobAdvertisement){
       return axios.post("http://localhost:8080/api/jobAdvertisements/add",jobAdvertisement)
    }

    getAdvertisements(){
        return axios.get("http://localhost:8080/api/jobAdvertisements/getAll")
    }

    getAdvertisementsPageFormat(pageNo,pageSize){
        return axios.get(`http://localhost:8080/api/jobAdvertisements/getPageFormat?pageNo=${pageNo}&pageSize=${pageSize}`)
    }

    changeAdvertismentStatus(id,status){
        return axios.post(`http://localhost:8080/api/jobAdvertisements/changeStatus?id=${id}&status=${status}`)
    }
    getAllOrderByRelaseDateDesc(){
        return axios.get("http://localhost:8080/api/jobAdvertisements/findAllByOrderByRelaseDateDesc")
    }
    
    getByAdvertismentStatusTrueOrderByRelaseDateDesc(){
        return axios.get("http://localhost:8080/api/jobAdvertisements/getByAdvertismentStatusTrueOrderByRelaseDateDesc")
    }
    


}