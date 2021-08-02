import axios from "axios"

export default class EmployerService{
    getEmployers(){
        return axios.get("http://localhost:8080/api/Employers/getall")
    }

    addEmployer(employerForRegisterDto){
        return axios.post("http://localhost:8080/api/Employers/add",employerForRegisterDto)
    }
}