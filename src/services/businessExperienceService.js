import axios from "axios";

export default class BusinessExperienceService{
    getByCandidateIdOrderByOutDateDesc(candidateId){
        return axios.get(`http://localhost:8080/api/BusinessExperiences/getByCandidateIdOrderByOutDateDesc?candidateId=${candidateId}`)
    }
}