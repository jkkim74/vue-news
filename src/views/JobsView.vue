<template>
<div>
    <div v-for="job in jobsList"> {{ job.title }}</div>
</div>  
</template>

<script>
import { fetchJobsList } from '@/api/index';

export default {
    data(){
        return {
            jobsList: []
        }
    },
    created(){
        fetchJobsList()
        .then(response => this.jobsList = response.data)
        .catch(function(error){
            console.log(error);
            }
        )

    }

}
</script>

<style>

</style>