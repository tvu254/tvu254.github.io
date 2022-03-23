import { createRouter, createWebHistory } from 'vue-router';
import store from '../store';
import Home from '../views/Home.vue';
import UserProfile from "../views/UserProfile";
import Admin from "../views/Admin";
import Browse from "../views/Browse";
import Login from "../views/Login";
import Post from "../views/Post";
import Register from "../views/Register";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user/:userId',    // uses username as variable in URL
    name: 'UserProfile',
    component: UserProfile
  },
  {
    path: '/login',    
    name: 'Login',
    component: Login
  },
  {
    path: '/register',    
    name: 'Register',
    component: Register
  },
  {
    path: '/browse',
    name: 'Browse',
    component: Browse
  },
  {
    path: '/post',
    name: 'Post',
    component: Post
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: {
      requiresAdmin: true
    }
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// router guard
router.beforeEach(async (to, from, next) => {
  const user = store.state.User.user;
  console.log(user)
  if (!user) {
    // fetch user from db once db connected, this just sets state as first user - will eventually need to be connected to register/login
    await store.dispatch('User/setUser', user)   // dispatches action 'setUser' with data users[0] from users.js file
  }

  const isAdmin = true; // should actually reference user
  const requiresAdmin = to.matched.some(record => record.meta.requiresAdmin);

  if (requiresAdmin && !isAdmin) next({ name: 'Home' })   // if needs admin but !admin, go home
  else next();
})

export default router
