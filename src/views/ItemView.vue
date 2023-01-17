<template>
<div>
    <section>
        <!-- 질문상세정보 -->
        <!-- <div class="user-container">
            <div>
                <i class="fas fa-user"></i>
            </div>
            <div class="user-description">
                <div>
                <router-link :to="`/user/${fetchedItem.user}`">{{ fetchedItem.user }}</router-link>
                </div>
                <div>
                    {{ fetchedItem.time_ago }}
                </div>
            </div>
        
        </div> -->
        <user-profile :info="fetchedItem">
            <div slot="username">{{ fetchedItem.user}}</div>
            <template slot="time">{{ fetchedItem.time_ago }}</template>
        </user-profile>
      
    </section>
    <section>
        <h2>{{ fetchedItem.title}}</h2>
    </section>
    <section>
        <!-- 질문댓글 -->
        <div v-html="fetchedItem.content"></div>

    </section>
 
</div>  
</template>

<script>
import { mapGetters } from 'vuex';
import UserProfile from '../components/UserProfile.vue';
export default {
    components: {
        UserProfile
    },
    computed: {
        ...mapGetters([
            'fetchedItem'
        ])
    },
    created() {
        const itemId = this.$route.params.id
        // //axios.get(`https://api.hnpwa.com/v0/item/${itemId}.json`);
        this.$store.dispatch('FETCH_ITEM', itemId);
    }

}
</script>

<style scoped>
.user-container {
    display: flex;
    align-items: center;
    padding: 0.7rem;
}
.fa-user {
    font-size: 2.5rem;
}
.user-description {
    padding-left: 9px;

}
.time {
    font-size: 0.7rem;
}
</style>