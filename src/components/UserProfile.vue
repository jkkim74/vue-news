<template>
   <!-- 질문상세정보 -->
   <div class="user-container">
            <div>
                <i class="fas fa-user"></i>
            </div>
            <div class="user-description">
                <div>
                    <!-- <template v-if="info.user">
                        {{ info.user }}
                    </template>
                    <template v-else>
                        {{ info.id }}
                    </template> -->
                    <slot name="username">
                        <!-- 상위 컴포넌트에서 정의할 영역 -->
                    </slot>
                </div>
                <div>
                    <!-- <template v-if="info.created">
                        {{ info.created }}
                    </template>
                    <template v-else>
                        {{ info.time_ago }}
                    </template> -->
                    <slot name="time">
                        <!-- 상위 컴포넌트에서 정의할 영역 -->
                    </slot>
                </div>
                <slot name="karma"></slot>
            </div>
        
        </div>
</template>

<script>
export default {
    props: {
        info: Object
    },
    computed: {
        userInfo(){
            return this.$store.state.user;
        }
    },

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
