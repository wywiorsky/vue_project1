<template>
  <div class="todo">
    <form @submit.prevent="editTodo(this.$route.params.id, {name, desc, status});; name=''">
      <input type="text" placeholder="Name" v-model="toDo.name">
      <input type="text" placeholder="Description" v-model="toDo.desc">
      <input type="checkbox" title="status" v-model="toDo.status">
      <button>Edit</button>
    </form>
  </div>
</template >

	<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      name: toDo.name,
      desc: toDo.desc,
      status: toDo.status
    };
  },

  computed: {
    toDo() {
      return this.$store.getters.getTodoById(this.$route.params.id);
    },
    ...mapGetters(["getTodoById"])
  },

  methods: mapMutations(["editTodo"]),
  beforeRouteLeave(to, from, next) {
    const answer = window.confirm(
      "Do you really want to leave? you have unsaved changes!"
    );
    if (answer) {
      next();
    } else {
      next(false);
    }
  }
};
</script>

