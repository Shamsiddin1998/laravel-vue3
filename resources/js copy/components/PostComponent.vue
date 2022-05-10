<template>
  <div class="container">
    <single-post-component></single-post-component>

      <div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Job</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="person in people" v-bind:key="person.name">
              <th scope="row">1</th>
              <td>{{ person.name }}</td>
              <td>{{ person.age }}</td>
              <td>{{ person.job }}</td>
            </tr>
          </tbody>
        </table>
      </div>
  </div>
</template>

<script>
import SinglePostComponent from "./SinglePostComponent.vue";

export default {
  name: "PostComponent",
  components: {
    SinglePostComponent,
  },
  data() {
    return {
      people: [
        {
          name: "Tomm",
          age: 22,
          job: "wefe",
        },
        {
          name: "Tomm1",
          age: 21,
          job: "wefe11",
        },
      ],
    };
  },
};
</script>
<style scoped>
</style>
