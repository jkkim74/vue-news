<template>
    <div>
        <ul class="news-list">
            <li class="post" v-for=" item in fetchedNews">
                <!-- 포인트 영역 -->
                <div class="points">
                    {{ item.points }}
        
                </div>
                <!-- 기타정보 -->
                <div>
                    <p class="news-title">
                        <a v-bind:href="item.url">{{ item.title }}</a>
                    </p>
                    <small class="link-text">
                        {{ item.time_ago }} by
                        <router-link v-bind:to="`/user/${item.user}`" class="link-text">{{ item.user }}</router-link>
                    </small>
                </div>
                <!-- <a v-bind:href="item.url">{{ item.title }}</a>
                    <small>
                        {{ item.time_ago }} by 
                        <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>
                    
                    </small> -->
            </li>
        </ul>
    </div>
  
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters([
            'fetchedNews'
        ])
    },
    created() {
        this.$store.dispatch('FETCH_NEWS');
    },
}
</script>

<style scoped>
.news-list {
    margin: 0;
    padding: 0;
}

.post {
    list-style: none;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
}

.points {
    width: 80px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #42b883;
}

.news-title {
    margin: 0;
}

.link-text {
    color: #820828;
}
</style>