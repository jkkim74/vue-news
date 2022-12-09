<template>
<div>
    <ul class="asks-list">
        <li  v-for=" item in fetchedAsk " class="ask">
            <div class="points">
                {{ item.points }}
            </div>
            <div>
                <p class="ask-title">
                    <router-link v-bind:to="`/item/${item.id}`" >{{ item.title }}</router-link>
                </p>
                 <small class="link-text">
                    {{ item.time_ago }} by 
                    <router-link v-bind:to="`/user/${item.user}`" class="link-text">{{ item.user }}</router-link>
                </small>
            </div>
        </li>
    </ul>
</div>  
</template>

<script>

import { mapGetters } from 'vuex';

export default {
    computed: {
        //#3
        ...mapGetters({
            fetchedAsk: 'fetchedAsk'
        })
        //#2
        // ...mapState({
        //     ask: state => state.ask
        // })
    },
    created(){
        this.$store.dispatch('FETCH_ASKS');
    },

}
</script>

<style scoped>
.asks-list {
    margin:0;
    padding: 0;
}
.ask {
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
.ask-title {
    margin: 0;
}

.link-text {
    color: #820828;
}

</style>