import axios from "axios";

export default class AuthService{

    employerForRegister(employerForRegisterDto){
        return axios.post(`http://localhost:8080/api/Auth/registerForEmployer`,employerForRegisterDto)
    }

    candidateForRegister(candidateForRegisterDto){
        return axios.post(`http://localhost:8080/api/Auth/registerForCandidate`,candidateForRegisterDto)
    }
}