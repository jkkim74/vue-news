<!-- eslint-disable vue/return-in-computed-property -->
<template>
    <div>
        <ul class="news-list">
            <li class="post" v-for=" item in listItems">
                <!-- 포인트 영역 -->
                <div class="points">
                    {{( item.points || 0)}}
        
                </div>
                <!-- 기타정보 -->
                <div>
                    <p class="news-title">
                        <template v-if="item.domain">
                            <a v-bind:href="item.url">{{ item.title }}</a>
                        </template>
                        <template v-else>
                            <router-link v-bind:to="`item/${item.id}`">
                                {{ item.title}}
                            </router-link>
                        </template>
                    </p>
                    <small class="link-text">
                        {{ item.time_ago }} by
                        <router-link
                        v-if="item.user"
                        v-bind:to="`/user/${item.user}`" class="link-text">{{ item.user }}</router-link>
                        <a :href="item.url" v-else>
                            {{ item.domain }}
                        </a>
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
//import { mapGetters } from 'vuex';
export default {
    // created() {
    //     //this.$store.dispatch('FETCH_NEWS');
    //     const name = this.$route.name;
    //     if(name === 'news'){
    //         this.$store.dispatch('FETCH_NEWS');
    //     } else if(name === 'ask'){
    //         this.$store.dispatch('FETCH_ASKS');
    //     } else if(name === 'jobs'){
    //         this.$store.dispatch('FETCH_JOBS');
    //     }
    // },
    computed: {
        // eslint-disable-next-line vue/return-in-computed-property
        listItems() {
            const name = this.$route.name;
            if(name === 'news'){
                return this.$store.state.news;
            } else if(name === 'ask'){
                return this.$store.state.asks;
            } else if(name === 'jobs'){
                return this.$store.state.jobs;
            }
        }
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