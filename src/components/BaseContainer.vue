<template>
  <section>
    <h2>{{ title }}</h2>
    <h3>{{ counter }}</h3>
    <button @click="addCounter">Increament</button>
    <button @click="resetCounter">Reset</button>
    <button @click="removeCounter">decrese</button>
    <slot></slot>
  </section>
</template>

<script>
export default {
  props: ['title'],

  computed: {
    counter() {
      return this.$store.state.counter
    }
  },

  methods: {
    addCounter() {
      this.$store.commit('increment');

    },

    resetCounter() {
      this.$store.state.counter = 0
    },
    removeCounter() {
      this.$store.state.counter--;
    }
  }
};
</script>

<style scoped>
section {
  max-width: 30rem;
  margin: 2rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}

h2 {
  text-align: center;
}

button {
  margin: 2rem;
}
</style>