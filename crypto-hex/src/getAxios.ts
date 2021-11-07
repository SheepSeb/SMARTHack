import axios from "axios";
export default axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
      "Content-type": "application/json"
    }
  });

export function makeReq(){
    axios.get('http://localhost:8000/testing/' + 'a')
    .then(function (response) {
        console.log(response);
    })
}
