<template>
<div>
    <p  v-for=" item in fetchedJobList">
        <a v-bind:href="item.url">{{ item.title }}</a>
        <small>{{ item.domain }}</small>
    </p>  
   
</div>  
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters({
            fetchedJobList : 'fetchedJob'
        })
    },
    created(){
        this.$store.dispatch('FETCH_JOBS');
    },

}
</script>

<style>

</style>