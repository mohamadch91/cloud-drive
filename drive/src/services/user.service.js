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
    return axios.get(API_URL  ,  { headers: {Authorization:authHeader()} });
  }
  uploadUserFile(file){
   
   
    return axios.post(API_URL  , file , { headers: {'Content-Type': 'multipart/form-data', Authorization:authHeader() } });
  }
}

export default new UserService();
