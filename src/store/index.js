import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: []
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    deletePost(state, post) {
      state.posts = state.posts.filter(item => item.id !== post.id)
    },
    addPost(state, post) {
      state.posts.unshift(post)
    }
  },
  getters: {
    posts(state) {
      return state.posts;
    },
    post: (state, getters) => id => {
      return getters.posts.find(post => post.id === id)
    }
  },
  actions: {
    getPosts({ commit }) {
      return new Promise((resolve, reject) => {
        axios
          .get("posts")
          .then(res => {
            commit("setPosts", res.data);
            resolve();
          })
          .catch(e => reject(e));
      });
    },
    deletePost({ commit }, post) {
      return new Promise((resolve, reject) => {
        axios
            .delete(`posts/${post.id}`)
            .then(() => {
              commit('deletePost', post)
              resolve()
            })
            .catch(e => reject(e))

      })
    },
    addPost( { commit }, post) {
      return new Promise((resolve, reject) => {
        axios
            .post('posts', {
              ...post
            })
            .then(res => {
              commit('addPost', res.data)
              resolve()
            })
            .catch(e => reject(e))
      })
    }
  },
  modules: {}
});
