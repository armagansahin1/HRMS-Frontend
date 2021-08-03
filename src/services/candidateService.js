import axios from "axios";

export default class CandidateService{
    getCandidates(){
      return axios.get("http://localhost:8080/api/Candidates/getall")
    }

    getCandidateDetails(candidateId){
      return axios.get(`http://localhost:8080/api/Candidates/getCandidateDetailsDto?candidateId=${candidateId}`)
    }

    add(candidate){
      return axios.post("http://localhost:8080/api/Candidates/add",candidate)
    }
}
