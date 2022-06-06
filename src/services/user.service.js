import axios from "axios";
import authHeader from "./auth-header";
export let ADD_URL="https://drive.sitroom.ir/storage/add-file/";
export let GET_URL="https://drive.sitroom.ir/storage/folder-operation/";

let Path=localStorage.getItem("Path");
let movePath=localStorage.getItem("MovePath");
const API_URL = "https://drive.sitroom.ir/storage/";
const SHARE_URL="https://drive.sitroom.ir/storage/sharing-operation/"
const USER_PROFILE = "https://drive.sitroom.ir/api/user/profile";
class UserService {
 
  changepath(path){
    localStorage.setItem("search",false);
    Path=path;
  }
  changemovepath(path){
    movePath=path;
  }
  getStorage(){
    return axios.get(API_URL+"used-size"  , { headers: { Authorization:authHeader() } });
  }
  getbinContent(){
    localStorage.setItem("search",false);
    return axios.get(API_URL+"bin/"+Path  ,  { headers: {Authorization:authHeader()} });
  }
  getUserFiles(){
    // console.log(GET_URL+Path);
    localStorage.setItem("search",false);
    return axios.get(GET_URL+Path ,  { headers: {Authorization:authHeader()} });
  }
  getSharedFiles(){
    localStorage.setItem("search",false);
    return axios.get(SHARE_URL+Path  ,  { headers: {Authorization:authHeader()} });
    
  }
  sharefile(json){
    console.log(json)
    localStorage.setItem("search",false);
    return axios.post(SHARE_URL  , json , { headers: { Authorization:authHeader() } });
  }
  uploadUrlFile(json){
    console.log("file raft")
    localStorage.setItem("search",false);
    return axios.post(API_URL+"upload/" +Path , json , { headers: { Authorization:authHeader() } });
  }
  uploadUserFile(formData,config1,source){
    localStorage.setItem("search",false);
    const config ={
      headers: { Authorization:authHeader()},
        onUploadProgress:config1,
        cancelToken:source.token
    }
    return axios.post(ADD_URL+Path , formData , config);
  }
  AddFolder(json){
    // console.log(json);
    // console.log(Path);
    localStorage.setItem("search",false);
    console.log(Path)
    return axios.post(GET_URL+Path , json , { headers: { Authorization:authHeader() } });
  }
  AddFoldermove(json,path){
    localStorage.setItem("search",false);
    return axios.post(GET_URL+path  , json , { headers: { Authorization:authHeader() } });
  }
  Delete(json){
    // console.log(authHeader())
    // console.log(json)
    localStorage.setItem("search",false);
    return axios.delete(GET_URL  ,   {data:{f_id:json}, headers: { Authorization:authHeader() } });
  }
  Rename(json){
    localStorage.setItem("search",false);
    return axios.put(API_URL+"rename/"  , json , { headers: { Authorization:authHeader() } });
  }
  Restore(json){
    
    localStorage.setItem("search",false);
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
  getExcel(url){
    return axios.get(url  ,  { headers: {Authorization:authHeader()} });
  }
  addFavorite(json){
    return axios.post(API_URL+"favorite-operation/"+Path  , json , { headers: { Authorization:authHeader() } });
  }
  getFavorites(){
    return axios.get(API_URL+"favorite-operation/"+Path  ,  { headers: {Authorization:authHeader()} });
  }
  getProfile(){
    return axios.get(USER_PROFILE  ,  { headers: {Authorization:authHeader()} });
  }
  updateProfile(json){
    console.log(json)
    return axios.post(USER_PROFILE , json , { headers: { Authorization:authHeader() } });
  }
  profileImage(form){
    return axios.post(USER_PROFILE+"-photo/" , form , { headers: { Authorization:authHeader() } });
  }
  getProfilePic(src){
    return axios.get(src  ,  { headers: {Authorization:authHeader()} });
  }
  getfile(url,data){
    return axios.post(url,data,{ headers: { Authorization:authHeader() } })
  }
}

export default new UserService();
