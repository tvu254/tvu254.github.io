<template>
<form @submit.prevent="handleSubmit">
  <div class="login">
    <h1><strong>Login</strong></h1>

    <div class="formText">
      <label>Username</label>
      <input type="text" class="formBox" v-model="state.username" placeholder="Username"/>

      <label>Password</label>
      <input type="password" class="formBox" v-model="state.password" placeholder="Password"/>
    </div>

    <div class="invalid" v-if="state.invalid">
      Invalid username or password
    </div>
  </div>

  <div class = 'registerLink'>
    <router-link to="/register">
      Or click here to register an account
    </router-link>
  </div>
  <button class="loginButton">Login</button>
</form>
</template>

<script>
import { reactive } from 'vue';
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  name: 'Login',
  setup() {

    const store = useStore();
    const state = reactive({
      username:  '',
      password:  '',
      invalid: false
    })
    
      const router = useRouter();
      const handleSubmit = async () => {
        const data = {
        username: state.username,
        password: state.password
        };
        
        await fetch('http://localhost:5000/login', {
          method: 'POST',
          body: JSON.stringify({ data }),
          headers: {
            'Content-type': 'application/json',
          }
        })
        .then((response) => response.json())
        .then(function (data) {
          console.log(typeof(data))
          if (typeof(data) == "string") {
            console.log("invalid username or password");
            state.invalid = true    // somehow doesnt actually update the state??? should work otherwise though I think
          }
          else
            console.log(data);  
            setUser(data);
        })
        .catch(function (error) {
          console.warn('Something went horribly wrong.', error);
        });
      };

      const setUser = async (user) => {
        await store.dispatch('User/setUser', user);
        console.log(user.Item.username)
        await router.push('/');
      }


    return {
      state,
      handleSubmit,
      store,
      setUser
    }
  }
}
</script>

<style lang="scss" scoped>

.login {
    text-align: center;

    .loginButton {
      text-align: center;
    }

    .registerLink {
      text-align: center;
    }
    .invalid {
      color: rgb(184, 0, 0)
    }
}

</style>
