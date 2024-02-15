<template>
    <button @click="addOne">Add one</button>
</template>

<script>

export default {

    methods: {
        addOne() {
            // this.$store.commit('increase', {value: 4});
            this.$store.commit({
                type: 'increase',
                value: 4
            });
        }
    }
}
</script>