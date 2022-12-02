<template>
<div>
    <!-- <p>title : {{itemInfo.title}}</p> 
    <p>points : {{ itemInfo.points }}</p>
    <p>user : {{itemInfo.user}}</p>
    <p>time : {{itemInfo.time}}</p>
    <p>time_ago : {{ itemInfo.time_ago }}</p>
    <p>content : {{itemInfo.content}}</p>
    <p>deleted : {{ itemInfo.deleted }}</p>
    <p>dead : {{ itemInfo.dead }}</p>
    <p>type : {{ itemInfo.type }}</p>
    <p>url : {{ itemInfo.url }}</p>
    <p>domain : {{ itemInfo.domain }}</p>
    <p>comments : {{ itemInfo.comments }}</p>
    <p>level : {{ itemInfo.level }}</p>
    <p>comments_count : {{ itemInfo.comments_count }}</p> -->
    <!-- {{ this.$store.state.item }} -->
    <section>
        <!-- 질문상세정보 -->
        <div class="user-container">
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
        
        </div>
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
export default {
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