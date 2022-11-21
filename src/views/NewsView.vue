<template>
 <div>
    <div v-for=" item in getNewsList()" >{{ item.title }}</div>    
  </div>
</template>

<script>
export default {
    created(){
        this.$store.dispatch('FETCH_NEWS');
    },
    methods: {
        getNewsList(){
            return this.$store.state.news;
        }
    }
}
</script>

<style>

</style>