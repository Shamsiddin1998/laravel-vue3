<template>
  <div class="container">
    Single Post
    <div>
      Name:{{ name }}
      <button @click="sayhello">Hello</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      people: [
        {
          name: "Tomm",
          age: 22,
          job: "wefe",
          name: "Tomm",
          age: 22,
          job: "wefe",
          name: "Tomm",
          age: 22,
          job: "wefe",
        },
      ],
    };
  },
  methods: {
    sayhello() {
      alert("ok");
    },
  },
};
</script>
<style scoped>
</style>
