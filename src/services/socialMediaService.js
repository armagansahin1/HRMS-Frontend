import axios from "axios";

export default class SocialMediaService{

    getByCandidateId(candidateId){
       return axios.get(`http://localhost:8080/api/SocialAccountOfCandidate/getByCandidateId?candidateId=${candidateId}`)
    }
}

