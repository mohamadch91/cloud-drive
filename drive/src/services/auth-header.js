export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.data) {
    // For Spring Boot back-end
    return  "Bearer " + user.accessToken ;

    // for Node.js Express back-end
    // return { "x-access-token": user.access };
  } else {
    return {};
  }
}
