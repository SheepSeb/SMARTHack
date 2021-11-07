import axios from "axios";
import { get } from "svelte/store";
import { userEmail, userPic } from "./store";
export default axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
      "Content-type": "application/json"
    }
  });

export function makeReq(alg,password,username){
    axios.get('http://localhost:8000/send/' + get(userEmail)+'/'+alg+'/'+password+'/'+username+'/'+get(userPic))
    .then(function (response) {
        console.log(response);
    })
}

export function showPasswords(){
    axios.get('http://localhost:8000/giveMe/' + get(userEmail))
    .then(function(response){
        console.log(response);
    })
}