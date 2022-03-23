<template>
    <div class="browse">
        <h1>Browse</h1>
    </div>
</template>

<script>
import { onMounted } from "vue";

export default {
    name: "Browse",
    setup() {
        onMounted(() => {
            getUsers();
        })

        function getUsers() {
            fetch('http://localhost:5000/browse', {
                method: "GET",
            })
            .then(resp => resp.json())
            .then(data => {
                console.log(data);
            })
            .catch(function (error) {
                console.warn('Something went horribly wrong.', error);
            });
        }

        return {
            getUsers
        }
      },
    };
</script>

<style lang="scss" scoped>
.browse {
    padding: 50px 5%;
}

</style>