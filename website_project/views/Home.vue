<template>
  <div class="home">
    <h1><strong>Welcome to uReview!</strong></h1>
    <h2> Working on adding genre then saving reviews to the database, the links below don't work anymore because the profile page now loads from dynamodb. These will now have to be fetched.
    </h2>
    <div class="userList">
      <router-link v-for="user in users" :to="{ name: 'UserProfile', params: {userId: user.id} }" :key="user.id">
        {{ user.username }}
      </router-link>
    </div>
  </div>
</template>

<script>
import { users } from "../assets/users";

export default {
  name: 'Home',
  setup() {
    return {
      users
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  padding: 50px 5%;

  .userList {
    display: flex;
    flex-direction: column;
  }
}
</style>
