<template>
  <div class="todo">
    <form @submit.prevent="addTodo({name, desc, status});send();">
      <input type="text" placeholder="Name" v-model="name">
      <input type="text" placeholder="Description" v-model="desc">
      <input type="checkbox" title="status" v-model="status">
      <button>Add</button>
    </form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      name: "",
      desc: "",
      status: "",
      errors: []
    };
  },
  methods: {
    send() {
      this.$router.push("/");
    },
    ...mapMutations(["addTodo"])
  }
};
</script>

