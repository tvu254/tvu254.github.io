<template>
<form @submit.prevent="handleSubmit">
  <div class="register">
    <h1><strong>Register</strong></h1>

    <div class="formText">
      <label>First Name</label>
      <input type="text" class="formBox" v-model="state.firstName" placeholder="First Name"/>

      <label>Last Name</label>
      <input type="password" class="formBox" v-model="state.lastName" placeholder="Last Name"/>

      <label>Email (only for password recovery)</label>
      <input type="password" class="formBox" v-model="state.email" placeholder="Email"/>

      <label>Username</label>
      <input type="text" class="formBox" v-model="state.username" placeholder="Username"/>

      <label>Password</label>
      <input type="password" class="formBox" v-model="state.password" placeholder="Password"/>

      <label>Confirm Password</label>
      <input type="password" class="formBox" v-model="state.confirmPassword" placeholder="Confirm Password"/>
    </div>
  </div>

  <button class="registerButton">Register</button>
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
      firstName:  '',
      lastName:  '',
      email:  '',
      username:  '',
      password:  '',
      confirmPassword: '',
      invalid: false
    })
    
      const router = useRouter();
      const handleSubmit = async () => {
        const data = {
        username: state.username,
        password: state.password
        };
        
        await fetch('http://localhost:5000/register', {
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

.register {
    text-align: center;

    .registerButton {
      text-align: center;
    }
}

</style>
