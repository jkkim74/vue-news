<template>
<div>
    <div v-for="job in getJobsList()"> {{ job.title }}</div>
</div>  
</template>

<script>
export default {
    created(){
        this.$store.dispatch('FETCH_JOBS');
    },
    methods: {
        getJobsList(){
            return this.$store.state.jobs;
        }
    }

}
</script>

<style>

</style>