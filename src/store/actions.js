import { fetchNewsList, fetchJobsList, fetchAsksList, fetchUserInfo, fetchAskInfo } from '@/api/index'
export default {
    FETCH_NEWS(context){
        fetchNewsList()
        .then(response => {
            context.commit('SET_NEWS',response.data)
        })
        .catch(function(error){
            console.log(error);
        })
    },
    FETCH_JOBS(context){
        fetchJobsList()
        .then(response => {
            context.commit('SET_JOBS',response.data)
        })
        .catch(function(error){
            console.log(error);
        })
    },
    FETCH_ASKS({ commit }){
        fetchAsksList()
        .then(response => {
            commit('SET_ASKS',response.data)
        })
        .catch(function(error){
            console.log(error);
        })
    },
    FETCH_USER({ commit }, name){
        fetchUserInfo(name)
        .then(response => {
            commit('SET_USER',response.data)
        })
        .catch(function(error){
            console.log(error);
        })

    },
    FETCH_ASK_INFO({ commit }, id) {
        fetchAskInfo(id)
            .then(response => {
                commit('SET_ASK_INFO', response.data)
            })
            .catch(function (error) {
                console.log(error);
            })

    }


}