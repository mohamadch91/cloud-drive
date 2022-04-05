import axios from "axios";
import authHeader from "./auth-header";
export let ADD_URL="http://192.168.220.23:8000/storage/add-file/";
export let GET_URL="http://192.168.220.23:8000/storage/folder-operation/";

let Path=localStorage.getItem("Path");
let movePath=localStorage.getItem("MovePath");
const API_URL = "http://192.168.220.23:8000/storage/";
const SHARE_URL="http://192.168.220.23:8000/storage/sharing-operation/"
class UserService {
 
  changepath(path){
    Path=path;
  }
  changemovepath(path){
    movePath=path;
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
    return axios.get(SHARE_URL+Path  ,  { headers: {Authorization:authHeader()} });
    
  }
  sharefile(json){
    console.log(json)
    return axios.post(SHARE_URL  , json , { headers: { Authorization:authHeader() } });
  }
  uploadUrlFile(json){
    console.log("file raft")
    return axios.post(API_URL+"upload/" +Path , json , { headers: { Authorization:authHeader() } });
  }
  uploadUserFile(formData){
    return axios.post(ADD_URL+Path , formData , { headers: { Authorization:authHeader() } });
  }
  AddFolder(json){
    // console.log(json);
    // console.log(Path);
    return axios.post(GET_URL+Path  , json , { headers: { Authorization:authHeader() } });
  }
  AddFoldermove(json,path){
    return axios.post(GET_URL+path  , json , { headers: { Authorization:authHeader() } });
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
  getmovefiles(){
    // console.log("salamon aleikom")
    return axios.get(GET_URL+movePath  ,  { headers: {Authorization:authHeader()} });
  
  }
  moveFiles(json){
    return axios.put(API_URL+"move/"  , json , { headers: { Authorization:authHeader() } });
  }

}

export default new UserService();
