import axios from "axios";
import authHeader from "./auth-header";
export let ADD_URL="http://192.168.220.23:8000/storage/add-file/";
export let GET_URL="http://192.168.220.23:8000/storage/folder-operation/";
let Path=localStorage.getItem("Path");
const API_URL = "http://192.168.220.23:8000/storage/";

class UserService {
 
  changepath(path){
    Path=path;
  }
  getStorage(){
    return axios.get(API_URL+"used-size"  , { headers: { Authorization:authHeader() } });
  }
  getbinContent(){
    return axios.get(API_URL+"bin/"  ,  { headers: {Authorization:authHeader()} });
  }
  getUserFiles(){
    // console.log(GET_URL+Path);
    return axios.get(GET_URL+Path ,  { headers: {Authorization:authHeader()} });
  }
  getSharedFiles(){
  }
  uploadUrlFile(json){
    return axios.post(API_URL+"upload/"  , json , { headers: { Authorization:authHeader() } });
  }
  uploadUserFile(formData){
    return axios.post(ADD_URL+Path , formData , { headers: { Authorization:authHeader() } });
  }
  AddFolder(json){
    // console.log(json);
    // console.log(Path);
    return axios.post(GET_URL+Path  , json , { headers: { Authorization:authHeader() } });
  }
  Delete(json){
    // console.log(authHeader())
    // console.log(json)
    return axios.delete(GET_URL  ,   {data:{f_id:json}, headers: { Authorization:authHeader() } });
  }
  Rename(json){
    return axios.put(API_URL+"rename/"  , json , { headers: { Authorization:authHeader() } });
  }
  Restore(json){
    

    return axios.put(API_URL+"restore/"  , json , { headers: { Authorization:authHeader() } });
  }
  Search(data){
    return axios.get(API_URL+"search/"+data  ,  { headers: {Authorization:authHeader()} });
  }

}

export default new UserService();
