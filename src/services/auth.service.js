import axios from "axios";

const API_URL = "https://drive.sitroom.ir/api/token/";
const USER_PROFILE = "https://drive.sitroom.ir/api/user/profile";
class AuthService {
  login(username, password) {
    console.log( username);
    return axios
      .post(API_URL , { username, password })
      .then((response) => {
        console.log(response);
        if (response.data.access) {
         const user={
           refresh:response.data.refresh,
            access:response.data.access,
         }
         return axios.get(USER_PROFILE  ,  { headers: {Authorization:"Bearer"+user.access} }).then
          (res=>{
         
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
          console.log(user);
          return response.data;
          })
        }
        

        
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password,
    });
  }
}

export default new AuthService();
