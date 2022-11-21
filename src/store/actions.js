import { fetchNewsList, fetchJobsList, fetchAsksList } from '@/api/index'
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
    FETCH_ASKS(context){
        fetchAsksList()
        .then(response => {
            context.commit('SET_ASKS',response.data)
        })
        .catch(function(error){
            console.log(error);
        })
    }
}