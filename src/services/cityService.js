import axios from "axios";

export default class CityService{

    getAll(){
        return axios.get("http://localhost:8080/api/Cities/getAll")
    }

    getAllOrderByCityNameAsc(){
        return axios.get("http://localhost:8080/api/Cities/getAllByOrderByCityNameAsc")
    }

   
}