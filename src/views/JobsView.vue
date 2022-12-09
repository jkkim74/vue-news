<template>
<div>
    <ul class="jobs-list">
        <li v-for=" item in fetchedJobList" class="job">
            <div class="points">
            </div>
            <div>
                <p class="job-title"> <a v-bind:href="item.url">{{ item.title }}</a></p>
                <small class="link-text">
                    {{ item.domain }}
                </small>
            </div>
        </li>
    </ul>
    <!-- <p  v-for=" item in fetchedJobList">
        <a v-bind:href="item.url">{{ item.title }}</a>
        <small>{{ item.domain }}</small>
    </p>   -->
   
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

<style scoped>
.jobs-list {
    margin:0;
    padding: 0;
}
.job {
    list-style: none;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
}
.points {
    width: 20px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #42b883;
}
.job-title {
    margin: 0;
}

.link-text {
    color: #820828;
}

</style>