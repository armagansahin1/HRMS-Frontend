import axios from "axios";

export default class EducationService{
    getByCandidateIdOrderBygraduationDesc(candidateId){
        return axios.get(`http://localhost:8080/api/Educations/getByCandidateIdOrderBygraduationDesc?candidateId=${candidateId}`)
    }
}