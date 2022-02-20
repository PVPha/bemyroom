import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    page: [],
    listPost: [],
    posts: [],
    user: [],
    detail: [],
    btnUser: false,
    loading: true,
  },
  getters: {
    post: (state) => {
      return state.posts;
    },
    listPost: (state) => {
      return state.listPost;
    },
  },
  mutations: {
    SET_LIST_POSTS(state, posts) {
      state.listPost = posts.data;
      state.page = posts;
    },
    SET_MORE_LIST_POSTS(state, posts) {
      state.listPost.push(...posts.data);
      state.page = posts;
      // console.log(posts);
      // console.log(state.posts);
    },
    SET_POST(state, post) {
      state.posts = post;
    },
    SET_POST_DETAIL(state, post) {
      state.detail = post;
    },

    SET_BTNUSER(state) {
      state.btnUser = true;
    },
    SET_USER(state, user) {
      state.user = user;
    },
    SET_COOKIE(state, cookie) {
      state.btnUser = true;
      // console.log(cookie);
      const name = cookie.name;
      const value = cookie.value;
      const day = cookie.day;
      // console.log(name);
      // console.log(value);
      var expires = "";
      if (day) {
        var date = new Date();
        date.setTime(date.getTime() + day * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + (value || "") + expires + "; path=/";
      window.sessionStorage.setItem("token", value);
    },
    GET_COOKIE(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) {
          console.log("token:" + c.substring(nameEQ.length, c.length));
          //return c.substring(nameEQ.length, c.length);
        }
      }
      //return null;
    },
    ERASE_COOKIE(name) {
      document.cookie =
        name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
      window.sessionStorage.removeItem("token");
    },
    SET_SESSION(token) {
      window.sessionStorage.setItem("token", token);
    },
    TEST() {
      console.log("test create post");
    },
    LOADING(state) {
      state.loading = false;
    },
  },
  actions: {
    async loadPost({ commit }) {
      try {
        const response = await HTTP.get("/api/article");
        console.log(response.data._data);
        commit("SET_LIST_POSTS", response.data._data);
        commit("LOADING");
      } catch (error) {
        console.log(error);
      }
    },
    async loadMorePost({ commit }, url) {
      try {
        const response = await HTTP.get(url);
        console.log(response.data._data);
        commit("SET_MORE_LIST_POSTS", response.data._data);
      } catch (error) {
        console.log(error);
      }
    },
    async detailPost({ commit }, slug) {
      try {
        const response = await HTTP.get("/api/article/" + slug);
        console.log(response.data._data);
        commit("SET_POST_DETAIL", response.data._data);
      } catch (error) {
        console.log(error);
      }
    },
    async login({ commit }, formData) {
      console.log(formData);
      try {
        const response = await HTTP.post("/api/auth/login", formData);
        // commit("SET_TOKEN");
        console.log(response.data.access_token);
        //window.localStorage.setItem("token", response.data.access_token);
        const cookie = {
          name: "token",
          value: response.data.access_token,
          day: 1,
        };
        console.log(cookie);
        commit("SET_COOKIE", cookie);
        console.log(HTTP.defaults.headers.common);
        HTTP.defaults.headers.Authorization =
          "Bearer" + response.data.access_token;
      } catch (error) {
        console.log(error);
      }
    },
    async logout() {
      document.cookie =
        "token" + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
      window.sessionStorage.removeItem("token");

      // try {
      //   commit("ERASE_COOKIE", "token");

      // } catch (error) {
      //   console.log(error);
      // }
    },
    async getInformation({ commit }) {
      try {
        // console.log(
        //   "token from sessionstorage: " + window.sessionStorage.getItem("token")
        // );
        const response = await HTTP.post("/api/auth/me");
        commit("SET_USER", response.data._data);
        //console.log(response.data._data);
      } catch (error) {
        console.log(error);
      }
    },
    async createPost({ commit }, formData) {
      console.log(formData);
      try {
        const response = await HTTP.post("/api/auth/article/create", formData);
        console.log(response);
        commit("TEST");
      } catch (error) {
        console.log(error);
      }
    },
    async getPost({ commit }) {
      try {
        const response = await HTTP.get("/api/auth/articles");
        console.log(response.data._data);
        commit("SET_POST", response.data._data);
      } catch (error) {
        console.log(error);
      }
    },
    checkCookie() {
      //commit("SET_SESSION", token);
      var nameEQ = "token" + "=";
      var ca = document.cookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0)
          //console.log(c.substring(nameEQ.length, c.length));
          window.sessionStorage.setItem(
            "token",
            c.substring(nameEQ.length, c.length)
          );
      }
    },
  },
  modules: {},
});
export const HTTP = axios.create({
  baseURL: "http://bemyroom.herokuapp.com",
  headers: {
    Authorization: "Bearer" + window.sessionStorage.getItem("token"),
  },
});
