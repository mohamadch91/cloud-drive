export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));
  // console.log(user);
  if (user && user.access) {
    // For Spring Boot back-end
    // console.log(user.access);
    return  "Bearer " + user.access ;

    // for Node.js Express back-end
    // return { "x-access-token": user.access };
  } else {
    // console.log("no user");
    return {
      
    };
  }
}
