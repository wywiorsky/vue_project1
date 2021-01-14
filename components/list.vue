<template>
  <div class="todo">
    <input type="text" v-model="search">
    <ul>
      <li v-for="(todo, index) in pageOfItems" :key="index">
        <span>{{ todo.name }}</span>
        <span>{{ todo.desc }}</span>
        <span>
          <input type="checkbox" title="status" v-model="todo.status">
        </span>
        <button @click="removeTodo(todo)">x</button>
        <router-link :to="'edit/' + index">edit</router-link>
      </li>
    </ul>

    <jw-pagination :items="filteredItems" @changePage="onChangePage"></jw-pagination>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      search: "",
      pageOfItems: []
    };
  },
  computed: {
    filteredItems() {
      return this.todos.filter(item => {
        return item.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1;
      });
    },
    todos() {
      return this.$store.getters["all"];
    },
    ...mapGetters(["all"])
  },
  methods: {
    onChangePage(pageOfItems) {
      // update page of items
      this.pageOfItems = pageOfItems;
    }
  }
};
</script>

<style>
.todo {
  text-align: left;
  padding: 5px;
  margin: auto;
  transition: all 0.5s;
  max-width: 500px;
}

.completed {
  color: #888;
  text-decoration: line-through;
}

li {
  display: flex;
  flex-wrap: wrap;
}

li > span {
  flex: 1;
  max-width: 250px;
}
</style>
