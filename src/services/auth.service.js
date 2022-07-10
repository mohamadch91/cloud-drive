import axios from "axios";
/**
 * @description: This is the auth service class
 * @class AuthService
 *  
 *
 */
/**
 * define constat for base url
 * @constant {string} API_URL Url for login api
 * @constant {string} USER_PROFILE Url for user profile api
 */
const API_URL = "https://drive.sitroom.ir/api/token/";
const USER_PROFILE = "https://drive.sitroom.ir/api/user/profile";
class AuthService {
  /**
   * 
   * @param {string} username  user username
   * @param {string} password  user password 
   * @returns axios promise 
   * @memberof AuthService
   * @public
   * @function login
   * @description login user
   * 
   */
  login(username, password) {
    return axios
      .post(API_URL , { username, password })
      .then((response) => {
        /**
         * if login success then save token to local storage
         */
        if (response.data.access) {
         const user={
           refresh:response.data.refresh,
            access:response.data.access,
         }
         /**
          * get user profile from api
          */
         return axios.get(USER_PROFILE  ,  { headers: {Authorization:"Bearer "+user.access} }).then
          (res=>{
            /**
             * if user profile is not null then save user profile to local storage
             */
            user.email=res.data.email;
            user.full_name=res.data.full_name;
            user.last_name=res.data.last_name;
            user.username=res.data.username;
            user.first_name=res.data.first_name;
            user.image_url=res.data.image_url;

          localStorage.setItem("user", JSON.stringify(user));
          localStorage.setItem("Path","");
          localStorage.setItem("MovePath","");
          localStorage.setItem("Page","Profile");
          localStorage.setItem("search_addres","");
          localStorage.setItem("search",false);
          localStorage.setItem("Folders",JSON.stringify([]));
          return response.data;
          })
        }
        

        
      });
  }
  /**
   * remove user from local storage
   * @memberof AuthService
   * @public
   * @function logout
   */
  logout() {
    localStorage.removeItem("user");
  }
/**
 * if you done register api then you can use this function to register user
 * uncomment the code and run the app
 */
  // register(username, email, password) {
  //   return axios.post(API_URL + "signup", {
  //     username,
  //     email,
  //     password,
  //   });
  // }
}

export default new AuthService();
