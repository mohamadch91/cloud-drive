import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://192.168.220.23:8000/storage/api/";

class UserService {
  getPublicContent() {
    return axios.get(API_URL + "all");
  }

  getUserBoard() {
    return axios.get(API_URL + "user", { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + "mod", { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + "admin", { headers: authHeader() });
  }
  getUserFiles(){
    // console.log(authHeader());
    // console.log("salam");
    return axios.get(API_URL  ,  { headers: {Authorization:authHeader()} });
  }
  geturlfile(url){
    return axios.get( url );
  }
  uploadUserFile(formData){
    return axios.post(API_URL  , formData , { headers: { Authorization:authHeader() } });
  }
}

export default new UserService();
