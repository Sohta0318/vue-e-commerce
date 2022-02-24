import axios from "axios";

export default {
  async createUser(context, payload) {
    try {
      const data = await axios.post("/users", {
        name: payload.name,
        email: payload.email,
        password: payload.password,
      });
      const userInfo = data.data.user;
      const token = data.data.token;
      localStorage.setItem("token", token);
      localStorage.setItem("userId", userInfo._id);
      localStorage.setItem("name", userInfo.name);
      localStorage.setItem("email", userInfo.email);
      localStorage.setItem("password", userInfo.password);
      context.commit("trySignUp", false);
    } catch (error) {
      context.commit("trySignUp", true);
      console.log(error);
    }
  },
  async logIn(context, payload) {
    try {
      const data = await axios.post("/users/login", {
        email: payload.email,
        password: payload.password,
      });
      const userInfo = data.data.user;
      const token = data.data.token;
      localStorage.setItem("token", token);
      localStorage.setItem("userId", userInfo._id);
      localStorage.setItem("name", userInfo.name);
      localStorage.setItem("email", userInfo.email);
      localStorage.setItem("password", userInfo.password);
      context.commit("tryLogin", false);
    } catch (error) {
      context.commit("tryLogin", true);
      console.log(error);
    }
  },
  hasAccount(context) {
    context.commit("setUser");
    context.commit("hasAccount");
  },
  async logOut() {
    const isLoggedIn = localStorage.getItem("userId");
    const token = localStorage.getItem("token");
    try {
      if (isLoggedIn) {
        await axios.post("/users/logout", {
          headers: { Authorization: `Bearer ${token}` },
        });
        // localStorage.clear();
      } else {
        throw new Error();
      }
    } catch (error) {
      console.log(error);
    }
  },
  signUpOrLogin(context) {
    context.commit("signUpOrLogin");
  },
  async editUser(context, payload) {
    const userId = localStorage.getItem("userId");
    const updatedUser = {
      name: payload.name,
      email: payload.email,
      password: payload.password,
    };
    try {
      const data = await axios.patch(`/users/${userId}`, updatedUser);
      const newUser = data.data;
      localStorage.setItem("name", newUser.name);
      localStorage.setItem("email", newUser.email);
      localStorage.setItem("password", newUser.password);
      context.commit("tryEdit", true);
    } catch (error) {
      context.commit("tryEdit", false);
      console.log(error);
    }
  },
};
