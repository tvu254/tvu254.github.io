<template>
  <div id="app">
    <nav>
      <router-link to="/">
        <div class="navigationLogo">
          <strong>uReview</strong>
        </div>
      </router-link>
      <router-link to="/browse">
        <div class="browse">
          <strong>Browse Reviews</strong>
        </div>
      </router-link>

      <div class = "userPost" v-if="user">
        <router-link to="/post">
          <div class="post">
            Post a Review
          </div>
        </router-link>
      </div>

      <div class = "navigationUser" v-if="user">
        <router-link :to="`/user/${user.Item.UserID}`">
          {{ user.Item.UserID }}
        </router-link>
      </div>

      <div class = "loginRegister" v-else>
        <router-link to="/login">
          Login / Register
        </router-link>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  name: 'App',


  setup() {
    const store = useStore();
    const user = computed(() => store.state.User.user);



    return {
      user,
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #0d1424;
  min-height: 100vh;
  background-color: #ececec;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 5%;
    background-color: #0d1424;
    color: #d6d6d6;

    .navigationLogo {
      font-size: 34px;
      
      &:hover {
        filter: brightness(150%);
        transform: scale(1.01, 1.01);
      }
    }

    .navigationUser {
      font-weight: normal;
      font-size: 18px;
      
      &:hover {
        transform: scale(1.025, 1.025);
        filter: brightness(150%);

        .loginRegister {
          font-size: 34px;
        }
      }
    }

    .userPost {
      font-weight: normal;
      font-size: 18px;
      
      &:hover {
        transform: scale(1.025, 1.025);
        filter: brightness(150%);
      }
    }

    .browse {
      font-weight: bold;
      font-size: 18px;
      align-items: center;

      &:hover {
        transform: scale(1.025, 1.025);
        filter: brightness(150%);
      }
    }
    
    .login {
      font-weight: normal;
      font-size: 18px;
      align-items: center;

      &:hover {
        transform: scale(1.025, 1.025);
        filter: brightness(150%);
      }
    }
  }
}
</style>