import axios from "axios";
import authHeader from "./auth-header";
/**
 * @description: This is the UserService class
 * @class UserService
 * handle all user services with this class
 */
/**
 * define varable for Path of folders
 * define varable for Path of folders in move mode
 * @constant {string} API_URL Url for storage operations
 * @constant {string} USER_PROFILE Url for user profile api
 * @contsant {string} SHARE_URL Url for sharing operations
 */
let Path=localStorage.getItem("Path");
let movePath=localStorage.getItem("MovePath");
const API_URL = "https://drive.sitroom.ir/storage/";
const SHARE_URL="https://drive.sitroom.ir/storage/sharing-operation/"
const USER_PROFILE = "https://drive.sitroom.ir/api/user/profile";

class UserService {
 /**
  * 
  * @param {string} path change get files path 
  * for moving beetween folders
  * @returns {void}
  * @memberof UserService
  * @description: change get files path
  * @function changepath
  * set search to false if search is true beacouse when move between folders want to disbale search
  */
  changepath(path){
    localStorage.setItem("search",false);
    Path=path;
  }
  /**
   * @function changemovepath
   * @param {*} path 
   * @returns void
   * @memberof UserService
   * @description: change get files path in move mode 
   * 
   */
  changemovepath(path){
    movePath=path;
  }
  /**
   * @function getStorage
   * @param void
   * @description: get storage of user
   * @returns axios get request for get user used size 
   */
  getStorage(){
    return axios.get(API_URL+"used-size"  , { headers: { Authorization:authHeader() } });
  }
  /**
   * @function getbinContent
   * @description set serach to false tp show all files in user bin
   * @returns axios get request for show user bin files
   */
  getbinContent(){
    localStorage.setItem("search",false);
    return axios.get(API_URL+"bin/"+Path  ,  { headers: {Authorization:authHeader()} });
  }
  /**
   * @function getUserFiles
   * @description get user files
   * @returns axios get request for get user files
   */
  getUserFiles(){
    localStorage.setItem("search",false);
    return axios.get(GET_URL+Path ,  { headers: {Authorization:authHeader()} });
  }
  /**
   * @function getSharedFiles
   * @description get shared files
   * @returns axios get request for get shared files with user
   */
  getSharedFiles(){
    localStorage.setItem("search",false);
    return axios.get(SHARE_URL+Path  ,  { headers: {Authorization:authHeader()} });
    
  }
  /**
   * @function sharefile
   * @description share file with another user
   * @param {json} json 
   * @returns 
   */
  sharefile(json){
    localStorage.setItem("search",false);
    return axios.post(SHARE_URL  , json , { headers: { Authorization:authHeader() } });
  }
  /**
   * upload user file with given url
   * @function uploadUrlFile
   * @param {json} json 
   * @returns {Promise} axios post
   */
  uploadUrlFile(json){
    localStorage.setItem("search",false);
    return axios.post(API_URL+"upload/" +Path , json , { headers: { Authorization:authHeader() } });
  }
  /**
   * upload user file to server
   * @function uploadUserFile
   * @description upload user file to server
   * @param {*} formData form datat contain user uploaded file
   * @param {*} config1 config for show percentage of uploaded file
   * @param {*} source for cancel the upload
   * @returns {Promise} axios post response 
   * 
   */
  uploadUserFile(formData,config1,source){
    localStorage.setItem("search",false);
    const config ={
      headers: { Authorization:authHeader()},
        onUploadProgress:config1,
        cancelToken:source.token
    }
    return axios.post(ADD_URL+Path , formData , config);
  }
  /**
   * add folder to user file
   * @param {json} json json contains folder name
   * @returns axios post response 
   */
  AddFolder(json){
    localStorage.setItem("search",false);
    return axios.post(GET_URL+Path , json , { headers: { Authorization:authHeader() } });
  }
/**
 *
 * @param {*} json json contains folder name
 * @param {*} path path to add folder
 * @returns axios post promise
 */
  AddFoldermove(json,path){
    localStorage.setItem("search",false);
    return axios.post(GET_URL+path  , json , { headers: { Authorization:authHeader() } });
  }
  /**
   * delete requested file from files and send to bin
   * @param {*} json json contains file id 
   * @returns {Promise} axios promise to 
   */
  Delete(json){
    localStorage.setItem("search",false);
    return axios.delete(GET_URL  ,   {data:{f_id:json}, headers: { Authorization:authHeader() } });
  }
  /**
   * rename selected file
   * @param {json} json 
   * @returns {promise} axios put promise response
   */
  Rename(json){
    localStorage.setItem("search",false);
    return axios.put(API_URL+"rename/"  , json , { headers: { Authorization:authHeader() } });
  }
  /**
   * resotre files from bin with file id
   * @function Restore 
   * @param {*} json 
   * @returns 
   */
  Restore(json){
    
    localStorage.setItem("search",false);
    return axios.put(API_URL+"restore/"  , json , { headers: { Authorization:authHeader() } });
  }
  /**
   * serach beetween files with given text or date or file type
   * @param {string} data query params for search
   * @returns {Promise} axios get promise response
   */
  Search(data){
    return axios.get(API_URL+"search/"+data  ,  { headers: {Authorization:authHeader()} });
  }
/**
 * get files for move mode
 * @returns {Promise} axios get promise response
 */
  getmovefiles(){
    return axios.get(GET_URL+movePath  ,  { headers: {Authorization:authHeader()} });
  
  }
  /**
   * move files from one folder to another
   * @param {*} json 
   * @returns axios put promise response
   */
  moveFiles(json){

    return axios.put(API_URL+"move/"  , json , { headers: { Authorization:authHeader() } });
  }
  /**
   * 
   * @param {string} url excel file url for download file
   * @returns axios get promise response
   */
  getExcel(url){
    return axios.get(url  ,  { headers: {Authorization:authHeader()} });
  }
  /**
   * add files to favorite section
   * @param {*} json
   * @returns axios post promise response
   * @function addFavorite
   */

  addFavorite(json){
    return axios.post(API_URL+"favorite-operation/"+Path  , json , { headers: { Authorization:authHeader() } });
  }
  /**
   * get favorite section files
   * @returns axios get promise response
   */
  getFavorites(){
    return axios.get(API_URL+"favorite-operation/"+Path  ,  { headers: {Authorization:authHeader()} });
  }
  /**
   * user profile details
   * @returns axios get promise response
   */
  getProfile(){
    return axios.get(USER_PROFILE  ,  { headers: {Authorization:authHeader()} });
  }
/**
 * update user profile info just for first time
 * @param {*} json user profile details
 * @returns axios post promise response
 */
  updateProfile(json){
    return axios.post(USER_PROFILE , json , { headers: { Authorization:authHeader() } });
  }
  /**
   * update user profile photo
   * @param {formdata} form data contain user profile image
   * @returns axios post promise response
   */
  profileImage(form){
    return axios.post(USER_PROFILE+"-photo/" , form , { headers: { Authorization:authHeader() } });
  }
  /**
   * 
   * @param {url} src image url
   * @returns axios get promise response
   */
  getProfilePic(src){
    return axios.get(src  ,  { headers: {Authorization:authHeader()} });
  }
  /**
   * download user files with authorization header
   * @param {*} url file url
   * @param {*} data file id
   * @returns axios get promise response
   * @function getfile
   */
  getfile(url,data){
    const config ={
      headers: { Authorization:authHeader()},
      responseType: 'blob',
    }
    return axios.post(url,data,config)
  }
}

export default new UserService();
