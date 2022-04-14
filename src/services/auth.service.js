import axios from "axios";

const API_URL = "https://drive.sitroom.ir/api/token/";

class AuthService {
  login(username, password) {
    console.log( username);
    return axios
      .post(API_URL , { username, password })
      .then((response) => {
        console.log(response);
        if (response.data.access) {
          // console.log(response.data);
          localStorage.setItem("user", JSON.stringify(response.data));
          localStorage.setItem("Path","");
          localStorage.setItem("MovePath","");
          localStorage.setItem("Page","Profile");
          localStorage.setItem("search_addres","");
          localStorage.setItem("search",false);
          localStorage.setItem("Folders",JSON.stringify([]));
        }
        

        return response.data;
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
