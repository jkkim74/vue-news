<template>
<div>
    <div v-for="ask in getAsksList()"> {{ ask.title }}</div>
</div>  
</template>

<script>

export default {
    created(){
        this.$store.dispatch('FETCH_ASKS');
    },
    methods: {
        getAsksList(){
            return this.$store.state.asks;
        }
    }

}
</script>

<style>

</style>