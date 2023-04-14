const userUrl = "https://jsonplaceholder.typicode.com/users";
export default class UserService {
  getAllUsers() {
    return fetch(userUrl);
  }
}
